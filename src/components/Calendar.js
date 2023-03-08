import { Component } from "react";

export default class Calendar extends Component {
  render() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    // Get the first day of the month
    const firstDay = new Date(year, month, 1);

    // Get the number of days in the month
    const lastDay = new Date(year, month + 1, 0);
    const numDays = lastDay.getDate();

    // Create an array of the days in the month
    const days = [];
    for (let i = 1; i <= numDays; i++) {
      days.push(i);
    }

    const fullDate = today.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return (
      <div className="calendar">
        <h2>{fullDate}</h2>
        <div className="grid">
          {Array(firstDay.getDay() - 1)
            .fill(null)
            .map((_, i) => (
              <div key={`empty-${i}`} className="cell empty" />
            ))}
          {days.map((day) => (
            <div key={`day-${day}`} className="cell">
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
