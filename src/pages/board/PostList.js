import React, { useEffect } from 'react';
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

const PostItem = (props) => {
  const { contentFilter, board, ws_id } = props;

  const id = board.id;
  return (
    <PostItemBlock>
      <h2 className="boardTitle">
        <Link to={`${ws_id}/${id}`} style={{ textDecoration: 'none' }}>
          {board.board_title}
        </Link>
      </h2>
      <SubInfo username={board.user_id} publishedDate={new Date()} />
      <Tags tags={['태그1', '태그2', '태그3']} />
      <p>{contentFilter}</p>
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
          <Button cyan>공지사항 작성하기</Button>
        </Link>
      </WritePostButtonWrapper>
      <div>
        {boards.map((board) => {
          let contentFilter = removeHtml(board.board_content);
          return (
            <PostItem
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
