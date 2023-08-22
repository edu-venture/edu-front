import React from "react";
import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalHeaderDiv = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 30px;
  background-color: #5ac467;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
`;

const ModalHeaderBtn = styled.div`
  width: 12px;
  height: 12px;
  margin-left: 15px;
  padding: 0;
  background-color: #ec6b5e;
  border-radius: 50%;
  cursor: pointer;
`;

const Modal = styled.div`
  background-color: white;
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const ModalContent = styled.div`
  margin: 30px 0 0 0;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ModalButtons = styled.div`
  display: flex;
  margin: 5px;
  gap: 10px;

  button {
    width: 95px;
    height: 35px;
    font-size: 15px;
    border: none;
    border-radius: 20px;
    background-color: #5ac467;
    color: white;
    cursor: pointer;
  }
`;

const ModalText = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
    padding: 0;
  }
`;

const InputContainer = styled.div`
  width: 400px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LabelDiv = styled.div`
  width: 95px;
  height: 35px;
  border-radius: 20px;
  background: #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`;

const StyledInput = styled.input`
  width: 250px;
  height: 35px;
  padding: 0 15px;
  border: none;
  border-radius: 20px;
  background: #ededed;
  font-size: 15px;
  color: #171a2b;
  outline: none;
  margin-left: 10px;
`;

const TeacherModal = ({ isOpen, onClose, type }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalBackdrop>
      <Modal>
        <ModalHeaderDiv>
          <ModalHeaderBtn onClick={onClose} />
        </ModalHeaderDiv>
        <ModalContent>
          {type === "승인" || type === "수정" ? (
            <>
              <InputContainer>
                <LabelDiv>이 름</LabelDiv>
                <StyledInput />
              </InputContainer>
              <InputContainer>
                <LabelDiv>연 락 처</LabelDiv>
                <StyledInput />
              </InputContainer>
              <InputContainer>
                <LabelDiv>반 배 정</LabelDiv>
                <StyledInput />
              </InputContainer>
            </>
          ) : (
            <ModalText>
              <p>선생님을 정말 삭제하시겠습니까?</p>
            </ModalText>
          )}
        </ModalContent>
        <ModalButtons>
          {type === "승인" ? (
            <button onClick={onClose}>거절하기</button>
          ) : (
            <button onClick={onClose}>취소하기</button>
          )}

          {type === "승인" ? (
            <button onClick={onClose}>승인하기</button>
          ) : type === "수정" ? (
            <button onClick={onClose}>수정하기</button>
          ) : (
            <button onClick={onClose}>삭제하기</button>
          )}
        </ModalButtons>
      </Modal>
    </ModalBackdrop>
  );
};

export default TeacherModal;
