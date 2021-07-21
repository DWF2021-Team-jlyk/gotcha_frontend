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
          style={{
            background: '#3f51b5',
          }}
        >
          <Modal.Title><span style={{color:'white'}}>Todolist 기간 설정</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <div>
         <b> Start date: </b>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          </div>

          <div style={{marginTop:10}}>
          <b> End date: </b>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              updateTodoDate(startDate, endDate);
              handleClose();
            }
            }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
