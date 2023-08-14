import React, { useEffect, useState } from "react";
import axios from "axios";

const Payment = () => {
  const [data, setData] = useState(null);
  const userNo = 3;
  const isDate = "202308";

  useEffect(() => {
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(iamport);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9093/payment/${userNo}/bill/${isDate}`
        );
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();

    return () => {
      document.head.removeChild(iamport);
    };
  }, []);

  const onClickPayment = () => {
    const { IMP } = window;
    IMP.init("imp31057650");

    var productName = `${data.item.products[0].proName} 외 ${
      data.item.products.length - 1
    }개 상품`;

    const paydata = {
      pg: "kcp.T0000",
      pay_method: "card",
      merchant_uid: "merchant_" + new Date().getTime(),
      name: productName,
      amount: data.item.totalPrice,
      buyer_name: data.item.payTo,
    };
    IMP.request_pay(paydata, callback);
  };

  function callback(response) {
    const { success, imp_uid, error_msg } = response;

    if (success) {
      alert("결제 성공");

      console.log(response);

      // 검증을 위한 서버 요청
      axios
        .post(`http://localhost:9093/iamport/verifyIamport/${imp_uid}`)
        .then((response) => {
          // 서버에서 받은 응답을 검증
          console.log(response);
          if (response.data.response.amount == data.item.totalPrice) {
            alert("결제 및 결제검증완료");
            //결제 성공 시 비즈니스 로직
            axios
              .post(`http://localhost:9093/iamport/verify`, {
                impUid: imp_uid,
                payNo: data.item.payNo,
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
  }

  const productItems = data?.item?.products.map((product) => (
    <li key={product.proNo}>
      <h2>{product.proName}</h2>
      <p>가격: {product.proPrice}</p>
      <p>설명: {product.proInfo}</p>
    </li>
  ));

  return (
    <div>
      <h1>결제 정보</h1>
      <p>납부 번호: {data?.item?.payNo}</p>
      <p>사용자 번호: {data?.item?.userNo}</p>
      <p>납부서 발급 날짜: {data?.item?.issDate}</p>
      <p>요청한 사람: {data?.item?.payFrom}</p>
      <p>결제해야 하는 사람: {data?.item?.payTo}</p>
      <p>총 가격: {data?.item?.totalPrice}</p>
      <h2>제품 목록:</h2>
      <ul>{productItems}</ul>
      <button onClick={onClickPayment}>결제하기</button>
    </div>
  );
};

export default Payment;
