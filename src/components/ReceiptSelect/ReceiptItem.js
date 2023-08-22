import React, { useState } from "react";
import styled from "styled-components";

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

const ReceiptItem = ({
  id,
  name,
  group,
  chargeMonth,
  chargeMoney,
  parentContact,
  paymentMethod,
  state,
}) => {
  return (
    <>
      <tr>
        <Td>
          <Checkbox />
        </Td>
        <Td>{id}</Td>
        <Td>{name}</Td>
        <Td>{group}</Td>
        <Td>{chargeMonth}</Td>
        <Td>{chargeMoney}</Td>
        <Td>{parentContact}</Td>
        <Td>{paymentMethod}</Td>
        <Td>{state}</Td>
        <Td>
          <Button>수정</Button>/<Button>삭제</Button>
        </Td>
      </tr>
    </>
  );
};

export default ReceiptItem;
