import React, { useState } from "react";
import TextBox from "../components/Payment/TextBox";
import PaymentTable from "../components/Payment/PaymentTable";
import PaymentModal from "../components/Payment/PaymentModal";
import { Paper, Divider, Button } from "@mui/material";
import paymentData from "../utils/paymentData.json";

const paymentContainer = {
  width: "100vw",
  height: "calc(100vh - 50px)",
  backgroundColor: "#4A4F6B",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0px",
};

const paymentWhiteBox = {
  display: "flex",
  flexDirection: "column",
  width: "85vw",
  height: "80%",
  backgroundColor: "#f2f2f2",
};

const divider = {
  borderWidth: 2,
  borderStyle: "solid",
};

const payButton = {
  width: "100%",
  height: "10%",
  position: "relative",
  backgroundColor: "#171A2B",
  color: "white",
  "&:hover": {
    backgroundColor: "#000",
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
          <Button variant="contained" sx={payButton}>
            결제하기
          </Button>
        </Paper>
      </Paper>
    </>
  );
};

export default Payment;
