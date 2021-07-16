import React, { useCallback, useEffect, useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useDispatch } from 'react-redux';
import { updateCardTodo } from '../../../../modules/cardTodo';
import { Button, Modal, Form } from 'react-bootstrap';
import TodoPeriodModal from './TodoPeriodModal';

const listButton = {
  backgroundColor: '#7986CB',
  border: '1px solid #7986CB',
  marginLeft: 10,
  fontSize: 13,
  height: 30,
};

const TodoCheckTrue = (props) => {
  const { todo } = props;
  const [listDateShow, setListDateShow] = useState(false);

  const dispatch = useDispatch();

  const handleShow = () => setListDateShow(true);
  const handleClose = () => setListDateShow(false);

  const updateTodoIsdone = useCallback((todoIsdone) => {
    dispatch(
      updateCardTodo({
        ...todo,
        todo_isdone: todoIsdone,
      }),
    );
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Form.Check
        type='checkbox'
        id='autoSizingCheck'
        className='mb-2'
        checked='checked'
        onClick={() => updateTodoIsdone('0')}
      />

      <div
        style={{ marginLeft: 5, width: '100%', minWidth: 200 }}
        contentEditable
      >
        <del>{todo.todo_name}</del>
      </div>

      <Button onClick={handleShow} style={listButton}>
        기간 설정
      </Button>
      {<TodoPeriodModal
        todo={todo}
        show={listDateShow}
        handleClose={handleClose} />}
    </div>
  );
};

export default TodoCheckTrue;
