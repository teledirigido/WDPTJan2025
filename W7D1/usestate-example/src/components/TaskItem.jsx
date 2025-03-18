export function TaskItem({ item }) {
  return (
    <li key={item.id} className={ item.isCompleted ? 'completed' : 'not-completed' }>
      {item.task}
      { item.isCompleted ? '✅' : '⏳' }
    </li>
  )
}