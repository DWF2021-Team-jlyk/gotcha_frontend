import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import { BsListCheck } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import { addCardTodo } from '../../../../modules/cardTodo';
import { useDispatch, useSelector } from 'react-redux';


const buttonStyle = {
  width:120, 
  backgroundColor:'#3f51b5', 
  color:'white', 
  marginBottom:8
}


export default function AddTodo(props) {
  const {cardId, num, setNum} = props;
  const [show, setShow] = useState(false);
  const [listDateShow, setListDateShow] = useState(false);
  const [target, setTarget] = useState(null);
  //const target = useRef(null);
  const ref= useRef(null);
  const todoEL = useRef(null);
  
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState('');
  const [todoStartDate, setTodoStartDate] = useState('');
  const [todoEndDate, setTodoEndDate] = useState('');
  const [todoIsdone, setTodoIsdone] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleClick = (event) => {
    if(num != 3)
      setNum(3);
    else setNum(0);
    setTarget(event.target);           
  };

  const onTodoAdd = () =>{
    dispatch(
      addCardTodo({
        card_id:cardId,
        todo_name:todoName,
        todo_start_date:todoStartDate,
        todo_end_date:todoEndDate,
      })
    );
  };

  return (
    <div ref={ref}>
      <Button
        onClick={handleClick}
        style={buttonStyle}
      >
        <BsListCheck /> &nbsp; Todo
      </Button>

      <Overlay
        show={num===3}
        target={target}
        placement="right"
        container={ref.current}
        containerPadding={40}
      >
        <Popover id="popover-contained">
          <Popover.Title as="h3">
            <b>Todo</b>
          </Popover.Title>

          <Popover.Content>   

            <Form.Group controlId="formBasicEmail">
                <Form.Label>추가할 Todo Name</Form.Label>
                <Form.Control type="text" placeholder="Todo Name" onChange={(e)=>{setTodoName(e.target.value);
              }} ref={todoEL} />
            </Form.Group>

            <Button style={{ backgroundColor: '#7986CB', border:'1px solid #7986CB', color:'white', marginTop:10}}
            onClick={(e)=> 
              {   
              onTodoAdd();
              setTodoName('');
              todoEL.current.value='';
               }}
               >Add</Button>

          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
}
