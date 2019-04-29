import React from 'react'
import Pokercard from './Pokercard'
import './App.css'

function App() {
  return (
    <div className="App">
      <Pokercard id={4} name="Charmander" type="fire" exp={62} />
    </div>
  )
}

export default App

/*
id
name
type
exp
 */
