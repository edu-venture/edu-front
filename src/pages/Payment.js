import React from "react";
import Header from "../components/Header";
import TextBox from "../components/Payment/TextBox";
import PaymentTable from "../components/Payment/PaymentTable";
import PaymentOption from "../components/Payment/PaymentOption";
import { Paper, Divider, Button } from "@mui/material";

const paymentContainer = {
  position: "relative",
  width: "100vw",
  height: "100vh",
  backgroundColor: "#4A4F6B",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0px",
};

const paymentWhiteBox = {
  position: "relative",
  width: "85vw",
  height: "80%",
  backgroundColor: "#f2f2f2",
};

const divider = {
  borderWidth: 2,
  borderStyle: "solid",
};

const payArea = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "30%",
};

const payButton = {
  width: "100%",
  height: "35%",
  position: "relative",
  backgroundColor: "black",
  color: "white",
  "&:hover": {
    backgroundColor: "darkgrey",
  },
};

const Payment = () => {
  return (
    <>
      <Paper className="paymentContainer" sx={paymentContainer}>
        <Paper className="paymentWhiteBox" sx={paymentWhiteBox}>
          <TextBox academyName="[학원명]" month="7월" amount="240,000원" />
          <Divider sx={divider} />
          <PaymentTable rows={Array(30).fill()} />
          <Divider sx={divider} />
          <Paper sx={payArea}>
            <PaymentOption />
            <Button variant="contained" sx={payButton}>
              결제하기
            </Button>
          </Paper>
        </Paper>
      </Paper>
    </>
  );
};

export default Payment;
