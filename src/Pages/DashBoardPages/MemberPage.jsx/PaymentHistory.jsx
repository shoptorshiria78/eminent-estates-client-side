import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import usePaymentHistory from "../../../Hooks/usePaymentHistory";

function createData(email, price , transactionId, date, month) {
    return { email, price , transactionId, date, month };
}

const PaymentHistory = () => {
    
const[ paymentHistory, refetch] = usePaymentHistory();
const rows = paymentHistory?.map((info) => createData(info.email, info.price, info.transactionId, info.date, info.month))

    return (
        <div>
            <Typography variant="h4" color="secondary" align="center" sx={{ fontWeight: 600, my: 4 }}> Payment History</Typography>
            <TableContainer sx={{my:3}} component={Paper}>
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