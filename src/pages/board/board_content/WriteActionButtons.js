import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const WriteActionButtonsBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;
const StyledButton = styled(Button)`
  height: 2.125rem;
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
}) => {
  if (board?.id === null || board?.id === undefined) {
    return (
      <WriteActionButtonsBlock>
        <StyledButton
          cyan
          onClick={() => {
            onBoardAdd();
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
