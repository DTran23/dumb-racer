import React from "react";
import car1 from "./images/really-black-car.png";

const Car1 = props => {
  const { position, onFinish } = props;

  return (
    <div
      className={`Car${onFinish ? "-finish" : "1-img"}`}
      style={{ left: position }}
    >
      <img src={car1} />
    </div>
  );
};

export default Car1;
