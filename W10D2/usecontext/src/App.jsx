import { useState } from 'react'
import { useTheme } from './context/Theme'

function App() {
  
  const { theme, toggleTheme } = useTheme();

  return (
    <main className={`app app-${theme}`}>
      <h1>My first useContext React App...</h1>
      <h2>My current theme is {theme}</h2>
      <Button />
    </main>
  )
}

export default App
