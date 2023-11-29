import Typography from '@mui/material/Typography';
import useAgreement from '../../../Hooks/useAgreement';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Button } from '@mui/material';
import useAxiosSecure from '../../../AxiosInterfaces/useAxiosSecure';
import Swal from 'sweetalert2';


function createData(UserName, UserEmail, FloorNo, BlockName, RoomNo, Rent, Date, status, _id, userInfoId) {
  return { UserName, UserEmail, FloorNo, BlockName, RoomNo, Rent, Date, status, _id, userInfoId};
}

const AgreementPage = () => {

  const [agreement, refetch] = useAgreement();
  const axiosSecure = useAxiosSecure()
  
  const handleAccept = (_id, uId)=>{
    const status = 'checked';
    const userRole = 'member';
    const role ="member";
    const updatedDoc = {
      status,
      userRole
    }
   axiosSecure.patch(`/updateAgreement/${_id}`, updatedDoc)
    .then(res=>{
      if(res.data.modifiedCount > 0){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Agreement has been Updated",
          showConfirmButton: false,
          timer: 1500
        });
        refetch();
      }
    })

    const roleUpdate ={ role}
    axiosSecure.patch(`/updateUser/${uId}`, roleUpdate)
    .then(res=>{
      console.log(res)
      if(res.data.modifiedCount > 0){ 
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User has been Updated",
          showConfirmButton: false,
          timer: 1500
        });
        refetch();
      }
    })
   
     
  }

  const handleReject = (_id)=>{
    const status = 'checked';
    const userRole = 'user';

    const updatedDoc = {
      status,
      userRole
    }
    axiosSecure.patch(`/updateAgreement/${_id}`, updatedDoc)
    .then(res=>{
      if(res.data.modifiedCount > 0){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Agreement has been Updated",
          showConfirmButton: false,
          timer: 1500
        });
        refetch();
      }
    })
   
  }

  const rows = agreement.map((singleAgreement) => createData(singleAgreement.UserName, singleAgreement.UserEmail, singleAgreement.FloorNo, singleAgreement.BlockName, singleAgreement.RoomNo, singleAgreement.Rent, singleAgreement.Date, singleAgreement.status, singleAgreement._id, singleAgreement.userInfoId))
  console.log(rows);

  return (
    <div>
      <Typography variant="h4" color="secondary" align="center" sx={{ fontWeight: 600, my: 4 }}>List Of Agreements</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>

              <TableCell align="right">#</TableCell>
              <TableCell align="right">User Name</TableCell>
              <TableCell align="right">User Email</TableCell>
              <TableCell align="right">Floor No</TableCell>
              <TableCell align="right">Block Name</TableCell>
              <TableCell align="right">Room No</TableCell>
              <TableCell align="right">Rent</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">id</TableCell>
              <TableCell align="right">Accept</TableCell>
              <TableCell align="right">Reject</TableCell>
             
             
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
                <TableCell align="right">{row.UserName}</TableCell>
                <TableCell align="right">{row.UserEmail}</TableCell>
                <TableCell align="right">{row.FloorNo}</TableCell>
                <TableCell align="right">{row.BlockName}</TableCell>
                <TableCell align="right">{row.RoomNo}</TableCell>
                <TableCell align="right">{row.Rent}</TableCell>
                <TableCell align="right">{row.Date}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row._id}</TableCell>
                <TableCell align="right"><Button onClick={()=>handleAccept(row._id, row.userInfoId)}><ThumbUpIcon/></Button></TableCell>
                <TableCell align="right"><Button onClick={()=>handleReject(row._id)}><DeleteIcon/></Button></TableCell>
                

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
};

export default AgreementPage;