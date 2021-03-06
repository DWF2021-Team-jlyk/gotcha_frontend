import apiAxios from './apiAxios';

export const postTodo = (card_id) =>
  apiAxios('/cardDetail/todo', { card_id: card_id });

export const addTodo = ({
  todo_name,
  card_id,
  todo_start_date,
  todo_end_date,
  todo_isdone,
}) =>
  apiAxios('/cardDetail/todo/insert', {
    todo_name: todo_name,
    card_id: card_id,
    todo_start_date: todo_start_date,
    todo_end_date: todo_end_date,
    todo_isdone: todo_isdone,
  });

export const updateTodo = ({
  todo_id,
  todo_name,
  card_id,
  todo_start_date,
  todo_end_date,
  todo_isdone,
}) =>
  apiAxios('/cardDetail/todo/update', {
    todo_id: todo_id,
    todo_name: todo_name,
    card_id: card_id,
    todo_start_date: todo_start_date,
    todo_end_date: todo_end_date,
    todo_isdone: todo_isdone,
  });

export const deleteTodo = ({ todo_id }) =>
  apiAxios('/cardDetail/todo/delete', {
    todo_id: todo_id,
  });
