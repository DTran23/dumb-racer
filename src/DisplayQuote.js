import React from "react";

const displayQuote = props => {
  let { quote, userInput, onUserInputChange, onFinish } = props;
  const splitQuoteIntoChars = quote.split("");
  if (onFinish) {
    return (
      <div className="DisplayQuote-container">
        <div className="DisplayQuote-previewQuote" >
          <h1 className="DisplayQuote-h1">Congrats mffferrr</h1>
        </div>
      </div>
    )
  } else {

  return (
    <div className="DisplayQuote-container">
      <div className="DisplayQuote-previewQuote" >
        {splitQuoteIntoChars.map((char, index) => {
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
        readOnly={props.onFinish}
      />
    </div>
  );
  }
};

export default displayQuote;
