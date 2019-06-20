import React from "react";

const displayQuote = props => {
  let { quote, userInput, onUserInputChange, onFinish } = props;
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
          <input
            id="DisplayQuote-inputWord"
            onChange={onUserInputChange}
            autoFocus={true}
            autoComplete="off"
          />
        </div>
      </div>
    );
  }
};

export default displayQuote;
