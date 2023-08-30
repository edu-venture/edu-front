import VODListItem from "./VODListItem";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 40px auto 0 auto;
  background: #ececec;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;


const VODList = ({VODList}) => {

  return (
    <Container>
      {
      VODList.map((item) => (
        <VODListItem
          key={item.id}
          id={item.id}
          lectureName={item.title}
          teacherName={item.writer}
          viewCount={item.hits}
          thumbnail={item.saveThumb}
          uploadDate={item.regDate}
        />
      ))}
    </Container>
  );
};

export default VODList;
