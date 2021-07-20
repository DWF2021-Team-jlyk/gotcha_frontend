import React, { useEffect } from 'react';
import styled from 'styled-components';
import Responsive from './board_content/Responsive';
import Button from './board_content/Button';
import palette from './board_content/palette';
import SubInfo from './SubInfo';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postboard, showboardPost } from '../../modules/board';
import { boardUnmout } from '../../modules/boardId';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const textCut = (txt, len, lastTxt) => {
  if (len === '' || len === null) {
    // 기본값
    len = 20;
  }
  if (lastTxt === '' || lastTxt === null) {
    // 기본값
    lastTxt = '...';
  }
  if (txt.length > len) {
    txt = txt.substr(0, len) + lastTxt;
  }
  return txt;
};

const PostItem = (props) => {
  const { board, ws_id } = props;
  const id = board.id;
  return (
    <PostItemBlock>
      <h2 className="boardTitle">
        <Link
          to={`${ws_id}/${id}`}
          style={{ textDecoration: 'none', color: '#3F51B5' }}
        >
          {board.board_title}
        </Link>
      </h2>
      <SubInfo username={board.user_id} publishedDate={new Date()} />
      <div style={{ marginTop: 10 }}>
        {textCut(board.board_content, 100, '...')}
      </div>
    </PostItemBlock>
  );
};

const PostList = ({ ws_id }) => {

  const boards = useSelector((state) => state.workspaceBoard.boards);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(postboard(ws_id));
    dispatch(boardUnmout());
  }, [ws_id]);

  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <Link to={`${ws_id}/board_content`}>
          <Button style={{ backgroundColor: '#7986CB' }}>알림 작성하기</Button>
        </Link>
      </WritePostButtonWrapper>
      {boards.length < 1 ? (
      
          <div
            style={{
              position: 'absolute',
              top: 370,
              left: 580,
              fontSize: '2.7rem',
              color: '#3F51B5',
              boxShadow: '2px 4px 5px 2px lightgray',
              padding: '100px 200px 100px 200px',
              borderRadius: 20,
            }}
          >
            작성된 알림이 없습니다.
          </div>
          
    
      ) : (
        <div style={{ maxHeight: 700, overflowY: 'scroll' }}>
          {boards.map((board) => {
            return (
              <PostItem key={board.board_id} board={board} ws_id={ws_id} />
            );
          })}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;
