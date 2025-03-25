export function TaskItem({ task, toggleTask }) {

  return (
    <div className="task-item">
      {task.id} - { task.title}
      { !task.isDone ? 
        <button onClick={ () => { toggleTask(task.id) }}>Set as done</button> :
        <span>
          ✅
          &nbsp;<span onClick={ () => { toggleTask(task.id) } }>undo</span>
        </span>
      }
    </div>
  )
}