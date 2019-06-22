import React from "react";
import CarGauge from "./CarGauge";
import NosGauge from "./NosGauge";
import Minimap from "./Minimap";

const displayQuote = props => {
  let {
    quote,
    userInput,
    onUserInputChange,
    onFinish,
    second,
    char,
    word
  } = props;
  const splitQuoteIntoChars = quote.split("");
  if (onFinish) {
    return (
      <div className="DisplayQuote-container">
        <div className="DisplayQuote-previewQuote">
          <h1 className="DisplayQuote-h1">Congrats mffferrr</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="UI-container">
        <CarGauge second={second} char={char} word={word} />
        <div className="DisplayQuote-container">
          <Minimap />
          <div className="DisplayQuote-previewQuote">
            {splitQuoteIntoChars.map((char, index) => {
              let color;
              if (index < userInput.length) {
                color = char === userInput[index] ? "#04ad67" : "#ff373e";
              }

              return (
                <span key={index} style={{ background: color }}>
                  {char}
                </span>
              );
            })}
          </div>
          <input
            id="DisplayQuote-inputWord"
            onChange={onUserInputChange}
            autofocus="true"
            autoComplete="off"
          />
        </div>
        <NosGauge />
      </div>
    );
  }
};

export default displayQuote;
