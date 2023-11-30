
import Typography from '@mui/material/Typography';
import useAuth from "../../../Hooks/useAuth";

import {  Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useSingleAgreement from '../../../Hooks/useSingleAgreement';


function createData(UserName, UserEmail, FloorNo, BlockName, RoomNo, Rent, Date, _id) {
    return { UserName, UserEmail, FloorNo, BlockName, RoomNo, Rent, Date, _id };
}


const MakePayment = () => {

    

    const { user } = useAuth();
    const navigate = useNavigate();
    const [singleAgreement] = useSingleAgreement(user);
    console.log(singleAgreement);
    

    

    const handlePayment = () => {
        navigate(`/dashboard/makePaymentPage/`)
    }

    const rows = singleAgreement?.map((info) => createData(info.UserName, info.UserEmail, info.FloorNo, info.BlockName, info.RoomNo, info.Rent, info.Date, info._id))



    return (
        <div>
            <Typography variant="h4" color="secondary" align="center" sx={{ fontWeight: 600, my: 4 }}>Make Payment</Typography>
            <Grid item>
                    
                    <Button  sx={{ my: 4, mx: 4, px: 6 }} onClick={handlePayment} variant='contained' color='secondary' size="large">Pay</Button>
                </Grid>
            <TableContainer sx={{my:3}} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell align="left">#</TableCell>
                            <TableCell align="left">User Name</TableCell>
                            <TableCell align="left">User Email</TableCell>
                            <TableCell align="left">Floor No</TableCell>
                            <TableCell align="left">Block Name</TableCell>
                            <TableCell align="left">Room No</TableCell>
                            <TableCell align="left">Rent</TableCell>
                            <TableCell align="left">Date</TableCell>


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
                                <TableCell align="left">{row.UserName}</TableCell>
                                <TableCell align="left">{row.UserEmail}</TableCell>
                                <TableCell align="left">{row.FloorNo}</TableCell>
                                <TableCell align="left">{row.BlockName}</TableCell>
                                <TableCell align="left">{row.RoomNo}</TableCell>
                                <TableCell align="left">$ {row.Rent}</TableCell>
                                <TableCell align="left"> {row.Date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* {
                singleAgreement && <>
                    <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Name:  {user.name}</Typography>
                    <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Email:  {user.email}</Typography>
                    <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Agreement Accept Date:  {data?.Date || "No data available"} </Typography>
                    <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Floor No:  {data?.FloorNo || "No data available"} </Typography>
                    <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Block Name:  {data?.BlockName || "No data available"}</Typography>
                    <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Room No:  {data?.RoomNo || "No data available"}</Typography>
                    <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Rent:  ${data?.Rent || "No data available"}</Typography>

                    <DatePicker
                        label='Select Month'
                        value={value}
                        views={['month']}
                        inputFormat="MMMM"
                        openTo="month"
                        onChange={(newValue) => setValue(newValue)}>

                    </DatePicker>
                    <Button onClick={handlePayment} variant='contained' color='secondary' sx={{ ml: 6, py: 2, px: 6 }} size="large">Pay</Button>
                </>
            } */}


        </div>
    );
};

export default MakePayment;