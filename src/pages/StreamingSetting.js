import React from 'react';
import Title from "../components/Title";
import styled  from "styled-components";
import AddIcon from '@mui/icons-material/Add';


const Container = styled.div`
  width: 100vw;
  height: 100%;
  background: #5AC467;
  position: relative;
`;

const TitleContainer = styled.div`
  padding: 20px 0px 20px 50px;
`;

const ContentContainer = styled.div`
  width: 90%;
  height; 100%;
  margin: 50px auto 0 auto;
  padding-bottom: 50px; 
  background: #ececec;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const MainTitle = styled.h1`
  margin: 30px 0 20px 100px;
`;

const ChannelInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px auto;
`;

const ChannelInfoTitle = styled.div`
  border: none;
  border-radius: 20px;
  background: #7F7F7F;
  padding: 10px 10px;
  color: #fff;
  width: 10%;
  height: 3rem;
  margin-right: 30px;
  text-align: center;
`;

const ChannelInfoContent = styled.p`
  width: 75%;
  height: 3rem;
  line-height: 3rem;
  background: #fff;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
  padding-left: 20px;
`;

const Description = styled.p`
  max-width: 80%;
  margin: 100px 0 30px 130px;
  font-size: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  justify-content: center;
`;

const StreamingSetting = () => {
  return (
    <Container>
      <TitleContainer>
        <Title 
          subtitle="수업을 위한"
          title="실시간 강의 생성"
          color="#ffffff"
        />
      </TitleContainer>
      <ContentContainer>
        <MainTitle>방송 인코더 설정</MainTitle>
        <ChannelInfoWrapper>
          <ChannelInfoTitle>채널 생성 여부</ChannelInfoTitle>
          <ChannelInfoContent>안녕하세요</ChannelInfoContent>
        </ChannelInfoWrapper>
        <ChannelInfoWrapper>
          <ChannelInfoTitle>송출 URL</ChannelInfoTitle>
          <ChannelInfoContent></ChannelInfoContent>
        </ChannelInfoWrapper>
        <ChannelInfoWrapper>
          <ChannelInfoTitle>스트림키</ChannelInfoTitle>
          <ChannelInfoContent></ChannelInfoContent>
        </ChannelInfoWrapper>
        <Description>
          해당 송출 URL과 스트림키가 활성화 될 때까지 기다려주세요. <br />
          활성화가 되었다면 채널 생성이 준비가 완료 되었다는 것입니다. <br />
          그런 다음 방송 인코더를 다운로드 받고 방송 설정을 해주셔야 하는데 <br />
          위에 송출 URL과 스트림키를 입력해주셔야 합니다. <br />
          자세한 사항은 아래에 글을 참고 해주세요.
        </Description>
        <MainTitle>OBS 인코더</MainTitle>
        <Description>
          OBS 인코더를 사용하여 라이브 방송을 송출하는 방법은 다음과 같습니다.
          <br />
          <ol>
            <li>OBS 인코더 소프트웨어를 다운로드해 주십시오.</li>
            <li>다운로드가 완료되면 OBS 인코더를 실행해 주십시오.</li>
            <li>상단 메뉴에서 <strong>파일 &gt; 설정 &gt; 방송</strong>메뉴를 차례대로 클릭해 주십시오.</li>
            <li><string>서버</string>와 <strong>스트림 키</strong>를 입력한 후 <strong>[적용] </strong>버튼을 클릭해 주십시오.</li>
            <ul>
              <li><strong>서버</strong>: 방송을 송출할 채널의 스트림 정보 URL</li>
              <li><strong>스트림 키: 방송을 송출할 채널의 스트림 키</strong></li>
            </ul>
            <img src='/img/Group200.png' alt='Description' style={{marginTop: '30px', width: '100%'}}  />
            <img src='/img/image3.png' alt='Description' style={{marginTop: '30px', width: '100%'}}  />
            <li><strong>출력</strong> 메뉴를 클릭해 주십시오.</li>
            <li>일반 채널을 통해 방송을 송출하려는 경우, 다음과 같이 설정한 후 <strong>[적용]</strong> 버튼을 클릭해 주십시오.</li>
            <img src='/img/image5.png' alt='Description' style={{margin: '30px 0', width: '100%'}}  />
            <ul>
              <li><strong>데이터율 제어</strong>의 기본 옵션은 CBR입니다. 방송에서 LED 또는 화려한 조명을 사용하는 경우, 
              VBR 옵션을 권장합니다.
              </li>
              <li><strong>x264 설정 (공백으로 구분)</strong>에 다음 내용을 복사하여 입력해 주십시오.</li>
              <li>cabac=1 bframes=0 keyint=30 keyint_min=30 scenecut=-1</li>
              <li>LL-HLS 채널을 통해 방송을 송출하려는 경우, CPU 사용량을 veryfast로 설정한 후 <strong>[적용]</strong> 버튼을 클릭해 주십시오.</li>
              <li>반드시 x264 설정 중 다음 옵션을 설정된 FPS 값을 기준으로 변경하여 입력해 주십시오.</li>
              <li>{`keyint={FPS} keyint_min={FPS}`}</li>
            </ul>
            <li>오디오 탭을 클릭하여 오디오 비트레이트를 설정한 후 [적용] 버튼을 클릭해 주십시오.</li>
            <ul>
              <li>6.에서 선택한 트랙의 오디오 비트레이트를 192로 설정해 주십시오.</li>
            </ul>
            <li><strong>비디오</strong> 메뉴를 클릭하여 해상도와 초당 프레임 수를 설정한 후 <strong>[적용]</strong> 버튼을 클릭해 주십시오.</li>
            <ul>
              <li>다음과 같이 설정할 것을 권장합니다.</li>
              <ul>
                <li><strong>출력 (조정된) 해상도:</strong> 1920x1080</li>
                <li><strong>공통 FPS 값:</strong> 30</li>
              </ul>
            </ul>
            <li>소스 목록의 <AddIcon></AddIcon>을 클릭하여 비디오/오디오 입력 장치를 추가해 주십시오.</li>
            <ul>
              <li>추가된 장치를 더블 클릭하여 속성을 변경할 수 있습니다.</li>
            </ul>
            <li><strong>[방송 시작]</strong> 버튼을 클릭해 주십시오.</li>
            <ul>
              <li>설정한 Live Station 채널을 통해 방송이 송출됩니다.</li>
              <li><strong>[방송 중단]</strong> 버튼을 클릭하여 방송 송출을 종료할 수 있습니다.</li>
            </ul>
          </ol>
        </Description>
        <ButtonContainer>
          <button 
            style={{fontSize: "22px",
                    width: "143px",
                    height: "58px",
                    backgroundColor: "#5AC467",
                    borderRadius: "20px",
                    color: "#fff",
                    }}>방송 ON
            </button>
        </ButtonContainer>
      </ContentContainer>
    </Container>
  )
}

export default StreamingSetting