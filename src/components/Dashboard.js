import React from "react";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      date: new Date(),
    };
  }

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
      <>
        <div className="greeting">
          <h1>{this.props.greeting}</h1>
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
      </>
    );
  }
}

export default Dashboard;
