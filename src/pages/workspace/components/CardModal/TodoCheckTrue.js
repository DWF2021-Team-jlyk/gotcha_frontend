import React, { useCallback, useEffect, useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useDispatch } from 'react-redux';
import { deleteCardTodo, updateCardTodo } from '../../../../modules/cardTodo';
import { Button, Modal, Form } from 'react-bootstrap';
import TodoPeriodModal from './TodoPeriodModal';
import TodoDate from './TodoDate';
import { AiOutlineCalendar, AiOutlineDelete } from 'react-icons/ai';
import { HiOutlineSave } from 'react-icons/all';

const listButton = {
  backgroundColor: '#7986CB',
  border: '1px solid #7986CB',
  fontSize: 13,
  height: 30,
};

const TodoCheckTrue = (props) => {
  const { todo } = props;
  const [listDateShow, setListDateShow] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const dispatch = useDispatch();

  const handleShow = () => setListDateShow(true);
  const handleClose = () => setListDateShow(false);
  const onFocusState = () => setIsFocus(true);
  const outFocusState = () => setIsFocus(false);
  const handleMouseDown = (e) => e.preventDefault();

  const updateTodoIsdone = useCallback((todoIsdone) => {
    dispatch(
      updateCardTodo({
        ...todo,
        todo_isdone: todoIsdone,
      }),
    );
  }, []);

  const updateTodoName = useCallback((todoName) => {
    dispatch(
      updateCardTodo({
        ...todo,
        todo_name: todoName,
      }),
    );
  }, []);

  const deleteTodos = useCallback(
    (todo_id) =>
      dispatch(
        deleteCardTodo({
          todo_id: todo_id,
        }),
      ),
    []);

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
        style={{ marginLeft: 5, width: 209, minWidth: 200 }}
        contentEditable
        onFocus={onFocusState}
        onBlur={outFocusState}
      >
        <del>{todo.todo_name}</del>
      </div>

      <Button onClick={handleShow} style={listButton}>
        <AiOutlineCalendar
          size={15}
        />
      </Button>

      {isFocus ? (
        <>
          <span
            onMouseDown={handleMouseDown}
            onClick={() => {
              updateTodoName();
            }}
          >
            <HiOutlineSave size={25}/>
          </span>{' '}
          &nbsp;
          <span
            onClick={() => {
              deleteTodos(todo.todo_id);
            }}
            onMouseDown={handleMouseDown}
          >
            <AiOutlineDelete size={25}/>
          </span>
        </>
      ) : null}

      {
        todo.todo_start_date !== null && todo.todo_start_date !== "" &&
        <TodoDate startDate={todo?.todo_start_date} endDate={todo?.todo_end_date}/>
      }
      {<TodoPeriodModal
        todo={todo}
        show={listDateShow}
        handleClose={handleClose} />}
    </div>
  );
};

export default TodoCheckTrue;
