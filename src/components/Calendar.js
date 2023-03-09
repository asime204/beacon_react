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

    // Create an array of objects representing each day in the month
    const days = [];
    for (let i = 1; i <= numDays; i++) {
      let paycheckDay = false;
      let billDay = false;
      // Check if a paycheck falls on this day
      this.props.paychecks.forEach((paycheck) => {
        const parts = paycheck.trans_date.split("-");
        const paycheckDate = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
        if (
          paycheckDate.getUTCDate() === i &&
          paycheckDate.getUTCMonth() === month &&
          paycheckDate.getUTCFullYear() === year
        ) {
          paycheckDay = true;
        }
      });
      // Check if a bill is due on this day
      this.props.bills.forEach((bill) => {
        const parts = bill.trans_date.split("-");
        const billDate = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
        if (
          billDate.getUTCDate() === i &&
          billDate.getUTCMonth() === month &&
          billDate.getUTCFullYear() === year
        ) {
          billDay = true;
        }
      });
      days.push({ number: i, paycheckDay, billDay });
    }

    const fullDate = today.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    return (
      <div className="calendar">
        <h2>{fullDate}</h2>
        <div className="grid">
          {Array(firstDay.getDay())
            .fill(null)
            .map((_, i) => (
              <div key={`empty-${i}`} className="cell empty" />
            ))}
          {days.map((day) => (
            <div
              key={`day-${day.number}`}
              className={`cell ${day.paycheckDay ? "green" : ""} ${day.billDay ? "red" : ""}`}
            >
              <div>{day.number}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
