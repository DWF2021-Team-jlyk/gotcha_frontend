import React, {useEffect, useState}from 'react';
import { BsCheckBox } from 'react-icons/bs';
import {
  Button,
  Modal,
  Form,
} from 'react-bootstrap';
import axios from 'axios';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const listButton = {
    backgroundColor: '#7986CB',
    border: '1px solid #7986CB',
    marginLeft: 10,
    fontSize: 13,
    height: 30,
  };
  

const CardTodo = () => {
  const [listDateShow, setListDateShow] = useState(false);

  const handleClose = () => setListDateShow(false);
  const handleShow = () => setListDateShow(true);

  useEffect(() => {
    changeTodoIsDone();
  }, []);

   
  const changeTodoIsDone = async (todo_id, isdone) => {
    const result = await axios.post('/card/todoIsDoneChange', {
      todo_id: todo_id,
      todo_isdone: isdone,
    });
  
  };


  return (
    <div>

      <div style={{ marginTop: 30, marginBottom: 20 }}>
        <h5>
          <BsCheckBox /> TodoList
        </h5>
      </div>


      <Row md={2}>
        <div style={{ padding: 5 }}>

          <div style={{ display: 'flex' }}>
            <Col>
              <Form.Check
                type="checkbox"
                id="autoSizingCheck"
                className="mb-2"
                checked="checked"
            
              />
              </Col>
              <Col>
                <div style={{ marginLeft: 5 }}>
                  <del>이름이름</del>
                </div>
              </Col>
              <Col>
                <Button onClick={handleShow} style={listButton}>
                  기간 설정
                </Button>
              </Col>
          </div>

        </div>
      </Row>

    </div>
  );
};

export default CardTodo;
