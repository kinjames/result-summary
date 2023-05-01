import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Container = () => {
  return (
    <section className="container">
      <CardOne />
      <CardTwo />
    </section>
  );
};

const CardOne = () => {
  return (
    <div className="card-one">
      <p>Your Result</p>
      <div className="score">
        <h1>76</h1>
        <p className="total">of 100</p>
      </div>
      <h2>Great</h2>
      <p className="text">
        You scored higher than 65% of the people who have taken these tests
      </p>
    </div>
  );
};

const CardTwo = () => {
  return (
    <div className="cardTwo">
      <Items course={"Reaction"} />
      <Items course={"Memory"} />
      <Items course={"Verbal"} />
      <Items course={"Visual"} />
    </div>
  );
};

const Items = (props) => {
  return (
    <div className="items">
      <div className="image-text">
        <img src={props.image} alt={props.alternate} />
        <span className="course">{props.course}</span>
      </div>
      <div className="scores">
        <span className="mainScore">{props.score}</span>
        <span className="percentile">{props.percent}</span>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
