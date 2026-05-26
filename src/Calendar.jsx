import React, { useState } from 'react'; 

function Calendar ({ onBack }){

    const today = new Date();
 
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December' ];

    

    const years = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 
        2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

    const days = [];
     for (let i = 1; i <= 31; i++) {
          days.push(i);  
        }
   
    

    const [month, setMonth] = useState(months[today.getMonth()]);
    const [day, setDay] = useState(today.getDate());
    const [year, setYear] = useState(today.getFullYear());
    

  return (

    <div className="calendar-main">
        <button onClick={onBack}>
      Back to Home
    </button>
        <h1>Calendar App</h1>

        <label className="year-select">Select a year: </label>
         <select value={year}onChange={(e) => setYear(e.target.value)}>
            {years.map(year => (
                <option key={year} value={year}>
                    {year}
                </option>
            ))
            }
         </select>

         <label className="month-select">Select a month: </label>
         <select value={month}onChange={(e) => setMonth(e.target.value)}>
            {months.map(month => (
               <option key={month} value={month}>
                {month}
               </option>
            ))
            } 
         </select>
         

         <label className="day-select">Select a day: </label>
         <select value={day}onChange={(e) => setDay(e.target.value)}>
            {days.map(day => (
               <option key={day} value={day}>
                 {day}
                </option>
            ))
            }
         </select>
         

        
         <h2> Month: {month}</h2>
         <h2>Day: {day}</h2>
         <h2>Year: {year}</h2>
        
    </div>
  );


};
export default Calendar;
