import React from "react";
import {startOfWeek, addDays, getWeeksInMonth} from 'date-fns';
import Week from "../Week";

const Month = (props) => {
  return (
    <div>
      <Week startingDate = {addDays(props.currentDay, -14)}/>
      <Week startingDate = {addDays(props.currentDay, -7)}/>
      <Week startingDate = {props.currentDay}/>
      <Week startingDate = {addDays(props.currentDay, 7)}/>
      <Week startingDate = {addDays(props.currentDay, 14)}/>
      <Week startingDate = {addDays(props.currentDay, 21)}/>
    </div>
  )
}

export default Month;