import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import {  useState } from "react";
import useAxiosSecure from "../../../AxiosInterfaces/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import usePaymentHistory from "../../../Hooks/usePaymentHistory";


function createData(email, price, transactionId, date, month) {
    return { email, price, transactionId, date, month };
}

const PaymentHistory = () => {

    const [paymentAllHistory, setPaymentAllHistory] = useState(null);
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const  [paymentHistory] = usePaymentHistory()

    const handleapply = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const searchField = data.get('searchMonth');
        axiosSecure.get(`/paymentHistory/${user.email}?search=${searchField}`)
        .then(res => {
            setPaymentAllHistory(res.data)
        })
       
    }
    console.log(paymentAllHistory)
   
    const rows = paymentAllHistory?.map((info) => createData(info.email, info.price, info.transactionId, info.date, info.month))|| paymentHistory?.map((info) => createData(info.email, info.price, info.transactionId, info.date, info.month));
    
    

    return (
        <div>
            <Typography variant="h4" color="secondary" align="center" sx={{ fontWeight: 600, my: 4 }}> Payment History</Typography>
            <Box component="form" noValidate onSubmit={handleapply}>
                <TextField
                    handleApply
                    name="searchMonth"
                    autoComplete="searchMonth"
                    autoFocus
                    sx={{ mx: 4, my: 4 }} id="outlined-basic" label="Search Month with Number" variant="outlined" />
                <Button type="submit" sx={{ my: 4 }} variant='contained' color='secondary' size="large">Search Month</Button>
            </Box>
            <TableContainer sx={{ my: 3 }} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell align="left">#</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">transactionId</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Month</TableCell>



                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows?.map((row, id) => (
                            <TableRow
                                key={id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {id + 1}
                                </TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.price}</TableCell>
                                <TableCell align="left">{row.transactionId}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">{row.month}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default PaymentHistory;