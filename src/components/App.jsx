import { useState } from 'react'
import '../styles/App.css'
import Navbar from './Navbar'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Card />
    </div>
  )
}

export default App
