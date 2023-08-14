import React, { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PaymentDetailedRow from "./PaymentDetailedRow";

const PaymentRow = ({ receipt }) => {
  const [open, setOpen] = useState(false);
  // const totalAmount = receipt.history.reduce(
  //   (sum, record) => sum + record.amount,
  //   0
  // );

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {receipt?.item?.payYear} {/* 년 데이터로 받자. */}
        </TableCell>
        <TableCell align="right">{receipt?.item?.payMonth}</TableCell>{" "}
        {/* 월 데이터로 받자. */}
        <TableCell align="right">{receipt?.item?.totalPrice}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                상세 내역
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>날 짜</TableCell>
                    <TableCell>수강 과목</TableCell>
                    <TableCell align="right">가 격</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {receipt?.item?.products?.map((element) => (
                    <PaymentDetailedRow
                      key={element?.proNo}
                      historyRow={element}
                    />
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default PaymentRow;
