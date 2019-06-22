import React from "react";
import TypingSpeed from "../TypingSpeed/TypingSpeed";

const CarGauge = props => {
  const { second, char, word } = props;
  return (
    <div className="CarGauge-border">
      <div className="CarGauge">
        <TypingSpeed second={second} char={char} word={word} />
      </div>
    </div>
  );
};

export default CarGauge;
