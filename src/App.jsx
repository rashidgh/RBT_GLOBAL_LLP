import React from 'react'
import './App.css'
import Dasboard from './pages/Dasboard'
import ContextApi from './api/ContextApi'

function App() {

  return (
    <div className=''>
      <ContextApi>
        <Dasboard/>
      </ContextApi>
    </div>
  )
}

export default App
