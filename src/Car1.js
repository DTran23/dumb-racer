import React from "react";
import car1 from "./images/newcar_sm.png";

const Car1 = props => {
  const { position, onFinish } = props;

  if (onFinish) {
    return (
      <div className="Car-finish">
        <img src={car1} />
      </div>
    );
  }
  return (
    <div className="Car1-img" style={{ left: position }}>
      <img src={car1} />
    </div>
  );
};

export default Car1;
