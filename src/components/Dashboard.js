import React from "react";
// import LocalWeather from './LocalWeather';

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
        <div className="container">
          {/* <LocalWeather error={this.props.error} loadweather={this.props.getweather}/> */}
          <div className="cards">
            <h1 className="city">
              {this.props.city}, {this.props.country}
            </h1>
            <h5 className="py-4">
              <i className={`wi ${this.props.weatherIcon} weather-icon`}></i>
            </h5>
            <h1 className="current-temp">{this.props.temp_fahrenheit}&deg;F</h1>
            {minmaxTemp(this.props.temp_min, this.props.temp_max)}

            <h4 className="weather-description">{this.props.description}</h4>
          </div>
        </div>
      </>
    );
  }
}

function minmaxTemp(min, max) {
  return (
    <>
      <div className="high-low">
        <div className="min-max">
          <h3 className="px-4">{min}&deg;F</h3>
          <h3 className="px-5">Low</h3>
        </div>
        <div className="min-max">
          <h3 className="px-4">{max}&deg;F</h3>
          <h3 className="px-5">High</h3>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
