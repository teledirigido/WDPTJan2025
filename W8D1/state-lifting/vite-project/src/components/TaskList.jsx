import { TaskItem } from "./TaskItem"

export function TaskList({ tasks, toggleTask }) {
  return (
    <>
      { tasks.map ( item => {
        return (
          <TaskItem key={item.id} task={item} toggleTask={toggleTask} />
        )
      }) }
    </>
  )
}