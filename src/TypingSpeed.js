import React from 'react';

const TypingSpeed = (props) => {
const {second, char, word} = props;

//if user starts typing display wpm, else display nothing
if (second !== 0 && char !== 0){
  const wpm = (char/word.length) / (second/60)
  return (
    <div className="TypingSpeed-wpm">{Math.round(wpm)} wpm</div>
  )
}
return null;
}

export default TypingSpeed;