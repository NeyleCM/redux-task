import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from "../redux/todoSlice";

const App = () => {
  const [input, setInput ] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)

  const handleAddTask = () => {
    if(input.trim()) {
      dispatch(addTask({
        id: Math.random(),
        text: input
      }))
      setInput('')
    }
  }

  const handleRemoveTask = (id) => {
    dispatch (removeTask(id))
  }
  return (
    <>
    <form action="">
      <input 
      type="text" 
      placeholder="Introduce la tarea"
      value={input}
      onChange={e => setInput(e.target.value)}
      />
    </form>
    <button onClick={handleAddTask}>
    Añadir Tarea
    </button>
    <ul>
      {todos.map(task => <li key={task.id}>
        {task.text} 
        <button onClick={() => handleRemoveTask(task.id)}> 
          Eliminar Tarea
        </button>
      </li>
    )}
    </ul>
    </>
  );
};

export default App;
