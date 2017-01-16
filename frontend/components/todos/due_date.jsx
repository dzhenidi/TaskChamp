import React from 'react';

const DueDate = ({dueDate, format}) => {
  if (dueDate.length === 0 || dueDate[0] === "Invalid date") {
    return (<div></div>);
  } else {
    // const mon = moment(dueDate).format("MMM");
    // const day = moment(dueDate).format("DD");
    // dueDate = [mon, day];
    const month = dueDate[0];
    const day = dueDate[1];

    return (
      <span className={ "date " + format }>
        <div className="date-header">{month}</div>
        <div className="date-day">{day}</div>
        { dueDate.length === 3 ? <div className="date-weekday">{dueDate[2]}</div> : null}
      </span>
    );
  }
};
export default DueDate;
