import React from "react";

const TypingSpeed = props => {
  const { second, char } = props;

  //if user starts typing display wpm, else display nothing
  if (second !== 0 && char !== 0) {
    const wpm = char / 5 / (second / 60);
    return (
      <div className="TypingSpeed-wpm">
        <div className="TypingSpeed-num">{Math.round(wpm)}</div>
        <div className="TypingSpeed-num-sm">wpm</div>
      </div>
    );
  }
  return (
    <div className="TypingSpeed-wpm">
      <div className="TypingSpeed-num">0</div>
      <div className="TypingSpeed-num-sm">wpm</div>
    </div>
  );
};

export default TypingSpeed;
