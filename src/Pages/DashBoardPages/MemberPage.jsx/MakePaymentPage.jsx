import { Typography } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../../../Component/CheckOutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const MakePaymentPage = () => {
    return (
        <div>
            <Typography variant="h4" color="secondary" align="center" sx={{ fontWeight: 600, my: 4 }}>Make Payment with Stripe</Typography>
            
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default MakePaymentPage;