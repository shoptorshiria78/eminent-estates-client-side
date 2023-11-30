import { Avatar } from "@mui/material";
import Typography from '@mui/material/Typography';
import useAuth from "../../../Hooks/useAuth";
 import useUser from "../../../Hooks/useUser";
import useSingleAgreement from "../../../Hooks/useSingleAgreement";

const MyProfile = () => {

    const { user } = useAuth();
    const [singleAgreement] = useSingleAgreement(user)
   
    const [users] = useUser();
    const presentUser = users.find(mUser => mUser.email === user.email);
   

    console.log( singleAgreement);
    
    return (
        <div>
            <Typography variant="h4" color="secondary" align="center" sx={{ fontWeight: 600, my: 4 }}>My Profile</Typography>
           {
            singleAgreement && <>
             <Avatar alt="Remy Sharp" align='center' sx={{ my: 4 }} src={presentUser?.photo} />
            <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Name:  {presentUser?.name || "No data available"}</Typography>
            <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Email:  {presentUser?.email || "No data available"}</Typography>
            <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Agreement Accept Date: {singleAgreement[0]?.Date || "No data available"} </Typography>
            <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Floor No:  {singleAgreement[0]?.FloorNo  || "No data available"}</Typography>
            <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Block Name:  {singleAgreement[0]?.BlockName || "No data available"} </Typography>
            <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Room No:  {singleAgreement[0]?.RoomNo || "No data available"} </Typography>
            <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Rent:  ${singleAgreement[0]?.Rent || "No data available"} </Typography>
            </> 
           }


        </div>
    );
};

export default MyProfile;