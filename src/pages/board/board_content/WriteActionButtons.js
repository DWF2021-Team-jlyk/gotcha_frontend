import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { postboard } from '../../../modules/board';
import { useParams } from 'react-router';

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
  boardInputEl
}) => {
  const dispatch = useDispatch();
  const {ws_id} = useParams();
  console.log('WriteActionButton ws_id', ws_id);
  if (board?.id === null || board?.id === undefined) {
    return (
      <WriteActionButtonsBlock>
        <StyledButton
          cyan
          onClick={() => {
            onBoardAdd();
            //dispatch(postboard(ws_id));
          }}
        >
          포스트 등록
        </StyledButton>
        <StyledButton onClick={onCancel}>취소</StyledButton>
      </WriteActionButtonsBlock>
    );
  } else {
    return (
      <WriteActionButtonsBlock>
        <StyledButton
          cyan
          onClick={async () => {
            onBoardUpdate();
            boardInputEl.current.value='';
          }}
        >
          포스트 수정
        </StyledButton>
        <StyledButton onClick={onCancel}>취소</StyledButton>
      </WriteActionButtonsBlock>
    );
  }
};

export default WriteActionButtons;