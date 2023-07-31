import React from "react";
import {
  Box,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

const PaymentOption = ({ value, handleChange }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "1",
    }}
  >
    <FormLabel component="legend" sx={{ marginRight: "20px" }}>
      결제수단 선택
    </FormLabel>
    <RadioGroup
      row
      aria-label="payment"
      name="row-radio-buttons-group"
      value={value}
      onChange={handleChange}
    >
      <FormControlLabel value="간편결제" control={<Radio />} label="간편결제" />
      <FormControlLabel value="카드결제" control={<Radio />} label="카드결제" />
    </RadioGroup>
  </Box>
);

export default PaymentOption;
