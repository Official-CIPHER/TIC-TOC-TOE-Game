import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './TicTocToeGame/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>

      <Board />
      </div>
    </>
  )
}

export default App
