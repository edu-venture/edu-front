import React, { useState } from "react";
import TextBox from "../components/Payment/TextBox";
import PaymentTable from "../components/Payment/PaymentTable";
import PaymentModal from "../components/Payment/PaymentModal";
import { Paper, Divider, Button } from "@mui/material";
import paymentData from "../utils/paymentData.json";

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
  top: "118px",
  position: "relative",
  backgroundColor: "black",
  color: "white",
  "&:hover": {
    backgroundColor: "darkgrey",
  },
};

const Payment = () => {
  const totalAmount = Object.values(paymentData).reduce((total, item) => {
    return total + Number(item.amount);
  }, 0);

  const formattedTotalAmount = totalAmount.toLocaleString("ko-KR");

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Paper className="paymentContainer" sx={paymentContainer}>
        <Paper className="paymentWhiteBox" sx={paymentWhiteBox}>
          <TextBox
            academyName="[학원명]"
            month="7월"
            amount={formattedTotalAmount}
          >
            <PaymentModal isOpen={isOpen} handleModal={handleModal} />
          </TextBox>
          <Divider sx={divider} />
          <PaymentTable />
          <Divider sx={divider} />
          <Paper sx={payArea}>
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
