import React, { useEffect } from "react";
import https from "../../services/http/https";
import ErrorItems from "./ErrorItems/ErrorItems";
import Editable from "./Editable/Editable";

const Hero = () => {
  const [content, setContent] = React.useState("");
  const [lang, setLang] = React.useState("fr");
  const [corrections, setCorrections] = React.useState({});

  const checkIncorrectWord = () => {
    const htmlString = content;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    const textOnly = tempDiv.textContent || tempDiv.innerText || "";

    if(corrections.incorrect_words && corrections.incorrect_words.length) {
      const words = textOnly.split(' ');

      const spanWrappedWords = words.map(function(word) {
        return `<span class="${corrections.incorrect_words.includes(word) ? "error":""}">` + word + `</span>`;
      });

      setContent(spanWrappedWords.join(' '))
    }
    else {
      setContent(textOnly)
    }
  }

  const checkCorrection = async () => {
    const htmlString = content;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    const textOnly = tempDiv.textContent || tempDiv.innerText || "";
    try {
      if (content.trim() != "") {
        let response = await https.post("/corrector", {
          text: textOnly,
          lang,
        });
        if (response) {
          console.log()
          setCorrections(response.data);
         
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    checkIncorrectWord()
  }, [corrections])

  useEffect(() => {
    checkCorrection()
  }, [content])

  const changeWord = (wrongWord, trueWord) => {
    const correctedText = content.replace(wrongWord, trueWord);
    setContent(correctedText);
  };

  const correctAll = () => {

  }

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
              <select className="lang-select" onChange={(e) => setLang(e.target.value)}>
                <option value="fr">Français</option>
                <option value="en">Anglais</option>
                <option value="mg">Malagasy</option>
              </select>
              <Editable content={content} setContent={setContent} setCorrections={setCorrections} checkCorrection={checkCorrection} />
              <button class="btn-correct mt-3">
                Corrigé tout <i class="bi bi-check"></i>
              </button>
            </div>
          </div>
          <div class="col-lg-5">
            <div className="error-box">
              {corrections &&
              corrections.corrections &&
              corrections.corrections.length != 0 ? (
                <>
                  <div class="title">Liste des corrections</div>
                  <hr style={{margin: "5px 0 0 0"}} />
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
                  <ErrorItems correction={correct} key={idx} changeWord={changeWord} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
