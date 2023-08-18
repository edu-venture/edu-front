import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #FAFAFA;
  align-items: stretch;
`;

const PaymentInfo = styled.div`
  flex: 1;
  background: #FAFAFA;
  padding: 10px 0 50px 50px; 
  border-top: 3px solid #E3E3E3; 
  border-bottom: 3px solid #E3E3E3;  
`;

const InfoHead = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;

const TextInputField = styled.input`
  border: 1px solid #E3E3E3;
  border-radius: 8px;
  width: 80%;
  height: 43%;
  box-sizing: border-box;
  text-align: center;
  line-height: 3rem;
  font-size: 1rem;
  font-weight: 500;
`;



const PaymentPersonInfo = () => {
  const [selectedDate, setSelectedDate] = useState(null); //날짜 상태 관리

  return (
    <Container>
      <PaymentInfo>
        <InfoHead>반</InfoHead>
        <TextInputField type="text" />
      </PaymentInfo>
      <PaymentInfo>
        <InfoHead>학생명</InfoHead>
        <TextInputField type="text" />
      </PaymentInfo>
      <PaymentInfo>
        <InfoHead>청구연월</InfoHead>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            views={['year', 'month']}
            inputFormat="yyyy-MM"
            value={selectedDate}
            onChange={setSelectedDate}
            renderInput={(params) => <TextField {...params} variant="outlined" />}
          />
        </LocalizationProvider>
      </PaymentInfo>
    </Container>
  )
}

export default PaymentPersonInfo