
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import useUser from '../../../Hooks/useUser';
import useAxiosSecure from '../../../AxiosInterfaces/useAxiosSecure';
import Swal from 'sweetalert2';

function createData(name, email, _id) {
  return { name, email, _id };
}


export default function ManageMembers() {

  const [users, refetch] = useUser();
  const axiosSecure = useAxiosSecure()
  
  const members = users.filter(user=> user.role === 'member')
  const rows = members.map((user) => createData(user.name, user.email, user._id))
  console.log(rows);


  const handleDelete=(id)=>{
    console.log(id);
    const role ="user";
    const roleUpdate ={ role}
    axiosSecure.patch(`/updateUser/${id}`, roleUpdate)
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

  return (
    <div>
       <Typography variant="h4" color="secondary" align="center" sx={{fontWeight:600, my:4}}>Manage Members</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>

              <TableCell align="left">#</TableCell>
              <TableCell align="left">User Name</TableCell>
              <TableCell align="left">User Email</TableCell>
              <TableCell align="left">Action</TableCell>
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
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell onClick={()=>handleDelete(row._id)} align="left"><DeleteIcon/></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}