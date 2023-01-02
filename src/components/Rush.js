import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import "../style/rush.css";


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function Rush() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggle(id)
  {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e)
  {
    const name = todoNameRef.current.value
    if(name === "") return
    setTodos(prevTodos => {
      return [...prevTodos, {id: Math.random() * 10000000, name: name, complete: false}]
    })
    todoNameRef.current.value = null;
  }
  return (
    <div className="rush">
   
      <TodoList todos={todos}/>
      <input  ref={todoNameRef} type="text"/>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div> 0 left todo </div>

    </div>
  );
}


export default Rush;
