import React, { useEffect, useState } from "react";
import { format, add, setMilliseconds } from "date-fns";

const StopWatch = () => {
  const [time, setTime] = useState(new Date(0,0,0,0,0,0,0,0));
  const [isOn, setIsOn] = useState(false);
  
  useEffect(() => {
    if (isOn) {
     const id = setInterval(() => {
        setTime(prevTime => add(prevTime, {seconds: 1}));
     }, 1000);
      
      return function () {
        clearInterval(id);
      }
    }
  }, [isOn]);

  const resetHandler = () => {
    setMilliseconds(false);
    setTime(new Date(0,0,0,0,0,0,0,0))
  }
  return (
    <div>
      <h1>{format(time, 'HH:mm:ss')}</h1>
      <button onClick={()=> setIsOn(true) }>Start</button>
      <button onClick={()=> setIsOn(false) }>Pause</button>
      <button onClick={resetHandler}>Clear</button>
    </div>
  );
};

export default StopWatch;
