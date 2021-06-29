import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
} from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
import { FunctionalAddOn, ActionAddOn } from './ModalAddOn';
import { TiDocument } from 'react-icons/ti';
import { AiFillEdit, AiOutlineAlignLeft, AiOutlineClose} from 'react-icons/ai';
import Form from 'react-bootstrap/Form';

const WorkListCardModal = (props) => {

  const [desc , setDesc] = useState(false);
  const avatarIcon = (id) => {
    let returnStr = id.charAt(0);
    for (let i = 1; i < id.length; i++) {
      if (id.charAt(i) === '@') break;
      if (id.charAt(i) === id.charAt(i).toUpperCase())
        returnStr += id.charAt(i);
    }
    return returnStr;
  };

  return (
    <Modal
      size={'lg'}
      show={props.show}
      onHide={props.handle}
      style={{ marginTop: '100px' }}
    >
      <ModalHeader
        style={{
          background: '#3f51b5',
        }}
      >
        <h3 style={{ color: 'white' }}>
          <TiDocument /> card name{props.cardName}
        </h3>
      </ModalHeader>

      <ModalBody>
        <Row>
          <Col sm={9}>
            <h5 style={{ marginBottom: 20 }}>
              <AiFillEdit /> Description{' '}
            </h5>
            
            {desc === false?

              // Description값 보여주기
              <div onClick={e=>{setDesc(!desc)}}>
                <Form.Control
                  as="textarea"
                  placeholder="Add a more detailed desciption..."
                  style={{ height: '100px',resize: "none" }}
                  disabled
                />
              </div>:

              // Description값 수정하기
              <div>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Add a more detailed desciption..."
                  style={{ height: '180px'}}
                />
                <div style={{marginTop:5, float:"right"}}>
                  <Button onClick={e=>{setDesc(!desc)}} style={{ backgroundColor:"#3f51b5"}}>Save</Button>
                  <AiOutlineClose style={{marginLeft:10, fontSize:26}}onClick={e=>{setDesc(!desc)}}/>
                </div>
            
              </Form.Group>
            </div>
            }
            

            <div style={{display:"flex", marginTop: 60, marginBottom:5}}>
              <h5>
                <AiOutlineAlignLeft /> Activity{' '}
              </h5>

              <Button style={{backgroundColor:"#3f51b5", marginLeft:377,}}>Show Log</Button>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <div style={{display:"flex"}}>
                <Avatar
                  onClick={(event) => {}}
                  style={{ margin: '10px 10px 0px 5px' }}
                >
                  {/* {avatarIcon(props.user_id)} */}
                  {avatarIcon("user01@naver.com")}
                </Avatar>
             
              <Form.Control type="text" placeholder="Write a comment..." />
              </div>

            </Form.Group>
         
            <div style={{ height: 200 }}>{/* activity 띄울곳 */}</div>
          </Col>

          <Col sm={3}>
            <div>
              <h5>ADD TO CARD</h5>
              <FunctionalAddOn />
            </div>
            <br />
            <div>
              <h5>ACTIONS</h5>
              <ActionAddOn />
            </div>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button variant="primary">Save</Button>
        <Button variant="danger">Delete</Button>
        <Button variant="secondary">Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default WorkListCardModal;
