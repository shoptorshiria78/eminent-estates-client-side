import { Avatar } from "@mui/material";
import Typography from '@mui/material/Typography';

const MyProfile = () => {

    
    return (
        <div>
            <Typography variant="h4" color="secondary" align="center" sx={{fontWeight:600, my:4}}>My Profile</Typography>
            <Avatar alt="Remy Sharp" align='center' sx={{my:4}} src="/static/images/avatar/1.jpg" />
            <Typography variant="h6" color="primary" align="left" sx={{fontWeight:400, my:4}}>Name:</Typography>
            <Typography variant="h6" color="primary" align="left" sx={{fontWeight:400, my:4}}>Email:</Typography>
            <Typography variant="h6" color="primary" align="left" sx={{fontWeight:400, my:4}}>Agreement Accept Date</Typography>
            <Typography variant="h6" color="primary" align="left" sx={{fontWeight:400, my:4}}>Floor No:</Typography>
            <Typography variant="h6" color="primary" align="left" sx={{fontWeight:400, my:4}}>Block Name:</Typography>
            <Typography variant="h6" color="primary" align="left" sx={{fontWeight:400, my:4}}>Room No:</Typography>
            <Typography variant="h6" color="primary" align="left" sx={{fontWeight:400, my:4}}>Rent:</Typography>
            
            
        </div>
    );
};

export default MyProfile;