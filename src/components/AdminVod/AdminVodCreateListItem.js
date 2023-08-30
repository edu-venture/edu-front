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
  margin-left: 30px;
  margin-top: 20px;
  width: ${({ inputWidth }) => inputWidth || "83%"};
  height: ${({ inputHeight }) => inputHeight || "45px"};
  border-radius: 20px;
  border: none;
  font-size: 15px;
  white-space: pre-line;
  text-align: center;
`;

const AdminVodCreateListItem = ({
  contentName,
  customWidth,
  customHeight,
  inputWidth,
  inputHeight,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <StyledTitle customWidth={customWidth} customHeight={customHeight}>
        {contentName}
      </StyledTitle>
      <StyledInput
        inputWidth={inputWidth}
        inputHeight={inputHeight}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default AdminVodCreateListItem;
