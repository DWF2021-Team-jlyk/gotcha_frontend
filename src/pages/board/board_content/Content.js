import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactQuill from 'react-quill';
// import EditorToolbar, { modules, formats } from "./EditorToolbar";
import QuillToolbar, { modules, formats } from './EditorToolbar';
import { useParams } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import './styles.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { getUserInfo } from '../../../modules/userInfo';
//import { set } from 'immer/dist/internal';

export const Content = () => {
  //const [state, setState] = useState(value);
  const [title, setTitle] = useState('');
  const [regtime, setRegtime] = useState('');
  const [content, setContent] = useState('');
  const userId = useSelector((state) => state.userInfo.userId);
  console.log('Content user_id', userId);
  const dispatch = useDispatch();

  const { ws_id } = useParams();

  // useEffect(()=>{
  //   dispatch(getUserInfo())
  // },[]);

  const handleChange = (e) => {
    setContent(e.target.value);
    //setRegtime(new Date());
  };

  const titleChange=(e)=>{
    setTitle(e.target.value);
  }

  const insertBoard = useCallback(
    async (e) => {
      const url = '/board/insert';

      const options = {
        method: 'POST',
        headers: {
          Authorization: sessionStorage.getItem('accessToken'),
          'content-type': 'application/json',
        },
        data: {
          board_title: title,
          user_id: userId,
          board_reg_time: regtime,
          ws_id: ws_id,
          board_content: content,
        },
        url,
      };

      const response = await axios(options);
    },
    [ws_id],
  );

  return (
    <>
      <div className="text-editor">
        {/* <EditorToolbar /> */}
        <QuillToolbar />
        <div>
          <input 
          type='text' 
          placeholder='title' 
          onChange={titleChange}></input>
        </div>
        <ReactQuill
          theme="snow"
          //value={state.value}
          onChange={handleChange}
          placeholder={'Write something awesome...'}
          modules={modules}
          formats={formats}
        />
        <Button variant="outlined" color="primary" style={{ float: 'right' }}
        onClick={insertBoard}>
          save
        </Button>
      </div>
    </>
  );
};

export default Content;
