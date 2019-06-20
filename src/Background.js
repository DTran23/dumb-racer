import React from "react";
import Car1 from "./Car1";
import Car2 from "./Car2";
import Car3 from "./Car3";
import bg from "./images/forest-bg.jpg";
import finishLineBG from "./images/finish-line.jpg";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    left: -300px;
  }
  to {
    left: 300px;
  }
`;

let finishLineStyle = {
  backgroundImage: `url(${finishLineBG})`,
  transition: "opacity 1s linear",
  animation: "fade 1s linear"
};

// const animation = props =>
//   css`
//     ${fadeIn};
//   `;

let carFinishStyle = styled.div`
  animation: ${fadeIn} 1s linear infinite;
`;

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
