import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faCommenting } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Container = () => {
  return (
    <section className="container">
      <CardOne />
      <CardTwo />
    </section>
  );
};

// const comm = <FontAwesomeIcon icon="fas fa-comment-minus" />;

const CardOne = () => {
  return (
    <div className="card-one">
      <p className="header">Your Result</p>
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
      <p className="header">Summary</p>
      <Items
        course={"Reaction"}
        textColor={"hsl(0, 100%, 67%)"}
        bgColor={"hsla(0, 100%, 96%)"}
        score={80}
        percentile={100}
        icon={<FontAwesomeIcon icon={faBolt} />}
      />
      <Items
        course={"Memory"}
        textColor={"hsl(39, 100%, 56%)"}
        bgColor={"hsl(39, 100%, 90%)"}
        score={92}
        percentile={100}
        icon={<FontAwesomeIcon icon={faBrain} />}
      />
      <Items
        course={"Verbal"}
        textColor={"hsl(166, 100%, 37%)"}
        bgColor={"hsl(166, 100%, 96%)"}
        score={61}
        percentile={100}
        icon={<FontAwesomeIcon icon={faCommenting} />}
      />
      <Items
        course={"Visual"}
        textColor={"hsl(234, 85%, 45%)"}
        bgColor={"hsl(234, 85%, 95%)"}
        score={72}
        percentile={100}
        icon={<FontAwesomeIcon icon={faEye} />}
      />
      <button className="btn">Continue</button>
    </div>
  );
};

const Items = (props) => {
  const { course, score, percentile, icon } = props;
  return (
    <div
      className="items"
      style={{ backgroundColor: props.bgColor, color: props.textColor }}
    >
      <div className="image-text">
        <span>{icon}</span>
        <span className="course">{course}</span>
      </div>
      <div className="scores">
        <span className="mainScore">{score} /</span>
        <span className="percentile"> {percentile}</span>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
