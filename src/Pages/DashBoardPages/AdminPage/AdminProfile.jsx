import { Avatar, Card, CardContent, Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import useAuth from "../../../Hooks/useAuth";
import useUser from "../../../Hooks/useUser";
import useAgreement from "../../../Hooks/useAgreement";
import useApartments from "../../../Hooks/useApartments";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddHomeIcon from '@mui/icons-material/AddHome';
import BusinessIcon from '@mui/icons-material/Business';
import DomainDisabledIcon from '@mui/icons-material/DomainDisabled';

const AdminProfile = () => {

    const { user } = useAuth();
    const [agreement] = useAgreement();
    const [apartments] = useApartments()
    const [users] = useUser();
    const totalMembers = users.filter(user=> user.role === 'member');
    const totalUser = users.filter(user=> user.role === 'user');
    const presentUser = users.find(mUser => mUser.email === user.email);
    return (
        <div>
            <Typography variant="h4" color="secondary" align="center" sx={{ fontWeight: 600, my: 4 }}>Admin Profile</Typography>
            <Avatar alt="Remy Sharp" align='center' sx={{ my: 4 }} src={presentUser?.photo} />
            <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Name:  {presentUser?.name || "No data available"}</Typography>
            <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Email:  {presentUser?.email || "No data available"}</Typography>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card sx={{ minWidth: 200, backgroundImage: 'linear-gradient(45deg, #7B66FF 30%, #C5FFF8 90%)', mx:2 ,my:2}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Total Members
                        </Typography>
                        <Typography variant="h3" component="div">
                            {totalMembers.length}<PeopleAltIcon/> 
                        </Typography>
                    </CardContent>

                </Card>
                <Card sx={{ minWidth: 200, backgroundImage: 'linear-gradient(45deg, #7B66FF 30%, #C5FFF8 90%)', mx:2, my:2  }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Total Users
                        </Typography>
                        <Typography variant="h3" component="div">
                            {totalUser.length} <AccountBoxIcon/>
                        </Typography>
                    </CardContent>

                </Card>
                <Card sx={{ minWidth: 200, backgroundImage: 'linear-gradient(45deg, #7B66FF 30%, #C5FFF8 90%)', mx:2, my:2 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Total Number of Apartments
                        </Typography>
                        <Typography variant="h3" component="div">
                            {apartments.length} <AddHomeIcon/>
                        </Typography>
                    </CardContent>

                </Card>
                <Card sx={{ minWidth: 200, backgroundImage: 'linear-gradient(45deg, #7B66FF 30%, #C5FFF8 90%)', mx:2, my:2  }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Booked Apartment
                        </Typography>
                        <Typography variant="h3" component="div">
                            {agreement.length} <DomainDisabledIcon/>
                        </Typography>
                    </CardContent>

                </Card>
                <Card sx={{ minWidth: 200, backgroundImage: 'linear-gradient(45deg, #7B66FF 30%, #C5FFF8 90%)' , mx:2, my:2 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Remaining Apartment
                        </Typography>
                        <Typography variant="h3" component="div">
                            {apartments.length - agreement.length} <BusinessIcon/>
                        </Typography>
                    </CardContent>

                </Card>
            </Grid>

        </div>
    );
};

export default AdminProfile;