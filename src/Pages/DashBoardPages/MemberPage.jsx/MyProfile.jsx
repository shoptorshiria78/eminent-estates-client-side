import { Avatar } from "@mui/material";
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../AxiosInterfaces/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import useUser from "../../../Hooks/useUser";

const MyProfile = () => {

    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [ data, setData] = useState(null);
    const [users] = useUser();
    const presentUser = users.find(mUser => mUser.email === user.email)
    useEffect(()=>{    
        axiosSecure.get(`/getAgreement/${user.email}`)
            .then(res => {
                const info = res.data;
                console.log(info);
                setData(info)
            })
            .catch(error=>{
                console.log(error)
            })
    },[axiosSecure,user.email])

    console.log(presentUser, data);
    
    return (
        <div>
            <Typography variant="h4" color="secondary" align="center" sx={{ fontWeight: 600, my: 4 }}>My Profile</Typography>
           {
            data? <>
             <Avatar alt="Remy Sharp" align='center' sx={{ my: 4 }} src={presentUser.photo} />
            <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Name:  {data.UserName}</Typography>
            <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Email:  {data.UserEmail}</Typography>
            <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Agreement Accept Date:  {data.Date}</Typography>
            <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Floor No:  {data.FloorNo}</Typography>
            <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Block Name:  {data.BlockName}</Typography>
            <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Room No:  {data.RoomNo}</Typography>
            <Typography variant="h6" color="primary" align="left" sx={{ fontWeight: 400, my: 4 }}>Rent:  ${data.Rent}</Typography>
            </>:
            loading
           }


        </div>
    );
};

export default MyProfile;