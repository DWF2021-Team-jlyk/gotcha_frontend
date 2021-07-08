import React from 'react';
import { BsCheckBox } from 'react-icons/bs';
import { useSelector} from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import TodoCheckTrue from './TodoCheckTrue';
import TodoCheckFalse from './TodoCheckFalse';
import { updateCardTodo } from '../../../../modules/cardTodo';

const CardTodo = () => {
  const todos = useSelector((state) => state.cardTodo.todos);

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
          return (
            <div style={{ display: 'flex' }}>
              <div style={{ padding: 5 }}>
                {todo.todo_isdone === '1' ? (
                  //1이면 check됨

                  <TodoCheckTrue todo={todo} />
                ) : (
                  <TodoCheckFalse todo={todo} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardTodo;
