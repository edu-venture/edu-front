import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";

const styles = {
  ExpandCircleDownRoundedIcon: {
    color: "#5AC467",
    border: "none",
    borderRadius: "50%",
    background: "#fff",
    marginRight: "10px",
    width: "50px",
    height: "50px",
    cursor: "pointer",
  },
};

const ChatWrapper = styled.div`
  width: 80%;
  height: auto;
  margin: 10px auto 30px auto;
  position: relative;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 60px;
  background: #fff;
  border: none;
  border-radius: 40px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputField = styled.input`
  flex-grow: 1;
  margin: 0 10px 0 25px;
  font-size: 18px;
  background: none;
  border: none;
  outline: none;
`;

const CommentsWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const CommentBox = styled.div`
  height: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CommentContent = styled.div`
  width: auto;
  height: 100px;
  padding: 0 200px 0 0;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 50px;
  margin: ${({ isReply }) => (isReply ? "10px 0 0 100px" : "0")};
`;

const Profile = styled.div`
  border: none;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin: 0 20px;
  background: ${({ isReply }) => (isReply ? "#6F6F6F" : "#5ac467")};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto 0 10px;
  flex-grow: 1;
`;

const ReplyButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 15px;
  background-color: transparent;
  border: none;
  color: #5ac467;
  cursor: pointer;
`;

const ReplyInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7;
  border-radius: 50px;
  margin-top: 10px;
  padding: 15px;
`;

const ReplyInput = styled.textarea`
  width: 350px;
  height: 50px;
  border: none;
  border-radius: 50px;
  resize: none;
  font-size: 20px;
  line-height: 50px;
  padding-left: 20px;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
`;

const ReplySubmitButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: #5ac467;
  border: none;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  margin-left: 10px;
  font-size: 20px;
`;

const VODSectionChat = () => {
  const [inputText, setInputText] = useState(""); //댓글입력필드값 상태
  const [comments, setComments] = useState([]); //댓글 모음 상태관리
  const commentId = useRef(1); //댓글 id값
  const replyId = useRef(1); //대댓글 id값
  const [showReplyInput, setShowReplyInput] = useState(null); //현재 대댓글 입력을 표시하고 있는 댓글의 ID
  const [replyText, setReplyText] = useState(""); //대댓글 입력 상태
  // const hasNestedComment = false;

  /* 댓글 입력필드 핸들러  */
  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  /* 댓글 추가 함수 */
  const addComment = (text) => {
    const newComment = {
      id: commentId.current,
      text: text,
      replies: [],
    };
    setComments([...comments, newComment]);
    setInputText("");
    commentId.current += 1;
  };

  /* 대댓글 추가 함수 */
  const addReply = (commentId, text) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        const newReply = {
          id: replyId.current,
          text: text,
        };
        replyId.current += 1;
        return { ...comment, replies: [...comment.replies, newReply] };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      addComment(inputText);
    }
  };

  const onReplyEnterPress = (e, commentId) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      addReply(commentId, replyText);
      setReplyText("");
      setShowReplyInput(null);
    }
  };

  return (
    <ChatWrapper>
      <InputWrapper>
        <InputField
          value={inputText}
          onChange={inputChangeHandler}
          onKeyDown={onEnterPress}
        />
        <ExpandCircleDownRoundedIcon
          style={styles.ExpandCircleDownRoundedIcon}
          onClick={() => addComment(inputText)}
        />
      </InputWrapper>
      <CommentsWrapper>
        {comments.map((comment) => (
          <CommentBox key={comment.id}>
            <CommentContent>
              <Profile />
              <Info>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  홍길동
                </div>
                <p style={{ fontSize: "20px" }}>{comment.text}</p>
                <ReplyButton onClick={() => setShowReplyInput(comment.id)}>
                  답글
                </ReplyButton>
              </Info>
            </CommentContent>

            {showReplyInput === comment.id && (
              <ReplyInputWrapper>
                <ReplyInput
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  onKeyDown={(e) => onReplyEnterPress(e, comment.id)}
                />
                <ReplySubmitButton
                  onClick={() => {
                    addReply(comment.id, replyText);
                    setReplyText("");
                    setShowReplyInput(null);
                  }}
                >
                  등록
                </ReplySubmitButton>
              </ReplyInputWrapper>
            )}

            {comment.replies.map((reply) => (
              <CommentContent isReply>
                <Profile isReply />
                <Info>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    김영희
                  </div>
                  <p style={{ fontSize: "20px" }}>{reply.text}</p>
                </Info>
              </CommentContent>
            ))}
          </CommentBox>
        ))}
      </CommentsWrapper>
    </ChatWrapper>
  );
};

export default VODSectionChat;
