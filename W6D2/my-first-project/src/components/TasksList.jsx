import { TaskItem } from "./TaskItem"

export function TasksList({ list }) {

  return (
     <ul className="tasks">
    {list.map( (item) => {
      return (
        <TaskItem key={item.id} task={item} />
      )
    })}
    </ul>
  )
}