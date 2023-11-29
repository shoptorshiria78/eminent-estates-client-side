
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import useAgreement from '../../../Hooks/useAgreement';

function createData(UserName, UserEmail, Action) {
  return { UserName, UserEmail, Action };
}


export default function ManageMembers() {

  const [agreement] = useAgreement();
  console.log(agreement);
  const members = agreement.filter(user=> user.userRole === 'member')
  const rows = members.map((user) => createData(user.UserName, user.UserEmail))

  return (
    <div>
       <Typography variant="h4" color="secondary" align="center" sx={{fontWeight:600, my:4}}>Manage Members</Typography>
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
                  {id + 1}
                </TableCell>
                <TableCell align="right">{row.UserName}</TableCell>
                <TableCell align="right">{row.UserEmail}</TableCell>
                <TableCell align="right"><DeleteIcon/></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}