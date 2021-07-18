import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import 'quill/dist/quill.bubble.css';
import Responsive from './Responsive';
import Editor from './Editor';
import TagBox from './TagBox';
import WriteActionButtons from './WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { addboard, updateboard } from '../../../modules/board';
import { showboardPost } from '../../../modules/boardId';
import { useHistory } from 'react-router-dom';

const Content = () => {
  const history = useHistory();
  const boards = useSelector((state) => state.workspaceBoard.boards);
  const userId = useSelector((state) => state.userInfo.userId);

  const { ws_id, id } = useParams();

  const dispatch = useDispatch();
  const boardInputEl = useRef(null);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const board = useSelector((state) => state.boardId.board);

  useEffect(() => {
    dispatch(showboardPost(id));
    setTitle(board?.board_title);
    setContent(board?.board_content);
  }, []);

  const changeTitle = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [dispatch],
  );

  const onBoardAdd = () => {
    dispatch(
      addboard({
        ws_id: ws_id,
        user_id: userId,
        board_title: title,
        board_content: content,
        board_reg_time: new Date().toLocaleDateString(),
      }),
    );
    history.push(`/workspace/${ws_id}`);
  };

  const onBoardUpdate = async () => {
    dispatch(
      updateboard({
        ws_id: ws_id,
        id: board.id,
        board_title: title,
        board_content: content,
        board_mod_time: new Date().toLocaleDateString(),
      }),
    );
    alert('포스트 수정 완료');
    history.push(`/workspace/${ws_id}`);
  };

  const onCancel = () => {
    history.push(`/workspace/${ws_id}`);
  }

  return (
    <Responsive>
      <Editor
        changeTitle={changeTitle}
        userId={userId}
        setContent={setContent}
        board={board}
        ref={boardInputEl}
      />
      <TagBox />
      <WriteActionButtons
        content={content}
        onBoardAdd={onBoardAdd}
        onCancel={onCancel}
        onBoardUpdate={onBoardUpdate}
        board={board}
        title={title}
        content={content}
        boardInputEl={boardInputEl}
      />
    </Responsive>
  );
};

export default Content;
