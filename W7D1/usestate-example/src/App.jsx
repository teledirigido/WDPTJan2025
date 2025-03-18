import { useState } from 'react'
import { ToggleBalance } from './components/ToggleBalance'
import { NothingToDo } from './components/NothingToDo';

import { TaskList } from './components/TaskList';

function App() {

  const list = [
    { id: 1, task: 'Plant tomatoes', isCompleted: true },
    { id: 2, task: 'Get calendulas', isCompleted: false }
  ];

  const [myTasks, setMyTasks] = useState(list);

  const deleteItem = () => {
    const copyList = [...myTasks];
    copyList.pop();
    setMyTasks(copyList);
  }

  const addItem = () => {
    const copyList = [...myTasks];
    const newItem = {
      id: 3,
      task: 'Clean the pond',
      isCompleted: false
    }
    copyList.push(newItem)
    setMyTasks(copyList);
  }

  return (
    <>
      <h1>My To do list {myTasks.length}:</h1>
      
      <TaskList list={myTasks} />

      <button onClick={deleteItem}>Remove</button>
      <button onClick={addItem}>Add</button>

      {/* if you have 3 tasks display a message */}
      { myTasks.length === 3 ? 
        <p>Wow, you are busy 😱</p> : '' }

      { !myTasks.length ? '' : <p>Oh, you have free time, enjoy the garden 🌹</p> }


      { !myTasks.length ? 
        <NothingToDo /> : ''
      }


    </>
  )
  
}

export default App
