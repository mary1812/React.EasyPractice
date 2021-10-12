import React, {useState} from "react";
import SelectedDay from "./SelectedDay"
import CalendarBody from "./CalendarBody"
const Calendar = () => {
const [currentDay, setCurrentDay] = useState(new Date())
  return (
    <article>
      <SelectedDay currentDay={currentDay}/>
      <CalendarBody currentDay={currentDay} setCurrentDay={setCurrentDay}/>
    </article>
  );
};

export default Calendar;
