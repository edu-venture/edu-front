import React, { useState } from "react";
import styled from "styled-components";
import TeacherModal from "./TeacherModal";

const Td = styled.td`
  height: 56px;
  overflow: hidden;
  text-align: center;
  color: #171a2b;
  font-size: 15px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 0px 20px;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin: 0;
  border: 1px solid #000;
  background: transparent;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0 5px;

  &:hover {
    text-decoration: underline; /* Adding a hover effect */
  }
`;

const TeacherItem = ({ id, name, email, contact, group, approval }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleOpenModal = (type) => {
    setModalType(type);
    setIsOpen(true);
  };

  const handleCloseModal = () => setIsOpen(false);

  return (
    <>
      <tr>
        <Td>
          <Checkbox />
        </Td>
        <Td>{id}</Td>
        <Td>{name}</Td>
        <Td>{email}</Td>
        <Td>{contact}</Td>
        <Td>{approval}</Td>
        <Td>{group}</Td>
        <Td>
          <Button onClick={() => handleOpenModal("승인")}>승인</Button>/
          <Button onClick={() => handleOpenModal("수정")}>수정</Button>/
          <Button onClick={() => handleOpenModal("삭제")}>삭제</Button>
        </Td>
      </tr>
      <TeacherModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        type={modalType}
      />
    </>
  );
};

export default TeacherItem;
