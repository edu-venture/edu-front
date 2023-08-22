import React, { useState } from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  width: ${({ customWidth }) => customWidth || "124px"};
  height: ${({ customHeight }) => customHeight || "45px"};
  background-color: #7f7f7f;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-left: 30px;
  margin-top: 20px;
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-top: 20px;
  width: ${({ inputWidth }) => inputWidth || "83%"};
  height: ${({ inputHeight }) => inputHeight || "45px"};
  border-radius: 20px;
  border: 1px dashed #d0d0d0;
  font-size: 15px;
  white-space: pre-line;
  cursor: pointer;
`;

const FileUpload = ({
  contentName,
  customWidth,
  customHeight,
  inputWidth,
  inputHeight,
  placeholder,
}) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <>
      <StyledTitle customWidth={customWidth} customHeight={customHeight}>
        {contentName}
      </StyledTitle>
      <StyledInput
        type="file"
        onChange={handleFileChange}
        id={`file-upload-${contentName}`}
      />
      <StyledLabel
        htmlFor={`file-upload-${contentName}`}
        inputWidth={inputWidth}
        inputHeight={inputHeight}
      >
        {fileName || placeholder}
      </StyledLabel>
    </>
  );
};

export default FileUpload;
