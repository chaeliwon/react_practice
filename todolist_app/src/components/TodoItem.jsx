import React, { useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { checkChangeTodo, deleteTodo, textChangeTodo } from '../redux/reducers/TodoSlice';

const TodoItem = ({ todo }) => {

  // true : 쓰기상태 | false : 읽기상태
  const [edit, setEdit] = useState(false);

  // 사용자가 입력한 텍스트를 보관하는 state
  // 초깃값 : 기존 등록한 내용 -> todo.text
  const [newText, setNewText] = useState(todo.text);

  const [check, setCheck] = useState(todo.complete);

  const dispatch = useDispatch();

  const handleEdit = () => {
    setEdit(true)
  }

  const handleSubmit = () => {
    // store내 todoList 아이템 내용을 변경하기 위해서
    // 구분할 수 있는 id와 변경내용인 text를 객체형태로 전달
    dispatch(textChangeTodo({ id: todo.id, text: newText }))
    setEdit(false)
  }

  const handleChange = () => {
    dispatch(checkChangeTodo({ id: todo.id }))
    setCheck(false)
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: todo.id }))
  }

  return (
    <li className='todo-item'>
      {check ?
        <FaCheckCircle className='todo-item-checkbox' onClick={handleChange} />
        :
        <FaRegCircle className='todo-item-checkbox' style={{ color: 'lightgrey' }} onClick={handleChange} />
      }



      {edit ?
        <div>
          <input
            type='text'
            className='todo-item-edit-input'
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button className='todo-item-submit-btn' onClick={handleSubmit}>👍</button>
        </div>
        :
        <div>
          <span className={`todo-item-content ${todo.complete ? 'todo-item-content-checked' : ''}`}>{todo.text}</span>
          {/* {!todo.complete && <button className='todo-item-edit-btn' onClick={handleEdit}>✍</button>} */}
          {todo.complete ? '' : <button className='todo-item-edit-btn' onClick={handleEdit}>✍</button>}
        </div>}
      <button className='todo-item-delete-btn' onClick={handleDelete}>❌</button>
    </li>
  )
}

export default TodoItem