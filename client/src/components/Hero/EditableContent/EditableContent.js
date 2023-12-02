import React, { useEffect } from "react";
import sanitizeHtml from "sanitize-html"

const EditableContent = () => {
  const [content, setContent] = React.useState("");

  const addWordEvent = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');

    const spans = doc.querySelectorAll('span[id]');

    const ids = Array.from(spans).map(span => span.id);
    console.log(ids)
    ids.forEach((id) => {
        let word = document.getElementById(id)
        if(word) {
            word.addEventListener("click", function (e) {
                console.log(e.target.textContent)
            })
        }
    }); 
  }

  const createContentWithClickEvents = (htmlContent) => {
    const strippedContent = htmlContent.replace(/<\/?span[^>]*>/g, "").replace(/<\/?div[^>]*>/g, "");

    const words = strippedContent.split(/\s+/);
    return words
      .map((word, idx) => {
        if(word != "" && word != "<br>") {
            if (word.trim() === "") return word;
            return `<span id='word-${idx}'>${word}</span>`;
        }
      })
      .join(" ");
  };

  useEffect(() => {
    let editable = document.querySelector('div[contenteditable]')

    editable.addEventListener('input', function(event){
      setContent(createContentWithClickEvents(event.target.textContent))
      console.log(createContentWithClickEvents(event.target.textContent))
      // addWordEvent(createContentWithClickEvents(event.target.innerHTML))
    })
  }, [])

  return (
    <div
      className="content-editable"
      contentEditable
      spellcheck="false"
      // html=
    //   onBlur={onContentBlur}
      // dangerouslySetInnerHTML={{
      //   __html: createContentWithClickEvents(content),
      // }}
    //   onClick={(e) => {
    //     if (e.target.tagName === "SPAN") {
    //       onWordClick(e.target.textContent);
    //     }
    //   }}
    >
    </div>
  );
};
export default EditableContent;
