import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import PaymentRow from "./PaymentRow";

const PaymentModalLayout = () => {
  const [modalData, setModalData] = useState({});
  const userNo = 1;
  const issDate = "202308";
  useEffect(() => {
    axios
      .get(`http://192.168.0.4:9093/payment/${userNo}/receipt/${issDate}`)
      .then((response) => {
        setModalData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell> 년도 </TableCell>
            <TableCell align="right"> 월 </TableCell>
            <TableCell align="right">총 액</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <PaymentRow receipt={modalData} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default PaymentModalLayout;
