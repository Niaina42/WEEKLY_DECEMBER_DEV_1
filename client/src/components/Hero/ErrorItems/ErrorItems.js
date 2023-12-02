import React, { useState } from "react";

const ErrorItems = ({ correction }) => {
  const [open, setOpen] = useState(false);
  const changeWord = (word) => {
    console.log(word);
  };
  return (
    <div className="error-items" onClick={() => setOpen(!open)}>
      {correction && correction.correction && (
        <span className="error-number">{correction.correction.length}</span>
      )}
      {" "} {correction.word}
      <hr style={{ display: open ? "inherit" : "none" }} />
      <div
        className="word-error-list"
        style={{ display: open ? "flex" : "none" }}
      >
        {correction &&
          correction.correction &&
          correction.correction.map((correct, idx) => (
            <span
              onClick={() => changeWord(correct.word)}
              className="error-related"
              key={idx}
            >
              {correct.word}
            </span>
          ))}
      </div>
    </div>
  );
};
export default ErrorItems;
