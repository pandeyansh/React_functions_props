import React from 'react'
const ToDoList = (arr) => {
  return (
    <div>
        <h3>Tasks</h3>
        <ul>
            <li>{arr.todos[0][1]}</li>
            <li>{arr.todos[1][1]}</li>
            <li>{arr.todos[2][1]}</li>
            <li>{arr.todos[3][1]}</li>
        </ul>
    </div>
  )
}
export default ToDoList