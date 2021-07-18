import React from 'react';
import styled from 'styled-components';
import palette from './board_content/palette';
import Responsive from './board_content/Responsive';
import SubInfo from './SubInfo';
import PostActionButtons from './PostActionButton';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
  margin-left: 50%;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = (props) => {
  const { board, ws_id } = props;

  return (
    <>
      <PostViewerBlock>
        <PostHead>
          <h1>{board.board_title}</h1>

          <SubInfo
            username={board.user_id}
            publishedDate={board.board_reg_time}
            hasMarginTop
          />
          {/* <Tags tags={tags}/> */}
        </PostHead>
        <PostContent
          dangerouslySetInnerHTML={{ __html: board.board_content }}
        />
      </PostViewerBlock>
      <PostActionButtons id={board.id} ws_id={ws_id} />
    </>
  );
};

export default PostViewer;
