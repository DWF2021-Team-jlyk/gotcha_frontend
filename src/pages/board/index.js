import React from 'react';
import PostList from './PostList';

const PostListPage = ({ ws_id }) => {
  return (
    <>
      <PostList ws_id={ws_id} />
    </>
  );
};

export default PostListPage;
