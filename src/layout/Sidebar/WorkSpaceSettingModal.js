import {
  Button,
  Col,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
  Row,
} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ModalHeader from 'react-bootstrap/ModalHeader';
import React, { useEffect, useState } from 'react';
import UserAvatar from './UserAvatar';
import axios from 'axios';
import SearchMember from '../../components/SearchMember';
import LeaveModal from './LeaveModal';
import { useDispatch, useSelector } from 'react-redux';
import { postWorkspaces, updateWorkspaceName, getFileName } from '../../modules/workspace';


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

const WorkSpaceSettingModal = ({ workspace, clicked, handleClose, role }) => {
  const dispatch = useDispatch();

  const workspaces = useSelector(state => state.workspace.workspaces);
  console.log('workspaces ==> ',workspaces)
  const classes = useStyles();

  const [leaveModal, setLeaveModal] = useState(false);
  const [workspaceName, setWorkspaceName] = useState(workspace.ws_name);
  const [userList, setUserLists] = useState([]);
  const [emailList, setEmailList] = useState([]);
  const [image, setImage] = useState();
  const [fileName, setFileName] = useState(workspace.ws_isImage)
  const [previewImg, setPreviewImg] = useState();
  const [isActiveName, setIsActiveName] = useState(true);
  const [isActiveImg, setIsActiveImg] = useState(true);
  
  const leaveModalClose = () => setLeaveModal(false);
  const leaveModalShow = () => setLeaveModal(true);

  useEffect(() => {
    const url = '/home/wsUserList';

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        "Authorization": sessionStorage.getItem("accessToken"),
      },
      data: {
        ws_id:workspace.ws_id
      },
      url,
    };
    axios(options)
      .then((res) => {
        console.log('res', res.data)
        setUserLists([...res.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [emailList]);

  useEffect(() => {
    dispatch(getFileName(workspace.ws_id));
  },[workspace]);
  console.log('imageName ', workspace.ws_isImage);
  console.log('userList : ',userList);

  const onChangeName = (e) => {
    console.log(workspaceName.length)
    setWorkspaceName(e.target.value);
    if((workspaceName.length-1) === 0) {
      setIsActiveName(true)
    }
    setIsActiveName(false)
  }

  const updateNameHandler = (e) => {
    e.preventDefault();
    if(workspaceName === '' || workspaceName === null) {
      alert("workspaceName required");
    }else {
      dispatch(updateWorkspaceName({
        ...workspace,
        ws_name:workspaceName,
      }))
      setWorkspaceName(workspaceName);
    }
  }
  
  // 파일 추가 버튼
  function onFileChange(e) {
    let reader = new FileReader();
    reader.onloadend = () => {
      const prev = reader.result;
      if (prev)
        setPreviewImg(prev.toString());
        console.log('previewImg ',previewImg)
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImage(e.target.files[0]);
      setFileName(e.target.files[0].name);
      setIsActiveImg(false);
    }

  }

  const FileSaveBtn = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("ws_id", workspace.ws_id)
    formData.append("pre_ws_isImage", workspace.ws_isImage)
    formData.append("ws_isImage", image)
    const token = sessionStorage.getItem('accessToken')
    console.log("token",token)
    const url = "/home/updateImg";

    const options = {
      method: 'POST',
      headers: { 
        "Authorization": token,
      },
      data: formData,
      url,
    };
    axios(options);
  } 

  const handleCloseHandler = () => {
    setWorkspaceName(null);
    setEmailList([]);
    setImage('');
    setFileName([]);
    setPreviewImg('');
    setIsActiveName(true);
    setIsActiveImg(true);
    handleClose();
    dispatch(postWorkspaces());
  }

  console.log('imageName ', workspace.user_id);

  const leaveHandler = () => {
    leaveModalShow()
  }

  return (
    <Modal
      size={'lg'}
      show={clicked}
      onHide={handleClose}
      style={{ marginTop: '50'}}
      className=""
    >
      <ModalHeader style={{backgroundColor:"#F7F7F7"}}>
        <ModalTitle>
          <span style={{ fontSize: '1.2rem' }}> {workspace.WS_NAME}</span>{' '}
          환경설정
        </ModalTitle>
      </ModalHeader>

      <ModalBody>
        <Form>
          <Form.Group>
            <Form.Label>WorkSpace Name</Form.Label>

            <Row>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  defaultValue={workspaceName == null ? setWorkspaceName(workspace.ws_name) : workspaceName}
                  onChange={onChangeName}
                  disabled={role !== 'ADMIN'}
                />
              </Col>
              <Col>
                <div>
                  {role === 'ADMIN' ?  <Button onClick={updateNameHandler} disabled={isActiveName}>변경하기</Button> : null}
                </div>
              </Col>
            </Row>
          </Form.Group>
          <br /> 
          {role === 'ADMIN' ?
            <>
              <Form.Group>
              <Form.Label>WorkSpace Thumbnail 사진</Form.Label>
                <Row>
                  <Col sm={8}>
                    <Form.Control
                      type="text"
                      value= {
                        fileName === null ? workspace.ws_isImage : fileName
                      }
                      disabled
                    />
                  </Col>
                  <Col sm={4}>
                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={onFileChange} />
                    <label htmlFor="icon-button-file">
                      <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                      </IconButton>
                    </label>
                    <Button disabled={isActiveImg} onClick={FileSaveBtn}>저장</Button>
                  </Col>
                  {
                    previewImg === '' || previewImg === undefined ? null : <img src={previewImg} alt='img' height={'200px'} />
                  }
                </Row>
              </Form.Group>
              <Form.Group>
                <br/>
                <Form.Label>WorkSpace Members</Form.Label>
                <Row style={{height: 260, overflowY:"scroll" }}>
                  {userList?.map((value, index)=>{
                    return <UserAvatar
                      invite={true}
                      list={userList}
                      setList={setUserLists}
                      user_id={value}
                      admin={workspace.user_id}
                      ws_id={workspace.ws_id}
                      key={index}/>
                  })}
                </Row>
                <br/>
                <Row>
                  <Col sm={8}>
                    <SearchMember 
                    member={userList}
                    ws_id={workspace.ws_id} 
                    emailList={emailList} 
                    setEmailList={setEmailList} 
                    invite={true} 
                    disabled={role !== 'ADMIN'}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Row style={{ marginTop: 20, height:300, overflowY:"scroll" }}>
                {emailList?.map((value, index) => {
                  return <UserAvatar 
                    invite={false}
                    list={emailList}
                    setList={setEmailList}
                    user_id={value} 
                    key={index} />
                })}
              </Row>
            </>
            : 
              <Form.Group>
                <Form.Label>WorkSpace Members</Form.Label>
                <Row style={{height: 260, overflowY:"scroll" }}>
                  {userList?.map((value, index)=>{
                    return <UserAvatar
                      invite={true}
                      list={userList}
                      setList={setUserLists}
                      user_id={value}
                      admin={workspace.user_id}
                      key={index}/>
                  })}
                </Row>
              </Form.Group>
          }
        </Form>
        

      </ModalBody>

      <ModalFooter>      
        <Button variant="danger" onClick={leaveHandler}>
          Leave Workspace
        </Button>
       
        <LeaveModal 
          leaveModal={leaveModal} 
          leaveModalClose={leaveModalClose} 
          userList={userList}
          user_id={workspace.user_id}
          ws_id={workspace.ws_id}
          role={role}
        />

        <Button variant="secondary" onClick={handleCloseHandler}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default WorkSpaceSettingModal;
