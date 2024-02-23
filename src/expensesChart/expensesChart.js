import "./expensesChart.css";
import logo from "../assets/images/logo.svg";
import { daysData } from "../assets/data";

const Charts = () => {
  const days = daysData;

  const currentDay = new Date().toLocaleString("en-us", { weekday: "short" }).toLowerCase();

  const getChartHeight = (amount) => {
    
    return amount * 2 + "px";
  };

  return (
    <>
      <div class="main">
        <div class="balance">
          <div class="balance-amount">
            <p>My Balance</p>
            <h2>$921.48</h2>
          </div>
          <div class="balance-logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div class="spending">
          <h2>Spending - Last 7 days</h2>
          <div class="charts">
            {days.map((day) => (
              <div class="chart">
                <div class="amount">
                  <p>${day.amount}</p>
                </div>
                <div
                  class={`day-chart ${day.day === currentDay ? "current-day" : ""}`}
                  style={{ height: getChartHeight(day.amount) }}
                ></div>
                <p>{day.day}</p>
              </div>
            ))}
          </div>
          <div class="month-total">
            <div class="month-amount">
              <p>Total this month</p>
              <h1>$478.33</h1>
            </div>
            <div class="last-month">
              <h4>+2.4%</h4>
              <p>from last month</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts;
