import React from "react";
import TypingSpeed from "./TypingSpeed";

const displayQuote = props => {
  let { quote, userInput, onUserInputChange, onFinish, onFinishButton } = props;
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
      <div className="DisplayQuote-container">
        <div className="DisplayQuote-previewQuote">
          {splitQuoteIntoChars.map((char, index) => {
            let color;
            if (index < userInput.length) {
              color = char === userInput[index] ? "#04ad67" : "#f6454b";
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
          autoFocus={true}
          autoComplete="off"
        />
      </div>
    );
  }
};

export default displayQuote;
