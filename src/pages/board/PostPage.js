import React from 'react';
import { useParams } from 'react-router-dom';
import PostViewer from './PostViewer';
import { useSelector } from 'react-redux';

const PostPage = () => {
  const boards = useSelector((state) => state.workspaceBoard.boards);

  const useParam = useParams();

  return (
    <>
      {boards.map((board) => {
        if (useParam.id == board.id) {
          return (
            <PostViewer key={board.id} board={board} ws_id={useParam.ws_id} />
          );
        }
      })}
    </>
  );
};

export default PostPage;
