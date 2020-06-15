import React from "react";

function LocalWeather(props) {
  return (
    <div className="container">
        <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadweather}>
        <div className="row">
          <div className="column">
            <input
              type="text"
              name="city"
              autoComplete="off"
              placeholder="City"
              className="form-control"
            />
          </div>
          <div className="column">
            <input
              type="text"
              name="country"
              placeholder="Country"
              autoComplete="off"
              className="form-control"
            />
          </div>
          <div className="column">
            <button className="button btn-warning">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
}

function error() {
    return(
        <div className="alert" role="alert">
            Please Enter City and Country
        </div>
    )
}

export default LocalWeather;
