import React, { useEffect, useState } from 'react';
import { BsCheckBox } from 'react-icons/bs';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { updateCardTodo } from '../../../../modules/cardTodo';
import Col from 'react-bootstrap/Col'

const listButton = {
  backgroundColor: '#7986CB',
  border: '1px solid #7986CB',
  marginLeft: 10,
  fontSize: 13,
  height: 30,
};

const CardTodo = () => {
  const [listDateShow, setListDateShow] = useState(false);

  const todos = useSelector(state => state.cardTodo.todos)
  console.log("todos:",todos);
  const handleClose = () => setListDateShow(false);
  const handleShow = () => setListDateShow(true);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatchEvent()
  // }, [isDone]);

  const changeTodoIsDone = useCallback(
    (todo_id,todo_name,card_id,todo_isdone) => 
    dispatch(updateCardTodo({
      todo_id:todo_id,
      todo_name:todo_name,
      card_id:card_id,
      todo_isdone:todo_isdone
      })),
     [dispatch]
    // console.log("changeTodoIsDone",  todo_id)
  );

  
  return (
    <div>
      <div style={{ marginTop: 30, marginBottom: 20 }}>
        <h5>
          <BsCheckBox /> TodoList
        </h5>
      </div>

      {/* 입력된 todolist들 */}
      <div>
        {todos.map((todo) => {
          console.log('value.todo_isdone', todo.todo_isdone);
          return (
            <div style={{ display: 'flex' }}>
              <div style={{ padding: 5 }}>
                {todo.todo_isdone === '1' ? (
                  //1이면 check됨
                
                  <div style={{ display: 'flex' }}>
                    <Form.Check
                      type="checkbox"
                      id="autoSizingCheck"
                      className="mb-2"
                      checked="checked"
                      onClick={() => changeTodoIsDone(todo.todo_id,todo.todo_name,todo.card_id, '0')}
                    />
                   
                      <div style={{ marginLeft: 5 }}>
                        <del>{todo.todo_name}</del>
                      </div>
                    
                  </div>
                  
                ) : (
                  <div style={{ display: 'flex' }}>
                    <Form.Check
                      type="checkbox"
                      id="autoSizingCheck"
                      className="mb-2"
                      onClick={() => changeTodoIsDone(todo.todo_id,todo.todo_name,todo.card_id, '1')}
                    />
            
                      <div style={{ marginLeft: 5 }} contentEditable>
                        {todo.todo_name}
                      </div>
                   
                    </div>
                    
                  
                )}
              </div>
      
                <Button onClick={handleShow} style={listButton}>
                  기간 설정
                </Button>
              

            </div>
          );
        })}

        <Modal
          show={listDateShow}
          onHide={handleClose}
          style={{ marginTop: '300px' }}
        >
          <Modal.Header
            closeButton
            style={{
              background: '#f7f7f7',
            }}
          >
            <Modal.Title>Todolist 기간 설정</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Start date(누르면 달력나오게) <br></br>
            End date
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default CardTodo;