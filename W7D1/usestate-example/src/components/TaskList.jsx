import { TaskItem } from './TaskItem';

export function TaskList({ list }) {
  return (
    <ol>
      {list.map( (item) => {
        return (
          <TaskItem item={item} />
        )
      })}
    </ol>
  )
}