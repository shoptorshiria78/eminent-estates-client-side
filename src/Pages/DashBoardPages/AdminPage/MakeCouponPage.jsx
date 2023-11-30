
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Box, Button, Modal, TextField } from '@mui/material';
import { useState } from 'react';
import useAxiosSecure from '../../../AxiosInterfaces/useAxiosSecure';
import Swal from 'sweetalert2';
import useCoupon from '../../../Hooks/useCoupon';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function createData(couponCode, discountPercentage, couponDescription) {
  return { couponCode, discountPercentage, couponDescription};
}


export default function MakeCouponPage() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const axiosSecure = useAxiosSecure();
  const [coupon] = useCoupon();
  console.log(coupon);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const coupon = {
      couponCode: data.get('couponCode'),
      discountPercentage: data.get('discountPercentage'),
      couponDescription: data.get('couponDescription'),
    };


    axiosSecure.post('/postCoupon', coupon)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coupon Has been saved Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  };

  const rows = coupon.map((singleCoupon) => createData(singleCoupon.couponCode, singleCoupon.discountPercentage, singleCoupon.couponDescription))

  return (
    <div>
      <Typography variant="h4" color="secondary" align="center" sx={{ fontWeight: 600, my: 4 }}>Make Coupon Page</Typography>

      <Button sx={{ my: 4 }} color='primary' align="center" variant="contained" onClick={handleOpen}>Make Coupon</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Coupon
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="couponCode"
              label="Coupon Code"
              name="couponCode"
              autoComplete="couponCode"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="discountPercentage"
              label="Discount Percentage"
              id="discountPercentage"
              autoComplete="discountPercentage"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="couponDescription"
              label="Coupon Description"
              id="couponDescription"
              autoComplete="couponDescription"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>

              <TableCell align="right">#</TableCell>
              <TableCell align="right">Coupon Code</TableCell>
              <TableCell align="right">Discount Percentage</TableCell>
              <TableCell align="right">coupon description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, id) => (
              <TableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {id + 1}
                </TableCell>
                <TableCell align="right">{row.couponCode}</TableCell>
                <TableCell align="right">{row.discountPercentage}</TableCell>
                <TableCell align="right">{row.couponDescription}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}