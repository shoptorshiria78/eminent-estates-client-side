import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../AxiosInterfaces/useAxiosSecure";
import useSingleAgreement from "../Hooks/useSingleAgreement";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCoupon from "../Hooks/useCoupon";
import { DatePicker } from '@mui/x-date-pickers';


const CheckOutForm = () => {
    const axiosSecure = useAxiosSecure();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(' ');
    const [clientSecret, setClientSecret] = useState();
    const [transactionId, setTransactionId] = useState();
    const navigate = useNavigate()

    const { user } = useAuth()
    const [singleAgreement, refetch] = useSingleAgreement(user)
    const price = singleAgreement?.reduce((total, item) => total + parseInt(item.Rent), 0);
    const [coupon] = useCoupon();
    const [value, setValue] = useState(null);
    const [discount, setDiscount] = useState(0);
    const [netPrice, setNetPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    console.log(price, singleAgreement);

    const handleApply = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const couponText = data.get('couponCode');
        const couponCode = coupon.map(item => item.couponCode)
        if (couponCode.includes(couponText)) {
            const value = couponText.replace(/SALE/, ' ')
            const discountedAmount = parseInt(value);
            setDiscount(price * discountedAmount * 0.01)
            setTotalPrice(price);
            setNetPrice(price - price * discountedAmount * 0.01)

        }

    }

    useEffect(() => {
        console.log('payment-intent hitted')
        if (netPrice > 0) {
            axiosSecure.post('/create-payment-intent', { netPrice })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, netPrice])
    console.log(netPrice, clientSecret);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log(error)
            setError(error.message)
        }
        if (paymentMethod) {
            console.log(paymentMethod)
            setError(' ')
        }
        // confirm payment

        const { paymentIntent, error: ConfirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (ConfirmError) {
            console.log('confirmError', ConfirmError)
        }
        else {
            console.log('paymentIntent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id)
                const payment = {
                    email: user.email,
                    price: netPrice,
                    transactionId: paymentIntent.id,
                    date : new Date(),
                    agreementIds: singleAgreement.map(item => item._id),
                    userId: singleAgreement.map(item => item.userInfoId),
                    status: 'pending',
                    month : value.getMonth()+1
                }

                axiosSecure.post('/savePayments', payment)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.paymentResult.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Payment has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/dashboard/paymentHistory');
                            refetch()
                        }
                    })

            }
        }
    }


    return (
        <div>
            <Grid container>
                <Grid item>
                    <Box component="form" noValidate onSubmit={handleApply}>
                        <TextField

                            name="couponCode"
                            autoComplete="couponCode"
                            autoFocus
                            sx={{ mx: 4, my: 4 }} id="outlined-basic" label="Write the coupon" variant="outlined" />
                        <DatePicker
                            label='Select Month'
                            value={value}
                            views={['month']}
                            inputFormat="MMMM"
                            openTo="month"
                            sx={{ width: 150, my: 4, mx: 4 }}
                            onChange={(newValue) => setValue(newValue)}>

                        </DatePicker>
                        <Button type="submit" sx={{ my: 4 }} variant='contained' color='secondary' size="large">Apply Coupon</Button>
                    </Box>
                </Grid>

            </Grid>

            <Typography>Total Price:{totalPrice}</Typography>
            <Typography>Discounted Price:{discount}</Typography>
            <Typography>Net Price:{netPrice}</Typography>

            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <Button sx={{ px: 6, my: 3 }} type="submit" color="primary" variant="contained" disabled={!stripe || !clientSecret}>
                    Pay
                </Button>

                <Typography color={red}>{error}</Typography>
                {
                    transactionId && <Typography>Your Transaction Id is:{transactionId}</Typography>
                }

            </form >
        </div>
    );
};

export default CheckOutForm;