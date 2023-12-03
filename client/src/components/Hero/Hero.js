import React, { useEffect } from "react";
import https from "../../services/http/https";
import ErrorItems from "./ErrorItems/ErrorItems";
import Editable from "./Editable/Editable";

const Hero = () => {
  const [content, setContent] = React.useState("");
  const [lang, setLang] = React.useState("fr");
  const [corrections, setCorrections] = React.useState({});
  const [isCopied, setIsCopied] = React.useState(false);
  const [sendCorrection, setSendCorrection] = React.useState(false);

  const checkIncorrectWord = () => {
    const htmlString = content;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    const textOnly = tempDiv.textContent || tempDiv.innerText || "";

    if (corrections.incorrect_words && corrections.incorrect_words.length) {
      const words = textOnly.split(" ");

      const spanWrappedWords = words.map(function (word) {
        return (
          `<span class="${
            corrections.incorrect_words.includes(word) ? "error" : ""
          }">` +
          word +
          `</span>`
        );
      });

      setContent(spanWrappedWords.join(" "));
    } else {
      setContent(textOnly);
    }
  };

  const checkCorrection = async () => {
    const htmlString = content;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    const textOnly = tempDiv.textContent || tempDiv.innerText || "";
    try {
      if (content.trim() != "") {
        setSendCorrection(true)
        let response = await https.post("/corrector", {
          text: textOnly,
          lang,
        });
        if (response) {
          setSendCorrection(false);
          setCorrections(response.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIncorrectWord();
  }, [corrections]);

  useEffect(() => {
    checkCorrection();
  }, [content]);

  const changeWord = (wrongWord, trueWord) => {
    const correctedText = content.replace(wrongWord, trueWord);
    setContent(correctedText);
  };

  const copyToClipboard = () => {
    const htmlString = content;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    const textOnly = tempDiv.textContent || tempDiv.innerText || "";
    navigator.clipboard.writeText(textOnly);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const correctAll = () => {
    if(corrections && corrections.incorrect_words.length) {
      const htmlString = content;
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlString;
      let textOnly = tempDiv.textContent || tempDiv.innerText || "";

      corrections.corrections.map((correct) => {
        if(correct.correction[0])
          textOnly = textOnly.replace(correct.word, correct.correction[0].word)
      })

      setContent(textOnly)
    }
  };

  return (
    <section id="corrector" class="hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>Une écriture simple, optimisée, améliorée.</h2>
            <p>
              Utilisé par des millions d’utilisateurs, le correcteur
              d’orthographe multilingue CorrectorPro corrige et reformule vos
              phrases en temps réel.
            </p>
          </div>
          <div class="col-lg-7">
            <div className="content-editable-box">
              <div class="editor-toolbar">
                <select
                  className="lang-select"
                  onChange={(e) => setLang(e.target.value)}
                >
                  <option value="fr">Français</option>
                  <option value="en">Anglais</option>
                  <option value="mg">Malagasy</option>
                </select>
                <button class="btn-copy" onClick={copyToClipboard}>
                  Copier {isCopied && (<i class="bi bi-check"></i>)}
                </button>
              </div>
              <Editable
                content={content}
                setContent={setContent}
                setCorrections={setCorrections}
                checkCorrection={checkCorrection}
              />
              <div class="editor-toolbar">
                <button class="btn-correct mt-3" onClick={correctAll}>
                  Corrigé tout <i class="bi bi-check"></i>
                </button>
                <span className="mt-3 loading-message">
                  {sendCorrection && "Chargement..."}
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div className="error-box">
              {corrections &&
              corrections.corrections &&
              corrections.corrections.length != 0 ? (
                <>
                  <div class="title">Liste des corrections</div>
                  <hr style={{ margin: "5px 0 0 0" }} />
                </>
              ) : (
                <div class="text-center no-error">
                  <i class="bi bi-check-circle no-error-icon"></i>
                  <p>Parfait! Nous n’avons pas trouvé d’erreurs.</p>
                </div>
              )}
              {corrections &&
                corrections.corrections &&
                corrections.corrections.map((correct, idx) => (
                  <ErrorItems
                    correction={correct}
                    key={idx}
                    changeWord={changeWord}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
