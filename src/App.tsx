import React, { useEffect, useMemo, useState } from "react";

import "./App.css";

const INTERVAL_REFRESH_MS = 10;

const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysOfWeek: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const customFormat = (date: Date): string => {
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const dayOfWeek = daysOfWeek[date.getDay()];
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${dayOfWeek}, ${month} ${day}, ${year} at ${hour}:${minute}:${second} `;
};

function App() {
  const [date, setDate] = useState(new Date());
  const localString = customFormat(date);
  const refreshClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(refreshClock, INTERVAL_REFRESH_MS);
    return function cleanup() {
      clearInterval(intervalId);
    };
  });

  const memorizedDate = useMemo(() => {
    return localString;
  }, [localString]);

  return (
    <div className="App">
      <header className="App-header">{memorizedDate}</header>
    </div>
  );
}

export default App;
