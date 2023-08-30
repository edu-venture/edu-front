import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ReceiptSelectUpdateItem from "./ReceiptSelectUpdateItem";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #fafafa;
  align-items: stretch;
`;

const PaymentInfo = styled.div`
  flex: 1;
  background: #fafafa;
  padding: 10px 0 50px 50px;
  border-top: 3px solid #e3e3e3;
  border-bottom: 3px solid #e3e3e3;
`;

const InfoHead = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;

const Wrapper = styled.div`
  margin-top: 20px;
`;

const ReceiptSelectUpdateList = ({ setTotalPrice, userData, allUserData }) => {
  const [selectedClaName, setSelectedClaName] = useState(userData.claName);
  const [selectedUserName, setSelectedUserName] = useState(userData.userName);

  console.log("Update 222222.", userData);
  console.log("Update, allUser", allUserData);

  return (
    <Wrapper>
      <Container>
        <PaymentInfo>
          <InfoHead>반</InfoHead>
          <select
            type="text"
            value={selectedClaName}
            onChange={(e) => setSelectedClaName(e.target.value)}
          >
            {allUserData &&
              allUserData?.items?.map((item) => (
                <option key={item?.payNo} value={item?.claName}>
                  {item?.claName}
                </option>
              ))}
          </select>
        </PaymentInfo>
        <PaymentInfo>
          <InfoHead>학생명</InfoHead>
          <select
            value={selectedUserName}
            onChange={(e) => setSelectedUserName(e.target.value)}
          >
            {allUserData &&
              allUserData?.items?.map((item) => (
                <option key={item?.payNo} value={item?.userName}>
                  {item?.userName}
                </option>
              ))}
          </select>
        </PaymentInfo>
        <PaymentInfo>
          <InfoHead>청구년월</InfoHead>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              views={["year", "month"]}
              inputFormat="yyyy-MM"
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}
            />
          </LocalizationProvider>
        </PaymentInfo>
      </Container>
      <ReceiptSelectUpdateItem setTotalPrice={setTotalPrice} />
    </Wrapper>
  );
};

export default ReceiptSelectUpdateList;
