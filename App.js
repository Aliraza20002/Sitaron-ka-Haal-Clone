import React from 'react'
import Navebar from './components/Navebar'
import "./style/App.css"
import Banner from './components/Banner'

function App() {
  return (
    <div className='MainDiv'>
    <Navebar/>
    <Banner/>
    </div>

  )
}

export default App