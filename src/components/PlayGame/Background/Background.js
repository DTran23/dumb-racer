import React from "react";
import Car1 from "../Cars/Car1";
// import Car2 from "../Cars/Car2";
// import Car3 from "../Cars/Car3";
import gameStartBG from "../../../images/forest-bg3.jpg";
import finishLineBG from "../../../images/finish-line.jpg";
import "./Background.scss";

const bgStart = {
  backgroundImage: `url(${gameStartBG})`
};

const bgFinish = {
  backgroundImage: `url(${finishLineBG})`,
  transition: "opacity 1s linear",
  animation: "fade 1s linear"
};

const Background = ({ carPositioning, onFinish }) => {
  return (
    <div className="Background-img" style={onFinish ? bgFinish : bgStart}>
      <Car1 onFinish={onFinish} carPositioning={carPositioning} />
    </div>
  );
};

export default Background;
