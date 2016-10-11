import React from 'react';

const DueDate = ({dueDate}) => {

  if (dueDate.length === 0) {
    return (<div></div>);
  } else {

    let month = dueDate[0];
    let day = dueDate[1];

    return (
      <span className="date short">
        <div className="date-header">{month}</div>
        <div className="date-day">{day}</div>
      </span>
    );
  };
}
export default DueDate;
