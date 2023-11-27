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

function createData(UserName, UserEmail, FloorNo, BlockName, RoomNo, Rent, AgreementRequestDate, Accept, Reject) {
  return { UserName, UserEmail, FloorNo, BlockName, RoomNo, Rent, AgreementRequestDate, Accept, Reject };
}

const AgreementPage = () => {

  const [agreement, refetch] = useAgreement()

  const rows = agreement.map((singleAgreement) => createData(singleAgreement.UserName, singleAgreement.UserEmail, singleAgreement.FloorNo, singleAgreement.BlockName, singleAgreement.RoomNo, singleAgreement.Rent, singleAgreement.Date))

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
                <TableCell align="right"><ThumbUpIcon/></TableCell>
                <TableCell align="right"><DeleteIcon/></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
};

export default AgreementPage;