import React, {useState, useEffect, useRef} from 'react';
import styled from '@emotion/styled';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const styles = {
  ArrowDownwardIcon: {
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    background: '#5AC467',
    marginRight: '30px',
    width: '55px',
    height: '75%'
  }, 
}

const ChatWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative; 
`;

const ChatInputWrapper = styled.div`
  width: 100%;
  height: 70px;
  background: #fff;
  border: none;
  border-radius: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const ChatInputField = styled.input`
  flex-grow: 1;
  height: 100%;
  background: none;
  border: none;
  outline: none;
`;




const Comment = styled.div`
  width: 100%;
  height: auto;  
  margin-top: 30px; 
  display: flex;
  flex-direction: column; // 세로 방향으로 정렬하기 위해 수정
  align-items: flex-start; 
`;

const CommentContent = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border: none;
  border-radius: 30px;   
  width: 65%;        
`;

const StudentProfile = styled.div`
  border: none;
  border-radius: 50%;
  background: #5AC467;
  width: 45px;
  height: 45px;
  margin: 0 20px;
`;

const StudentInfo = styled.div`
  display: flex;
  flex-direction: column;  
  justify-content: center; 
  align-items: flex-start; 
  margin-left: 10px;       
`;

const NestedComment = styled.div`
  width: 80%;  
  background: #f7f7f7;
  border: none;
  border-radius: 30px;
  margin-top: 20px;
  margin-left: 40px;
  display: flex;
  align-items: center;  
`;

const ReplyButton = styled.button`
  background-color: transparent;
  border: none;
  color: #5AC467;  
  cursor: pointer;
  align-self: flex-end;
  margin-right: 10px;
  margin-top: 10px;
`;

const ReplyInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7;
  border-radius: 30px;
  margin-top: 10px;
  padding: 5px 10px;
`;

const ReplyInput = styled.textarea`
  flex: 1;
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  resize: none;
`;

const ReplySubmitButton = styled.button`
  background-color: #5AC467;
  border: none;
  border-radius: 20px;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
`;


const VODSectionChat = () => {
  const [inputText, setInputText] = useState(''); //댓글입력필드값 상태
  const [comments, setComments] = useState([]); //댓글 모음 상태관리
  const commentId = useRef(1); //댓글 id값
  const replyId = useRef(1); //대댓글 id값
  const [showReplyInput, setShowReplyInput] = useState(null); //현재 대댓글 입력을 표시하고 있는 댓글의 ID
  const [replyText, setReplyText] = useState(''); //대댓글 입력 상태
  // const hasNestedComment = false;

  /**댓글 입력필드 핸들러  */
  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  }
  /** 댓글 추가 함수 */
  const addComment = (text) => {
    const newComment = {
      id: commentId.current,
      text: text,
      replies: []
    };
    setComments([...comments, newComment]);
    setInputText('');
    commentId.current += 1;
  }
  /** 대댓글 추가 함수 */
  const addReply = (commentId, text) => {
    const updatedComments = comments.map(comment => {
      if(comment.id === commentId) {
        const newReply = {
          id: replyId.current,
          text: text
        };
        replyId.current += 1;
        return {...comment, replies: [...comment.replies, newReply]};
      }
      return comment;
    });
    setComments(updatedComments);
  }

  return (
    <ChatWrapper>
      <ChatInputWrapper>
        <ChatInputField value={inputText} onChange={inputChangeHandler}></ChatInputField>
        <ArrowDownwardIcon style={styles.ArrowDownwardIcon} onClick={() => addComment(inputText)}></ArrowDownwardIcon>
      </ChatInputWrapper>
      {comments.map(comment => (
        <Comment key={comment.id}>
        <CommentContent>
          <StudentProfile></StudentProfile>
          <StudentInfo>
            <div style={{fontWeight: 'bold', marginTop: '10px'}}>[홍길동]</div>
            <p>{comment.text}</p>
            <ReplyButton onClick={() => setShowReplyInput(comment.id)}>답글</ReplyButton>
          </StudentInfo>
        </CommentContent>

        {showReplyInput === comment.id && (
          <ReplyInputWrapper>
            <ReplyInput value={replyText} onChange={(e) => setReplyText(e.target.value)}/>
            <ReplySubmitButton onClick={() => {addReply(comment.id, replyText); setReplyText(''); setShowReplyInput(null);}}>등록</ReplySubmitButton> 
          </ReplyInputWrapper>
        )}

        {comment.replies.map(reply => (
          <NestedComment>
          <StudentProfile></StudentProfile>      
          <StudentInfo>
            <div style={{fontWeight: 'bold', marginTop: '10px'}}>[김영희]</div>    
            <p>{reply.text}</p>   
          </StudentInfo>
        </NestedComment>
        ))}
      </Comment>
      ))}
    </ChatWrapper>
  )
}

export default VODSectionChat