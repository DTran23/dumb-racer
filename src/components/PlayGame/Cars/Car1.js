import React from "react";
import car1 from "../../../images/gtx.png";
import "./Cars.scss";

const Car = ({ carPositioning, onFinish }) => {
  return (
    <div
      className={`Car${onFinish ? "-finish" : "1-img"}`}
      style={{ left: carPositioning }}
    >
      <img src={car1} />
    </div>
  );
};

export default Car;
