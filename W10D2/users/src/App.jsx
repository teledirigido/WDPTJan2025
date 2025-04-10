import './index.css';
import { Header } from './components/Header'
import { Text } from './components/Text'
import { UserProvider } from './context/User'

function App() {

  return (
    <>
      <UserProvider>
        <Header />
      </UserProvider>
      <Text />
    </>
  )
}

export default App
