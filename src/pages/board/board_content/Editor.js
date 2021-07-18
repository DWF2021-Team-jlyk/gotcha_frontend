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

const EditorBlock = styled(Responsive)`
  padding-top: 5rem;
  padding-bottom: 5rem;
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

const Editor = ({ changeTitle, userId, setContent, board, ref }) => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  const dispatch = useDispatch();

  const contentFilter = sanitizeHtml(board?.board_content, sanitizeOption);
  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'bubble',
      placeholder: '내용을 작성하세요…',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    });

    if (board !== null) quillInstance.current.setText(contentFilter);
    const quill = quillInstance.current;
    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        setContent(quill.root.innerHTML);
      }
    });
    return () => {
      dispatch(boardUnmout());
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '23%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <h1>공지사항</h1>
      </div>
      <div
        style={{
          marginTop: 100,
          position: 'relative',
          top: '23%',
          marginLeft: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <EditorBlock>
          <TitleInput
            placeholder="제목을 입력하세요"
            onChange={changeTitle}
            defaultValue={board?.board_title ? board.board_title : ''}
            ref={ref}
          />
          {board?.board_reg_time ? (
            <div style={{ float: 'right' }}>
              작성자 : {userId} | 작성일 : {board?.board_reg_time}
            </div>
          ) : null}
          <div>
            <QuillWrapper>
              <div ref={quillElement} />
            </QuillWrapper>
          </div>
        </EditorBlock>
      </div>
    </>
  );
};

export default Editor;
