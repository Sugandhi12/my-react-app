import React, { useState } from "react";

function Calendar({ onBack }) {
  const today = new Date();

  const months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const currentYear = today.getFullYear();
  const years = [];

  for (let i = currentYear - 20; i <= currentYear + 10; i++) {
    years.push(i);
  }

  const [month, setMonth] = useState(months[today.getMonth()]);
  const [day, setDay] = useState(today.getDate());
  const [year, setYear] = useState(today.getFullYear());

  const monthIndex = months.indexOf(month);
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const totalDays = new Date(year, monthIndex + 1, 0).getDate();

  const days = [];

  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }

  const emptyBoxes = Array(firstDay).fill(null);

  return (
    <div className="calendar-main">
      <button className="homebtn m-2 p-2" onClick={onBack}>Back to Home</button>
      
      <div className="d-flex">
      <label className="year-select">Select a year: </label>
      <select value={year} onChange={(e) => setYear(e.target.value)}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <label className="month-select">Select a month: </label>
      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      <label className="day-select">Select a day: </label>
      <select value={day} onChange={(e) => setDay(e.target.value)}>
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      </div>

      <div className="week-header">
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="calendar-grid">
        {emptyBoxes.map((box, index) => (
          <div key={index}></div>
        ))}

        {days.map((date) => (
          <div key={date}  className={date == day ? "active-day" : "day-box"}>
            {date}
          </div>
        ))}
      </div>

    <div className="d-flex">
        <span> Month: {month}</span>
        <span> Day: {day}</span>
        <span>Year: {year}</span>
      </div>

    </div>
  );
}
export default Calendar;
