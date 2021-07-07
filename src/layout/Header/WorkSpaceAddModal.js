import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, ModalBody, ModalFooter, ModalTitle, Row } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
import { useDispatch } from 'react-redux';
import { addWorkspaces } from '../../modules/workspace';

const WorkSpaceAddModal = (props) => {
  const dispatch = useDispatch();
  const [workspaceName, setWorkspaceName] = useState('');
  const [inviteMember, setInviteMember] = useState('');
  const [image, setImage] = useState('')
  const [previewImg, setPreviewImg] = useState();
  // 모달 초기화
  useEffect(() => {
    if (props.clicked == true) {
      setWorkspaceName('')
      setInviteMember('')
      setImage('')
    }
  }, [props.clicked])

  

  // 워크스페이스 추가
  const addWorkspaceClick = async (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("ws_name",workspaceName)
    console.log('ws_isImage : ',image);
    formData.append("ws_isImage", image)
    for (let key of formData.keys())
    console.log('key',key);
    for (let value of formData.values())
    console.log('value',value);
    // dispatch(addWorkspaces(formData))
    const response = await axios.post("/home/addWorkspace", {
      formData,
      'accessToken': sessionStorage.getItem('accessToken')
    });
    console.log('???',response);
  }

  // 워크스페이스 이름
  function onNameChange(e) {
    setWorkspaceName(e.target.value);
  }

  // 멤버초대 input
  function onInviteChange(e) {
    setInviteMember(e.target.value)
  }

  // 멤버초대 버튼
  function inviteMemberBtn() {
    alert(inviteMember)
    
  }
  
  // 파일 추가 버튼
  function onFileChange(e) {
    let reader = new FileReader();
    reader.onloadend = () => {
      const prev = reader.result;
      if(prev)
      setPreviewImg(prev.toString());
    }
    if(e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImage(e.target.files[0]);  
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
                  onChange={onNameChange}/>
              </Col>
            </Row>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>WorkSpace 멤버</Form.Label>
            <Row>
              <Col sm={8}>
                <Form.Control type='email'
                  name='inviteMember'
                  value={inviteMember}
                  onChange={onInviteChange}
                />
              </Col>
              <Col sm={4}>
                <Button onClick={inviteMemberBtn}>멤버 초대하기</Button>
              </Col>
            </Row>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>WorkSpace Thumbnail 사진</Form.Label>
            <Row>
              <Col sm={8}>
                <Form.Control 
                  type='file'
                  accept='image/png,image/jpeg,image/gif'
                  name='imgFile'
                  onChange={onFileChange}
                />
              </Col>
              {/* <Col sm={4}>
                <Button>사진 추가하기</Button>
              </Col> */}
              {
                image === '' ? null : <img src={previewImg} alt="img" height={"200px"}/>
              }
            </Row>
          </Form.Group>

        </Form>
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