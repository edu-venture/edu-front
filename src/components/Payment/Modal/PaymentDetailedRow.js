import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
const PaymentDetailedRow = ({ historyRow }) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {historyRow.date}
      </TableCell>
      <TableCell>{historyRow.courseId}</TableCell>
      <TableCell align="right">{historyRow.amount}</TableCell>
    </TableRow>
  );
};
export default PaymentDetailedRow;
