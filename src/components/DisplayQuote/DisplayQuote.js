import React from "react";
import DisplayQuoteInput from "../DisplayQuote/DisplayQuoteInput";
import DisplayQuoteArea from "../DisplayQuote/DisplayQuoteArea";
import CarWPMGauge from "../CarWPMGauge/CarWPMGauge";
import NosGauge from "../NosGauge/NosGauge";
import Minimap from "../Minimap/Minimap";

const displayQuote = props => {
  const {
    fullPhrase,
    userInput,
    onUserInputChange,
    onFinish,
    second,
    char
  } = props;

  return onFinish ? (
    <div className="DisplayQuote-container">
      <div className="DisplayQuote-previewQuote">
        <h1 className="DisplayQuote-h1">Congrats mffferrr</h1>
      </div>
    </div>
  ) : (
    <div className="UI-container">
      <CarWPMGauge second={second} char={char} />
      <div className="DisplayQuote-container">
        <Minimap />
        <DisplayQuoteArea fullPhrase={fullPhrase} userInput={userInput} />
        <DisplayQuoteInput onUserInputChange={onUserInputChange} />
      </div>
      <NosGauge />
    </div>
  );
};

export default displayQuote;
