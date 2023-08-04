import MenuBar from "../components/MenuBar";
import VODList from '../components/VODStreaming/VODList';
import VODSection from "../components/VODStreaming/VODSection";


function VODStreaming() {
  return (
    <>
      <MenuBar></MenuBar>
      <VODSection>
        <VODList>
        </VODList>
      </VODSection>
    </>
  );
}

export default VODStreaming;
