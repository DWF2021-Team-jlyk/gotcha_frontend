import React from 'react';
import styled from 'styled-components';
import palette from './board_content/palette';
import Responsive from './board_content/Responsive';
import SubInfo from './SubInfo';
import PostActionButtons from './PostActionButton';
import TextField from '@material-ui/core/TextField';

const PostViewerBlock = styled(Responsive)`
  margin-top: 96px;
  margin-left: 31%;
  box-shadow: 2px 4px 5px 2px lightgray;
  border-radius: 30px;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 1rem;
  margin-bottom: 1rem;
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
        <div style={{ height: 720, padding:20}}>
          <PostHead>
            <h1>{board.board_title}</h1>

            <SubInfo
              username={board.user_id}
              publishedDate={board.board_reg_time}
              hasMarginTop
            />
            <PostActionButtons id={board.id} ws_id={ws_id} />
            {/* <Tags tags={tags}/> */}
          </PostHead>

          <textarea disabled rows="20" cols="133" style={{border:'none', backgroundColor:'white'}}>{board.board_content}</textarea>
        </div>
      </PostViewerBlock>
    </>
  );
};

export default PostViewer;
