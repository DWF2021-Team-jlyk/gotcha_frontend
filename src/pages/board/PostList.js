import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Responsive from './board_content/Responsive';
import Button from './board_content/Button';
import palette from './board_content/palette';
import SubInfo from './SubInfo';
import Tags from './Tags';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postboard, showboardPost } from '../../modules/board';
import { boardUnmout } from '../../modules/boardId';
import { removeHtml } from '../board/board_content/sanitizeHtml';
import TextField from '@material-ui/core/TextField';


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
  const { contentFilter, board, ws_id } = props;
  //const inputItemEl = useRef(null);
  console.log('PostItem??????????',board.board_content)
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

      {/* <p><pre>{textCut(contentFilter,150,"...")}</pre></p> */}
      {/* <TextField
        id="outlined-basic"
        variant="outlined"
        multiline
        as="textarea"
        style={{
          // border: '1px solid #ced4da',
          fontSize: '.95rem',
          padding: 5,
          borderRadius: 4,
          width: '100%',
        }}
        defaultValue={board.board_content}
        //ref = {inputItemEl}
      ></TextField> */}
      <div style={{marginTop:10}}>{textCut(board.board_content,100,"...")}</div>
    </PostItemBlock>
  );
};

const PostList = ({ ws_id }) => {
  const boards = useSelector((state) => state.workspaceBoard.boards);
  const dispatch = useDispatch();

  console.log('postList ws_id',ws_id);

  useEffect(() => {
    dispatch(postboard(ws_id));
    dispatch(boardUnmout());
  }, [ws_id]);

  return (

    <PostListBlock>
      
      <WritePostButtonWrapper>
        <Link to={`${ws_id}/board_content`}>
          <Button style={{ backgroundColor: '#7986CB' }}>
            공지사항 작성하기
          </Button>
        </Link>
      </WritePostButtonWrapper>
      <div style={{ maxHeight: 700, overflowY: 'scroll' }}>
        {boards.map((board) => {
          let contentFilter = removeHtml(board.board_content);
          return (
            <PostItem
              key={board.board_id}
              contentFilter={contentFilter}
              board={board}
              ws_id={ws_id}
            />
          );
        })}
      </div>

    </PostListBlock>

  );
};

export default PostList;