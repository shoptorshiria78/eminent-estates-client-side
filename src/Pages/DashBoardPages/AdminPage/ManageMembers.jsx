
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useUser from '../../../Hooks/useUser';
import { Delete } from '@mui/icons-material';

function createData(UserName,UserEmail,Action) {
  return { UserName, UserEmail, Action };
}


// [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function ManageMembers() {

    const [users] = useUser();
    console.log(users);
    const rows = users.map((user) =>createData( user.name, user.email, Delete))

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="right">#</TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">User Email</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, id) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {id+1}
              </TableCell>
              <TableCell align="right">{row.UserName}</TableCell>
              <TableCell align="right">{row.UserEmail}</TableCell>
              <TableCell align="right">DELETE</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}