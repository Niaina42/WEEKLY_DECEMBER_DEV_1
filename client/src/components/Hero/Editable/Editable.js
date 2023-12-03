import React, { useEffect } from "react";
import ContentEditable from "react-contenteditable";

const Editable = ({ content, setContent, setCorrections, checkCorrection }) => {
  
  const handleChange = (event) => {
    let text = event.target.value;
    if (text.trim() == "") setCorrections([]);
    else {
        setContent(text);
    }
  };

  return (
    <ContentEditable
      className="content-editable"
      spellCheck={false}
      html={content}
      disabled={false}
      onChange={(e) => handleChange(e)}
    />
  );
};
export default Editable;
