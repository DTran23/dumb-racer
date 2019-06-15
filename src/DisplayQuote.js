import React from "react";

const displayQuote = props => {
  let { quote, userInput, onUserInputChange } = props;
  const splitQuote = quote.split("");

  return (
    <div className="DisplayQuote-container">
      <div className="DisplayQuote-previewQuote">
        {splitQuote.map((char, index) => {
          let color;
          let message;
          if (index < userInput.length) {
            color = char === userInput[index] ? "green" : "red";
            message = color === "red" ? "fuck you Justin you suck mffeerr" : "";
          }

          return (
            <span key={index} style={{ backgroundColor: color }}>
              {char}
              <p className="fu">{message}</p>
            </span>
          );
        })}
      </div>
      <input
        id="DisplayQuote-inputWord"
        onChange={onUserInputChange}
        placeholder={props.word}
      />
    </div>
  );
};

export default displayQuote;
