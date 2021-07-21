import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { postboard } from '../../../modules/board';
import { useParams } from 'react-router';
import './styles.css'; 

const WriteActionButtonsBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  color: white;
  background-color: #7986CB;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = ({
  onCancel,
  onBoardAdd,
  content,
  board,
  onBoardUpdate,
  boardInputEl,
  isActive
}) => {
  const dispatch = useDispatch();
  const {ws_id} = useParams();
  if (board?.id === null || board?.id === undefined) {
    return (
      <WriteActionButtonsBlock>
        <button
           className='postButton'
            onClick={() => {
            onBoardAdd();
            //dispatch(postboard(ws_id));
          }}
          disabled={isActive}
        >
          <b>알림 등록</b>
        </button>
        <StyledButton onClick={onCancel}>취소</StyledButton>
      </WriteActionButtonsBlock>
    );
  } else {
    return (
      <WriteActionButtonsBlock>
        <button
          className='postButton'
          onClick={async () => {
            onBoardUpdate();
            boardInputEl.current.value='';
          }}
          disabled={isActive}
        >
          <b>알림 수정</b>
        </button>
        <StyledButton onClick={onCancel}>취소</StyledButton>
      </WriteActionButtonsBlock>
    );
  }
};

export default WriteActionButtons;
