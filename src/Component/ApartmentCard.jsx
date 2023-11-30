import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useAxiosSecure from '../AxiosInterfaces/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
 import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {  useState } from 'react';
import Swal from 'sweetalert2';
 import useUser from '../Hooks/useUser';



export default function ApartmentCard({ apartment }) {
  const [users] = useUser();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [value, setValue] = useState(null);
  const [Booked, setBooked] = useState(false);
  const PresentUser = users.find(singleUser=> singleUser.email === user.email)
 

 
  const handleAgreement = () => {
   
    const UserName = PresentUser.name;
    const UserEmail = PresentUser.email;
    const FloorNo = apartment.floorNo;
    const BlockName = apartment.blockName
    const RoomNo = apartment.apartmentNo
    const Rent = apartment.rent
    const Date = value;
    const status = 'pending';
    const userRole = 'user';
    const userInfoId =PresentUser._id;
   
    

    const agreementInfo = {
      UserName,
      UserEmail,
      FloorNo,
      BlockName,
      RoomNo,
      Rent,
      Date ,
      status,
      userRole,
      userInfoId,


    }
      
    console.log(agreementInfo);

    axiosSecure.post('/agreement', agreementInfo)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Agreement Has been saved Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          setValue(null)
          setBooked(true);
        }

      })

  }

  return (
    <Card sx={{ maxWidth: 345, maxHeight: 420 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        sx={{ width: '100%', height: '40%' }}
        image={apartment.apartmentImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Floor No: {apartment.floorNo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Block Name: {apartment.blockName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Apartment No: {apartment.apartmentNo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Apartment Rent: ${apartment.rent}
        </Typography>
        <DatePicker
        sx={{my:1}}
          label='Select Date'
          value={value}
          onChange={(newValue) => setValue(newValue)}>

        </DatePicker>
      </CardContent>
      <CardActions>
        {
          Booked ? <Button variant='contained' color='primary' size="small">Booked</Button>
            : <Button onClick={handleAgreement} variant='contained' color='secondary' size="small">Agreement</Button>
        }
      </CardActions>

    </Card>
  );
}