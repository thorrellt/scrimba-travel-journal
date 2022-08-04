import { useState } from 'react'
import '../styles/App.css'
import Navbar from './Navbar'
import Card from './Card'
import cardData from '../data.js'

function App() {
  const cards = cardData.map(card =>{
    return <Card
      {...card}
      />
  })

  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  )
}

export default App
