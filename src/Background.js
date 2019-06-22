import React from "react";
import Car1 from "./Car1";
import Car2 from "./Car2";
import Car3 from "./Car3";
import bg from "./images/forest-bg3.jpg";
import finishLineBG from "./images/finish-line.jpg";

let finishLineStyle = {
  backgroundImage: `url(${finishLineBG})`,
  transition: "opacity 1s linear",
  animation: "fade 1s linear"
};

const Background = props => {
  const { position, onFinish } = props;
  if (onFinish) {
    return (
      <div className="Background-img" style={finishLineStyle}>
        <Car1 onFinish={onFinish} />
      </div>
    );
  } else {
    return (
      <div className="Background-img" style={{ backgroundImage: `url(${bg})` }}>
        <div className="Background-border">
          <Car1 position={position} />
          <Car2 />
          <Car3 />
        </div>
      </div>
    );
  }
};

export default Background;
