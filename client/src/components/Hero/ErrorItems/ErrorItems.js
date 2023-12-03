import React, { useState } from "react";

const ErrorItems = ({ correction, changeWord }) => {
  const [open, setOpen] = useState(false);

  return correction.correction.length ? (
    <div className="error-items" onClick={() => setOpen(!open)}>
      {correction && correction.correction && (
        <span className="error-number">{correction.correction.length}</span>
      )}{" "}
      {correction.word}
      <hr style={{ display: open ? "inherit" : "none" }} />
      <div
        className="word-error-list"
        style={{ display: open ? "flex" : "none" }}
      >
        {correction &&
          correction.correction &&
          correction.correction.map((correct, idx) => (
            <span
              onClick={() => changeWord(correction.word, correct.word)}
              className="error-related"
              key={idx}
            >
              {correct.word}
            </span>
          ))}
      </div>
    </div>
  ) : null;
};
export default ErrorItems;
