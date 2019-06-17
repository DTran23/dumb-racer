import React from 'react';

const TypingSpeed = (props) => {
const {second, char, word} = props;

//if user starts typing display wpm, else display nothing
if (second !== 0 && char !== 0){
  const wpm = (char/5) / (second/60)
  return (
    <div className="TypingSpeed-wpm">
      <span className="TypingSpeed-num">{Math.round(wpm)}</span> wpm</div>
  )
}
return null;
}

export default TypingSpeed;