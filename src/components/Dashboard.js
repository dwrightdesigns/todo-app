import React from "react";

function timeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  let timeofDay;

  if (hours < 12) {
    timeofDay = "Good Morning";
    document.body.background = "./img/morning.jpg";
  } else if (hours >= 12 && hours < 17) {
    timeofDay = "Good Afternoon";
    document.body.background = "./img/afternoon.jpg";
  } else {
    timeofDay = "Good Evening";
    document.body.background = "./img/evening.jpg";
  }

  return timeofDay;
}

class Dashboard extends React.Component {
  state = {
    time: new Date(),
    date: new Date(),
  };

  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return (
      <div className="greeting">
        <h1>{timeOfDay()}</h1>
        <h2>The time is {this.state.time.toLocaleTimeString()}</h2>
        <h3>
          The date is{" "}
          {this.state.date.toLocaleDateString(undefined, {
            year: `numeric`,
            month: `long`,
            day: `numeric`,
          })}
        </h3>
      </div>
    );
  }
}

export default Dashboard;
