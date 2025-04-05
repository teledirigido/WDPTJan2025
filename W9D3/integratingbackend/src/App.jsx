import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { Route, Router, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Projects } from './pages/Projects'
import { SingleProject } from './pages/SingleProject'
import { NewProject } from './pages/NewProject'
import { EditSingleProject } from './pages/EditSingleProject'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>My saturday app</h1>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* Add a Project Page */}
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects/create" element={<NewProject />}></Route>

        <Route path="/projects/:projectId" element={<SingleProject />}></Route>
        <Route path="/projects/:projectId/edit" element={<EditSingleProject />}></Route>
      </Routes>
    </main>
  )
}

export default App
