import React from 'react';

const TypingSpeed = props => {
// const {second, char} = props;

if (props.second !== 0 && props.char !== 0){
  const wpm = (props.char/5) / (props.second/60)
  return (
    <div className="TypingSpeed-wpm">{Math.round(wpm)} wpm</div>
  )
}
return null;
}

export default TypingSpeed;