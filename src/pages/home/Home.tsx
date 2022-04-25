import { useState } from 'react'
import './Home.css'

interface Todo {
  id: number
  title: string
  completed: boolean
}

export default function Home() {
  const initTodos: Todo[] = [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: false },
  ]
  const [todos, setTodos] = useState(initTodos)
  const [newTodo, setNewTodo] = useState('')

  function switchTodoState(id: number) {
    setTodos(todos.map((todo) => {
      if (todo.id === id)
        todo.completed = !todo.completed
      return todo
    }))
  }
  function addTodo() {
    if (newTodo.length > 0) {
      setTodos([...todos, { id: todos.length + 1, title: newTodo, completed: false }])
      setNewTodo('')
    }
    else {
      console.error('Please enter a todo')
    }
  }
  return (
    <div className="home-root">
      <div className="todo-list">
        {todos.map(todo => (
          <div className="todo-item" key={todo.id}>
            <span className={`todo-title${todo.completed ? ' is-completed' : ''}`} >
              {(todo.completed ? '✅' : '❎') + todo.title}
            </span>
            <button
              className="btn-red"
              style={{ width: '120px' }}
              onClick={() => switchTodoState(todo.id)}
            >{todo.completed ? 'Discomplete' : 'Complete'}</button>
          </div>
        ))}
      </div>
      <div className="add-todo">
        <input
          value={newTodo}
          className="add-input"
          onChange={e => setNewTodo(e.target.value)}
        />
        <button
          className="btn"
          style={{ width: '120px', marginRight: '20px' }}
          onClick={addTodo}
        >Add Todo</button>
      </div>
    </div>
  )
}
