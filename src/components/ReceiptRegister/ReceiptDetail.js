import React, {useState} from 'react';
import styled from 'styled-components';
import { createSvgIcon } from '@mui/material/utils';
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  background: #FAFAFA;
`;

const PaymentHeadWrapper = styled.div`
  background: #FAFAFA;
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
`;

const PaymentHead = styled.div`
  width: 47.5%;
  padding: 10px 0;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  margin-right: 40px;
`;

const InputFieldWrapper = styled.div`
  width: 100%
  display: flex;
  align-items: center;
  overflow-y: auto;
`;

const TextInputField = styled.input`
  flex: 1;
  width: 47.5%;
  border: none;
  height: 3rem;
  box-sizing: border-box;
  text-align: center;
  line-height: 3rem;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 40px 0;
`;

const RegisterButton = styled.button`
  background: #171A2B;
  color: #fff;
  margin: 10px 20px 10px 10px;
  width: 150px;
  height: 3rem;
  text-align: center;
  border-radius: 20px;
  font-size: 1rem;
`;

const CancelButton = styled.button`
  background: #171A2B;
  color: #fff;
  margin: 10px;
  width: 150px;
  height: 3rem;
  text-align: center;
  border-radius: 20px;
  font-size: 1rem;
`;


const ReceiptDetail = ({setTotalPrice}) => {

  const [inputFields, setInputFields] =  useState([{ detail: '', price: '' }]); // 초기 상태는 한 쌍의 인풋 필드
  const navigete = useNavigate();

  //인풋필드 한줄 추가 
  const addInputField = () => {
    setInputFields([...inputFields, {}]); 
  }

  //인풋필드 한줄 삭제 함수
  const removeInputField = (index) => {
    const newFields = inputFields.filter((_, i) => i !== index);
    setInputFields(newFields);

    const totalPrice = newFields.reduce((sum, field) => sum + Number(field.price) || 0, 0);
    setTotalPrice(totalPrice); //총액 업데이트
  }

  const detailChangeHandler = (index, value) => {
    const newFields = [...inputFields]; //inputFields 배열을 복사하여 newFields라는 새로운 배열을 생성
    newFields[index].detail = value; //newFields배열에 해당 인덱스에 detail프로퍼티를 매개변수의 밸류로 변환
    setInputFields(newFields);
  }

  const priceChangeHandler = (index, value) => {
    const newFields = [...inputFields]; //inputFields 배열을 복사하여 newFields라는 새로운 배열을 생성
    newFields[index].price = value; //newFields배열에 해당 인덱스에 price프로퍼티를 매개변수의 밸류로 변환
    setInputFields(newFields); 

    const totalPrice = newFields.reduce((sum, field) => sum + Number(field.price) || 0, 0);
    setTotalPrice(totalPrice); //총액 업데이트
  }

  return (
    <Container>
      <PaymentHeadWrapper>
        <PaymentHead>상세내역</PaymentHead>
        <PaymentHead>가격</PaymentHead>
          <AddIcon onClick={addInputField} style={{marginRight: '38px'}}/>
      </PaymentHeadWrapper>

      {inputFields.map((field, index) => (
        <InputFieldWrapper key={index}>
         <TextInputField value={field.detail} onChange={(e) => detailChangeHandler(index, e.target.value) }/>
         <TextInputField value={field.price} onChange={(e) => priceChangeHandler(index, e.target.value)}/>
         <RemoveCircleOutlineIcon onClick={() => removeInputField(index)}/>
       </InputFieldWrapper>
      ))};
     
      <ButtonWrapper>
        <CancelButton onClick={() => navigete(-1)}>취소하기</CancelButton>
        <RegisterButton>등록하기</RegisterButton>
      </ButtonWrapper>
    </Container>
  )
}

export default ReceiptDetail