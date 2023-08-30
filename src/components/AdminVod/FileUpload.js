import React, { useState, useEffect } from "react";
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
  onFileChange,
  file
}) => {
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    if (file) {
      if (Array.isArray(file)) {
        setFileName(file.map(f => f?.name).join(', '));
      } else if (typeof file === 'string') {
        setFileName(file.split('/').pop());
      } else {
        setFileName(file.name);
      }
    }
  }, [file]);
  
  

  const handleFileChange = (e) => {
    const files = e.target.files;
  
    // 여러 파일이 선택되었을 경우
    if (files.length > 1) {
      const fileArray = Array.from(files);
      setFileName(fileArray.map(f => f.name).join(', '));  // 모든 파일 이름을 표시
      onFileChange(fileArray);  // 파일 배열을 그대로 전달
    } else if (files.length === 1) {
      const file = files[0];
      setFileName(file.name);
      onFileChange(file);
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
        multiple
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
