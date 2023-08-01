import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const tableContainerStyle = {
  maxHeight: "55%",
};

const tableContentStyle = {
  background: "#fff",
  paddingBottom: "20px",
};

const PaymentTable = ({ rows }) => (
  <TableContainer sx={tableContainerStyle}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left" sx={{ borderBottom: "none", pl: 10 }}>
            상세 내역
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(() => (
          <TableRow>
            <TableCell align="left" sx={{ ...tableContentStyle, pl: 15 }}>
              항목1
            </TableCell>
            <TableCell align="right" sx={{ ...tableContentStyle, pr: 15 }}>
              금액1
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default PaymentTable;
