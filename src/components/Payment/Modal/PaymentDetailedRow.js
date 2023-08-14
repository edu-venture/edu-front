import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
const PaymentDetailedRow = ({ historyRow }) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {/* {historyRow.date}{" "} */}
        {/*여기 products안에 날짜가 추가로 있어야함. 기존에 있던 payDate는 달과 년으로 나누고 products안에 들어갈 날짜는 2023-08-02처럼 결제 날짜로 사용할 것*/}
      </TableCell>
      <TableCell>{historyRow.proName}</TableCell>
      <TableCell align="right">{historyRow.proPrice}</TableCell>
    </TableRow>
  );
};
export default PaymentDetailedRow;
