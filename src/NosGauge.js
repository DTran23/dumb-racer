import React from "react";

const NosGauge = props => {
  const { second, char, word } = props;
  return (
    <div className="NosGauge-border">
      <div className="NosGauge">
        <div className="NosGauge-wpm">
          <div className="NosGauge-num">2</div>
          <div className="NosGauge-num-sm">Position</div>
        </div>
      </div>
    </div>
  );
};

export default NosGauge;
