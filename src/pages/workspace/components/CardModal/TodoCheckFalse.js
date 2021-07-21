import React, { useCallback, useEffect, useState } from 'react';
import TodoPeriodModal from './TodoPeriodModal';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateCardTodo, deleteCardTodo } from '../../../../modules/cardTodo';
import TodoDate from './TodoDate';
import { AiOutlineCalendar, AiOutlineDelete } from 'react-icons/ai';
import { HiOutlineSave } from 'react-icons/all';
import 'antd/dist/antd.css';
import { Tooltip } from 'antd';

const listButton = {
  backgroundColor: '#7986CB',
  border: '1px solid #7986CB',
  marginLeft: 10,
  fontSize: 13,
  height: 30,
};

const TodoCheckFalse = (props) => {
  const { todo } = props;

  const [listDateShow, setListDateShow] = useState(false);
  const [todoName, setTodoName] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const onFocusState = () => setIsFocus(true);
  const outFocusState = () => setIsFocus(false);
  const handleMouseDown = (e) => e.preventDefault();

  const handleShow = () => setListDateShow(true);
  const handleClose = () => setListDateShow(false);

  const dispatch = useDispatch();

  const updateTodoIsdone = useCallback(
    (todoIsdone) => {
      dispatch(
        updateCardTodo({
          ...todo,
          todo_isdone: todoIsdone,
        }),
      );
    },
    [todo],
  );

  const updateTodoName = useCallback(
    (todoName) => {
      dispatch(
        updateCardTodo({
          ...todo,
          todo_name: todoName,
        }),
      );
    },
    [todo],
  );

  const deleteTodos = useCallback(
    (todo_id) =>
      dispatch(
        deleteCardTodo({
          todo_id: todo_id,
        }),
      ),
    [todo],
  );

  return (
    <div style={{ display: 'flex' }}>
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-2"
        onClick={() => updateTodoIsdone('1')}
      />
      <span contentEditable style={{ width: 200 }}>
        <textarea
          style={{
            border: 'none',
            resize: 'none',
            height: 30,
            width: 200,
            margin: 0,
          }}
          onFocus={onFocusState}
          onBlur={outFocusState}
          onChange={(e) => setTodoName(e.target.value)}
        >
          {todo.todo_name}
        </textarea>
      </span>{' '}
      &nbsp;
      <Button onClick={handleShow} style={listButton}>
        <AiOutlineCalendar size={18} style={{ marginBottom: 5 }} />
      </Button>{' '}
      <br />
      &nbsp;
      {isFocus ? (
        <>
          &ensp;
          <span
            onMouseDown={handleMouseDown}
            onClick={() => {
              updateTodoName(todoName);
            }}
          >
            <Tooltip title="save renamed">
              <HiOutlineSave size={25} color='blue'/>
            </Tooltip>
          </span>{' '}
          &nbsp;
          <span
            onClick={() => {
              deleteTodos(todo.todo_id);
            }}
            onMouseDown={handleMouseDown}
          >
             <Tooltip title="delete todo">
              <AiOutlineDelete size={25} color='red'/>
            </Tooltip>
          </span>
        </>
      ) : null}
      {todo.todo_start_date !== null && todo.todo_start_date !== '' && (
        <TodoDate
          startDate={todo?.todo_start_date}
          endDate={todo?.todo_end_date}
        />
      )}
      {listDateShow && (
        <TodoPeriodModal
          todo={todo}
          show={listDateShow}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default TodoCheckFalse;
