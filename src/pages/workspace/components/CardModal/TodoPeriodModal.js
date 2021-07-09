import React,{useCallback, useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { useDispatch } from 'react-redux';
import { updateCardTodo } from '../../../../modules/cardTodo';

export default function TodoPeriodModal(props) {
  const { todo, show, handleClose} = props;

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const dispatch = useDispatch();

  const updateTodoDate =useCallback((startDate,endDate)=>{
    dispatch(updateCardTodo({
      ...todo,
      todo_start_date:startDate,
      todo_end_date:endDate,
    }))
  })

  return (
    <>
      <Modal
        show={show}
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
          Start date:
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <br></br>
          End date:
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => updateTodoDate(startDate, endDate)}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
