import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import Editor from './Editor';
import WriteActionButtons from './WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { addboard, updateboard } from '../../../modules/board';
import { showboardPost } from '../../../modules/boardId';
import { useHistory } from 'react-router-dom';

const Content = () => {
  const history = useHistory();

  const userId = useSelector((state) => state.userInfo.userId);

  const { ws_id, id } = useParams();

  const dispatch = useDispatch();

  const boardInputEl = useRef(null);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isActive, setIsActive] = useState(false);
  const board = useSelector((state) => state.boardId.board);

  const contentDiv = {
    marginTop: 100,
    marginLeft: '31%',
  };

  useEffect(() => {
    dispatch(showboardPost(id));
    setTitle(board?.board_title);
    setContent(board?.board_content ? board.board_content : '');
  }, []);

  const changeTitle = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [dispatch],
  );

  useEffect(
    (e) => {
      if (content.length > 1300) {
        setIsActive(true);
      } else if (content.length <= 1300) {
        setIsActive(false);
      }
    },
    [content],
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

  console.log('CONTENT', content);

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
  };

  return (
    <div style={contentDiv}>
      <Editor
        changeTitle={changeTitle}
        userId={userId}
        setContent={setContent}
        board={board}
        boardInputEl={boardInputEl}
      />
      <div style={{ marginLeft: 420 }}>
        <WriteActionButtons
          content={content}
          onBoardAdd={onBoardAdd}
          onBoardUpdate={onBoardUpdate}
          onCancel={onCancel}
          board={board}
          title={title}
          content={content}
          boardInputEl={boardInputEl}
          isActive={isActive}
        />
      </div>
    </div>
  );
};

export default Content;
