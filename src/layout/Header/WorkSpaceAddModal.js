import React, { useEffect, useRef, useState, history } from 'react';
import {
  Button,
  Col,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
  OverlayTrigger,
  PopoverContent,
  Row,
} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import FileBtn from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ModalHeader from 'react-bootstrap/ModalHeader';
import UserAvatar from '../Sidebar/UserAvatar';
import Popover from 'react-bootstrap/Popover';
import axios from 'axios';
import SearchMember from '../../components/SearchMember';
import { useDispatch } from 'react-redux';
import { postWorkspaces } from '../../modules/workspace';
import { fileAxios } from '../../lib/apiAxios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const WorkSpaceAddModal = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [workspaceName, setWorkspaceName] = useState('');
  const [inviteMember, setInviteMember] = useState('');
  const [image, setImage] = useState('');
  const [previewImg, setPreviewImg] = useState();
  const [emailList, setEmailList] = useState([]);
  const [imageName, setImageName] = useState([]);

  // 모달 초기화
  useEffect(() => {
    if (props.clicked == true) {
      setWorkspaceName('')
      setInviteMember('')
      setImage('')
      setImageName('')
      setPreviewImg('')
      setEmailList([]);
    }
  }, [props.clicked])
  useEffect(()=>{
    console.log('emailList',emailList)
  },[emailList])

  // 워크스페이스 추가
  const addWorkspaceClick = async (e) =>{
    e.preventDefault();
    if(workspaceName.length === 0) {
      alert('workspace name is required')
      return;
    }

    const formData = new FormData();
    formData.append("ws_name",workspaceName)
    console.log('ws_name : ',workspaceName);
    formData.append("ws_isImage", image)
    console.log('ws_isImage : ',image);
    formData.append('member',emailList)
    for (let key of formData.keys())
      console.log('key', key);
    for (let value of formData.values())
      console.log('value', value);

    const token = sessionStorage.getItem('accessToken')
    console.log("token",token)
    const url = "/home/addWorkspace";

    const options = {
      method: 'POST',
      headers: { 
        "Authorization": token,
      },
      data: formData,
      url,
    };

    const response = await axios(options);
    dispatch(postWorkspaces());
    props.handleClose()
  }

  // 워크스페이스 이름
  function onNameChange(e) {
    setWorkspaceName(e.target.value);
  }

  // 파일 추가 버튼
function onFileChange(e) {
  let file = e.target.files[0]
  const reg = /(.*?)\.(jpg|jpeg|png|gif|bmp)$/i;
  if(reg.test(file.name)) {
    let reader = new FileReader();
    reader.onloadend = () => {
    const prev = reader.result;
    if (prev)
      setPreviewImg(prev.toString());
    };
    if (file) {
      reader.readAsDataURL(file);
      setImage(file);
      setImageName(file.name);
    }
  }else {
    alert('이미지 파일만 선택 가능합니다.');
  }
  
}

  return (
    <Modal
      size={'lg'}
      show={props.clicked}
      onHide={props.handleClose}
      style={{ marginTop: '100px' }}
    >
      <ModalHeader closeButton>
        <ModalTitle>WorkSpace 추가하기</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <Form.Group>
            <Form.Label>WorkSpace Name</Form.Label>
            <Row>
              <Col sm={8}>
                <Form.Control
                  type='text'
                  name='workspaceName'
                  value={workspaceName}
                  onChange={onNameChange} />
              </Col>
            </Row>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>WorkSpace Thumbnail 사진</Form.Label>
            <Row>
            <Col sm={8}>
                <Form.Control
                  type="text"
                  value={imageName}
                  disabled
                />
              </Col>
              <Col sm={4}>
                <input accept="image/png,image/jpeg,image/gif" className={classes.input} id="icon-button-file" type="file" onChange={onFileChange} />
                <label htmlFor="icon-button-file">
                  <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                  </IconButton>
                </label>
              </Col>
              {
                previewImg === '' || previewImg === undefined ? null : <img src={previewImg} alt='img' height={'200px'} />
              }
            </Row>
          </Form.Group>
          <br />
          <SearchMember emailList={emailList} setEmailList={setEmailList} />
        </Form>
        <Row>
          {emailList.map((email, index) => {
            return (
              <UserAvatar
                key={index}
                list={emailList}
                setList={setEmailList}
                user_id={email}
              />
            );
          })}
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button variant='danger' onClick={props.handleClose}>
          취소하기
        </Button>
        <Button variant='primary' onClick={addWorkspaceClick}>
          추가하기
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default WorkSpaceAddModal;