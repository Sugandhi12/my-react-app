import React, { useState } from 'react'; 
import './App.css'
import Calculator from './Calculator.jsx'
import Calendar from './Calendar.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    if (currentPage === 'calculator') {
      return <Calculator onBack={() => setCurrentPage('home')} />
    }
    else if (currentPage === 'calendar') {
      return <Calendar onBack={() => setCurrentPage('home')} />
    }
    else {
      return (
        <div className="home-container">
          <div>
            <h1>Hello World</h1>
         </div>
          <h1>Welcome to My Project</h1>
          <div className="d-flex space between button-container">
            <button 
              className="calc-btn" 
              onClick={() => setCurrentPage('calculator')}>
              📱 Calculator
            </button>
            <button 
              className="calendar-btn" 
              onClick={() => setCurrentPage('calendar')} >
              📅 Calendar
            </button>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="App">
      {renderPage()}
    </div>
  )
}


export default App
