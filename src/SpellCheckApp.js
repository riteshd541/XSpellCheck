import React, { useState } from "react";

// Define a custom dictionary of words and their corrections
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function SpellCheckApp() {
  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    // Split text into words
    const words = text.split(" ");

    // Map and find the first correction
    let firstCorrection = "";
    const correctedWords = words.map((word, index) => {
      const lowerWord = word.toLowerCase();
      const corrected = customDictionary[lowerWord];
      if (!firstCorrection && corrected && corrected !== word) {
        firstCorrection = corrected;
      }
      return corrected || word;
    });

    setSuggestedText(firstCorrection);
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
}

export default SpellCheckApp;
