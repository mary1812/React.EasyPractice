import {addDays, format, startOfWeek} from 'date-fns';

function Week( { startingDate } ) {
  const startingDay= startOfWeek(startingDate);
  const daysArr = new Array(7).fill(null).map((_, index) => {
    return <div style={{margin:"10px"}}>
      {format(addDays(startingDay, index), 'd')}</div>;
  });
  return <div style={{display:"flex"}}>{daysArr}</div>;
}

export default Week;