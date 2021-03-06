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
import { postWorkspaces, updateWorkspaceName, getFileName, deleteWorkspace } from '../../modules/workspace';
import CloseIcon from '@material-ui/icons/Close';
import SettingsIcon from '@material-ui/icons/Settings';

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
  const userId = useSelector(state=>state.userInfo.userId);
  const classes = useStyles();

  const [leaveModal, setLeaveModal] = useState(false);
  const [workspaceName, setWorkspaceName] = useState(workspace.ws_name);
  const [userList, setUserLists] = useState([]);
  const [emailList, setEmailList] = useState([]);
  const [image, setImage] = useState();
  const [fileName, setFileName] = useState('');
  const [previewImg, setPreviewImg] = useState();
  const [isActiveName, setIsActiveName] = useState(true);
  const [isActiveImg, setIsActiveImg] = useState(true);

  const leaveModalClose = () => setLeaveModal(false);
  const leaveModalShow = () => setLeaveModal(true);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const url = '/home/wsUserList';


    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': sessionStorage.getItem('accessToken'),
      },
      data: {
        ws_id: workspace.ws_id,
      },
      url,
    };
    axios(options)
      .then((res) => {
        setUserLists([...res.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [emailList, click]);

  useEffect(() => {
    setFileName(workspace.ws_isImage);
  }, [workspace]);


  const onChangeName = (e) => {
  
    setWorkspaceName(e.target.value);
    if ((workspaceName.length - 1) === 0) {
      setIsActiveName(true);
    }
    setIsActiveName(false);
  };

  const updateNameHandler = (e) => {
    e.preventDefault();
    if (workspaceName === '' || workspaceName === null) {
      alert('workspaceName required');
    } else {
      dispatch(updateWorkspaceName({
        ...workspace,
        ws_name: workspaceName,
      }));
      setWorkspaceName(workspaceName);
    }
  };

  // ?????? ?????? ??????
  function onFileChange(e) {
    let reader = new FileReader();
    reader.onloadend = () => {
      const prev = reader.result;
      if (prev)
        setPreviewImg(prev.toString());
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
    formData.append('ws_id', workspace.ws_id);
    formData.append('pre_ws_isImage', workspace.ws_isImage);
    formData.append('ws_isImage', image);
    const token = sessionStorage.getItem('accessToken');
    const url = '/home/updateImg';

    const options = {
      method: 'POST',
      headers: {
        'Authorization': token,
      },
      data: formData,
      url,
    };
    axios(options).then(response => {
      dispatch(postWorkspaces());
    });
  };

  const handleCloseHandler = () => {
    setWorkspaceName(null);
    setEmailList([]);
    setImage('');
    setFileName([]);
    setPreviewImg('');
    setIsActiveName(true);
    setIsActiveImg(true);
    handleClose();
  };


  const leaveHandler = () => {
    if (userList.length == 1) {
      dispatch(deleteWorkspace(workspace.ws_id, userId));
    } else {
      leaveModalShow();
    }
  };

  const closeHandle = () => {
    setWorkspaceName(null);
    setEmailList([]);
    setImage('');
    setFileName([]);
    setPreviewImg('');
    setIsActiveName(true);
    setIsActiveImg(true);
    handleClose();
  };

  return (
    <Modal
      size={'lg'}
      show={clicked}
      onHide={handleClose}
      style={{ marginTop: 0 }}
      // className=""
    >
      <ModalHeader style={{ backgroundColor: '#3f51b5 ' }}>
        <ModalTitle>
          <div style={{ color: 'white' }}>
            <SettingsIcon style={{ marginRight: 10, marginBottom: 5 }} />
            Workspace Setting
            <CloseIcon onClick={closeHandle} style={{ marginLeft: 490, marginBottom: 5 }} />
          </div>

        </ModalTitle>

      </ModalHeader>

      <ModalBody>
        <Form>
          <Form.Group>
            <Form.Label><b>WorkSpace Name</b></Form.Label>
            <div style={{ marginTop: 5 }}>
              <Row>
                <Col sm={8}>
                  <Form.Control
                    type='text'
                    defaultValue={workspaceName == null ? setWorkspaceName(workspace.ws_name) : workspaceName}
                    onChange={onChangeName}
                    disabled={role !== 'ADMIN'}
                  />
                </Col>
                <Col>
                  <div>
                    {role === 'ADMIN' ?
                      <Button onClick={updateNameHandler} disabled={isActiveName}>????????????</Button> : null}
                  </div>
                </Col>
              </Row>
            </div>
          </Form.Group>
          <br />
          {role === 'ADMIN' ?
            <>
              <Form.Group>
                <Form.Label><b>WorkSpace Thumbnail</b></Form.Label>
                <div style={{ display: 'flex' }}>
                  <div style={{ marginRight: 10, marginTop: 6 }}>
                    <Form.Control
                      type='text'
                      value={
                        fileName === null ? workspace.ws_isImage : fileName
                      }
                      disabled
                      style={{ width: 500 }}
                    />
                  </div>
                  <div>
                    <input accept='image/*' className={classes.input} id='icon-button-file' type='file'
                           onChange={onFileChange} />
                    <label htmlFor='icon-button-file'>
                      <IconButton color='primary' aria-label='upload picture' component='span'>
                        <PhotoCamera />
                      </IconButton>
                    </label>
                    <Button disabled={isActiveImg} onClick={FileSaveBtn}>??????</Button>
                  </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: 10 }}>
                  {
                    previewImg === '' || previewImg === undefined ? null :
                      <img src={previewImg} alt='img' height={'200px'} />
                  }
                </div>
              </Form.Group>
              <Form.Group>
                <br />
                <Form.Label><b>WorkSpace Members</b></Form.Label>
                <Row style={{ maxHeight: 200, overflowY: 'scroll' }}>
                  {userList?.map((value, index) => {
                    return <UserAvatar
                      invite={true}
                      list={userList}
                      setList={setUserLists}
                      user_id={value}
                      admin={workspace.user_id}
                      ws_id={workspace.ws_id}
                      key={index}
                      role={role} />;
                  })}
                </Row>
                <br />
                <Row>
                  <Col sm={8}>
                    <SearchMember
                      member={userList}
                      ws_id={workspace.ws_id}
                      emailList={emailList}
                      setEmailList={setEmailList}
                      invite={true}
                      disabled={role !== 'ADMIN'}
                      click={click}
                      setClick={setClick}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Row style={{ marginTop: 20, maxHeight: 200, overflowY: 'scroll' }}>
                {emailList?.map((value, index) => {
                  return <UserAvatar
                    invite={false}
                    list={emailList}
                    setList={setEmailList}
                    user_id={value}
                    key={index}
                    role={role} />;
                })}
              </Row>
            </>
            :
            <Form.Group>
              <Form.Label><b>WorkSpace Members</b></Form.Label>
              <Row style={{ maxHeight: 200, overflowY: 'scroll' }}>
                {userList?.map((value, index) => {
                  return <UserAvatar
                    invite={true}
                    list={userList}
                    setList={setUserLists}
                    user_id={value}
                    admin={workspace.user_id}
                    key={index}
                    role={role} />;
                })}
              </Row>
            </Form.Group>
          }
        </Form>


      </ModalBody>

      <ModalFooter>
        <Button variant='danger' onClick={leaveHandler}>
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

        <Button variant='secondary' onClick={handleCloseHandler}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default WorkSpaceSettingModal;
