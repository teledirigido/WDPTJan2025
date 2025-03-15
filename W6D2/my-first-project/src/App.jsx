import './App.css'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter';
import { TasksList } from './components/TasksList';

function App() {

  const userName = "Miguel";
  const todayDate = "15/03/2025";
  const tasks = [
    {
      id: 100,
      task: "Water the plants"
    },
    {
      id: 101,
      task: "Do the compost"
    },
    {
      id: 110,
      task: "Feed the kefir"
    },
    {
      id: 210,
      task: "Prepare Dinner"
    }
  ];

  return (
    <>
      <SiteHeader user={userName} />
      <TasksList list={tasks} />
      <SiteFooter date={todayDate} />
    </>
  )
}

export default App
