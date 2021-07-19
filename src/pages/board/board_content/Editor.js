import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import palette from './palette';
import Responsive from './Responsive';
import TextField from '@material-ui/core/TextField';
import { lightBlue } from '@material-ui/core/colors';


const EditorBlock = styled(Responsive)`
  margin-top: 5rem;
  margin-bottom: 5rem;
  box-shadow: 2px 4px 5px 2px lightgray;
  border-radius: 30px;
`;

const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 1rem;
  width: 100%;
`;

const Editor = ({
  changeTitle,
  userId,
  setContent,
  board,
  ref,
  boardInputEl,
}) => {
  const [length, setLength] = useState();
  const [contents, setContents] = useState(
    board?.board_content ? board.board_content : '',
  );

  useEffect(() => {
    setLength(contents.length);
    if (contents.length > 1300) {
      alert('1300자 이상 금지');
    }
  }, [contents]);
  return (
    <>
      <EditorBlock>
        <div style={{ height: 600 }}>
          <TitleInput
            style={{ padding: 20 }}
            placeholder="제목을 입력하세요"
            onChange={changeTitle}
            defaultValue={board?.board_title ? board.board_title : ''}
            ref={ref}
          />
          <div
            style={{ textAlign: 'right', marginBottom: 20, color: '#868e96' }}
          >
            {board?.board_reg_time ? (
              <div>
                <span style={{float:'left', marginLeft:10}}>※글 내용은 1300자까지 가능</span>
                <b> 작성자</b> : {userId} | <b>작성일</b> :{' '}
                {board?.board_reg_time}
              </div>
            ) : null}
          </div>
          
          <div style={{ maxHeight: 500, overflowY: 'scroll' }}>
            
            <TextField
              id="outlined-basic"
              variant="outlined"
              multiline
              as="textarea"
              style={{
                // border: '1px solid #ced4da',
                fontSize: '.95rem',
                padding: 5,
                borderRadius: 4,
                width: '100%',
              }}
              rows="18"
              defaultValue={board?.board_content ? board.board_content : ''}
              onChange={(e) => {
                setContent(e.target.value);
                setContents(e.target.value);
              }}
              ref={boardInputEl}
            ></TextField>
          </div>
          <div style={{float:'right', marginRight:30, color:'gray'}}><span style={{color:'black'}}>{length}</span>/1300</div>
        </div>
      </EditorBlock>
    </>
  );
};

export default Editor;
