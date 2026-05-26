import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My Project</h1>
      <div className="button-container">
        <Link to="/calculator">
          <button className="calc-btn">📱 Calculator</button>
        </Link>
        <Link to="/calendar">
          <button className="calendar-btn">📅 Calendar</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;