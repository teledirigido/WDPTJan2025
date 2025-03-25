import { useState } from 'react'
import { Summary } from './components/Summary'
import data from './data/tasks.json';
import { TaskList } from './components/TaskList';

function App() {

  const [ tasks, setTasks ] = useState(data);
  const [ completedTasks, setCompletedTasks] = useState(0);

  const [ title, setTitle ] = useState("");
  const [ priority, setPriority ] = useState("medium");
  const [ zone, setZone ] = useState(1);


  // create a method to mark the task as done
  // pass the method to TaskList, TaskItem
  // we update completedTask
  const toggleTask = (id) => {
    const taskCopy = [...tasks];
    let completed = 0;
    taskCopy.forEach( taskItem => {
      if ( taskItem.id === id ) {
        taskItem.isDone = !taskItem.isDone;
      }
      if (taskItem.isDone) {
        completed++;
      }
    });
    setCompletedTasks(completed);
    setTasks(taskCopy);
  }

  // Let's create the task
  const addTask = (e) => {
    e.preventDefault();

    const tasksCopy = [...tasks];
    tasksCopy.push({
      'id': 123,
      'title': title,
      'priority': priority,
      'zone': zone,
      'isDone': false
    });
    setTasks(tasksCopy);
  }

  return (
    <>
      {/* 
      1. Create a Summary component
      2. Create a TaskList component
        2.1 Create a TaskItem component
          2.1.1 method toggle the task when done/undone
       */}
       <h1>My Tasks</h1>
       <form onSubmit={addTask}>
        {/* title, priority, zone, */}
        <input type="text" name="title" value={title} onChange={ (e) => { setTitle(e.target.value) } } required />
        <select name="priority" value={priority} onChange={ (e) => { setPriority(e.target.value) }}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input type="number" name="zone" value={zone} onChange={ (e) => { setZone(e.target.value) }} />
        <button type="submit">Add Task</button>
       </form>
       <Summary completed={completedTasks} />
       <TaskList tasks={tasks} toggleTask={toggleTask} />
    </>
  )
}

export default App
