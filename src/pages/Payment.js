import React, { useEffect, useState } from "react";
import TextBox from "../components/Payment/TextBox";
import PaymentTable from "../components/Payment/PaymentTable";
import PaymentModal from "../components/Payment/PaymentModal";
import { Paper, Divider, Button } from "@mui/material";
import axios from "axios";

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
  const [paymentDataAxios, setPaymentDataAxios] = useState("");

  const userNo = 1;
  const issDate = "202308";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.0.4:9093/payment/${userNo}/bill/${issDate}`
        );
        setPaymentDataAxios(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const onClickPayment = () => {
    const { IMP } = window;
    IMP.init("imp31057650");

    const productName = `${paymentDataAxios.item.products[0].proName} 외 ${
      paymentDataAxios.item.products.length - 1
    }개 상품`;

    const paydata = {
      pg: "kcp.T0000",
      pay_method: "card",
      merchant_uid: "merchant_" + new Date().getTime(),
      name: productName,
      amount: paymentDataAxios.item.totalPrice,
      buyer_name: paymentDataAxios.item.payTo,
    };
    IMP.request_pay(paydata, callback);
  };

  const callback = (response) => {
    const { success, imp_uid, error_msg } = response;

    if (success) {
      alert("결제 성공");

      console.log(response);

      // 검증을 위한 서버 요청
      axios
        .post(`http://192.168.0.4:9093/iamport/verifyIamport/${imp_uid}`)
        .then((response) => {
          // 서버에서 받은 응답을 검증
          console.log(response);
          if (
            response.data.response.amount == paymentDataAxios.item.totalPrice
          ) {
            alert("결제 및 결제검증완료");
            //결제 성공 시 비즈니스 로직
            axios
              .post(`http://192.168.0.4:9093/iamport/payOk`, {
                impUid: imp_uid,
                payNo: paymentDataAxios.item.payNo,
              })
              .then((resp) => {
                console.log(resp);
              })
              .catch((error) => {
                console.error("Failed to fetch data", error);
              });
          } else {
            alert("결제에 실패하였습니다");
            // 결제 실패 시 로직
          }
        })
        .catch((error) => {
          console.error("Failed to fetch data", error);
        });
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Paper className="paymentContainer" sx={paymentContainer}>
        <Paper className="paymentWhiteBox" sx={paymentWhiteBox}>
          <TextBox
            academyName={paymentDataAxios?.item?.payFrom}
            month={paymentDataAxios?.item?.issMonth + `월`} //달로 보내주세요.
            amount={paymentDataAxios?.item?.totalPrice.toLocaleString("ko-KR")}
          >
            <PaymentModal isOpen={isOpen} handleModal={handleModal} />
          </TextBox>
          <Divider sx={divider} />
          <PaymentTable paymentData={paymentDataAxios} />
          <Divider sx={divider} />
          <Button variant="contained" sx={payButton} onClick={onClickPayment}>
            결제하기
          </Button>
        </Paper>
      </Paper>
    </>
  );
};

export default Payment;
