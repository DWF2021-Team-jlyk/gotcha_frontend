import React, { useState, useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
import palette from './palette';
import Responsive from './Responsive';
import { useDispatch } from 'react-redux';
import { boardUnmout } from '../../../modules/boardId';
import { sanitizeOption } from './sanitizeHtml';
import sanitizeHtml from 'sanitize-html';
import TextField from '@material-ui/core/TextField';

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
  margin-bottom: 2rem;
  width: 100%;
`;

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

// const TitleStyle = styled.div`
//   position: 'absolute';
//   top: '23%';
//   left: '50%';
//   transform: 'tranlateX(-50%)';
// `;

const Editor = ({
  changeTitle,
  userId,
  setContent,
  board,
  ref,
  boardInputEl,
}) => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  const dispatch = useDispatch();

  // const contentFilter = sanitizeHtml(board?.board_content, sanitizeOption);
  // useEffect(() => {
  //   quillInstance.current = new Quill(quillElement.current, {
  //     theme: 'bubble',
  //     placeholder: '내용을 작성하세요…',
  //     modules: {
  //       toolbar: [
  //         [{ header: '1' }, { header: '2' }],
  //         ['bold', 'italic', 'underline', 'strike'],
  //         [{ list: 'ordered' }, { list: 'bullet' }],
  //         ['blockquote', 'code-block', 'link', 'image'],
  //       ],
  //     },
  //   });

  //   if (board !== null) quillInstance.current.setText(board?.board_content);
  //   const quill = quillInstance.current;
  //   quill.on('text-change', (delta, oldDelta, source) => {
  //     if (source === 'user') {
  //       setContent(quill.root.innerHTML);
  //     }
  //   });
  //   return () => {
  //     dispatch(boardUnmout());
  //   };
  // }, []);

  return (
    <>
      <EditorBlock>
        <div>
          <TitleInput
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
                <b> 작성자</b> : {userId} | <b>작성일</b> :{' '}
                {board?.board_reg_time}
              </div>
            ) : null}
          </div>

          <div style={{ maxHeight: 500, overflowY: 'scroll' }}>
            {/* <QuillWrapper>
              <div ref={quillElement} />
            </QuillWrapper> */}

            {/* <input
            defaultValue={board?.board_content? board.board_content : ''}
            onChange={(e)=>{
              setContent(e.target.value)
            }}>
            
            </input> */}
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
              defaultValue={board?.board_content ? board.board_content : ''}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              ref={boardInputEl}
            ></TextField>
          </div>
        </div>
      </EditorBlock>
    </>
  );
};

export default Editor;
