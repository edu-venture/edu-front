import styled from "styled-components";

const TextContainer = () => {
  const TextContainer = styled.div`
    position: static;
    margin-left: auto;
    margin-top: 200px;
  `;

  const TitleBox = styled.h1`
    color: #5ac467;
    font-size: 4vw;
    text-align: center;
    transform: translate(-17%, 30%);
  `;

  const TextContentBox = styled.h6`
    font-size: 2vw;
    font-weight: normal;
    width: 50vw;
    text-align: right;
    transform: translate(-12%, 30%);
  `;

  return (
    <TextContainer>
      <TitleBox>
        꿈을 위한 도약, <span style={{ fontSize: "5vw" }}>EduVenture</span>
        <br />
      </TitleBox>
      <TextContentBox>
        이완재님 안녕하세요.
        <br />
        <br />
        이완재의 종합 관리 화면입니다.
      </TextContentBox>
    </TextContainer>
  );
};
export default TextContainer;
