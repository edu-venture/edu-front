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
  flexGrow: 1,
};

const tableContentStyle = {
  background: "#fff",
  paddingBottom: "20px",
};

const PaymentTable = ({ paymentData }) => (
  <TableContainer sx={tableContainerStyle}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow receipt={paymentData}>
          <TableCell
            align="left"
            sx={{
              borderBottom: "none",
              pl: 15,
              fontWeight: 700,
              fontSize: "1.2rem",
            }}
          >
            상세 내역
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* {Object.entries(paymentData).map(([key, value], index) => (
          <TableRow key={index}>
            <TableCell align="left" sx={{ ...tableContentStyle, pl: 15 }}>
              {key}
            </TableCell>
            <TableCell align="right" sx={{ ...tableContentStyle, pr: 15 }}>
              {value.amount.toLocaleString("ko-KR")}
            </TableCell>
          </TableRow>
        ))} */}
        {paymentData?.item?.products?.map((paymentItem, index) => {
          return (
            <TableRow key={index} receipt={paymentData.item}>
              <TableCell align="left" sx={{ ...tableContentStyle, pl: 15 }}>
                <div key={paymentItem?.proNo}>{paymentItem?.proName}</div>
              </TableCell>
              <TableCell align="right" sx={{ ...tableContentStyle, pr: 15 }}>
                <div key={paymentItem?.proNo}>
                  {paymentItem?.proPrice.toLocaleString("ko-KR")}
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </TableContainer>
);

export default PaymentTable;
