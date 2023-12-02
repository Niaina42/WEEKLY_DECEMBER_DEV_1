import React, { useEffect } from "react";
import EditableContent from "./EditableContent/EditableContent";
import https from "../../services/http/https";
import ErrorItems from "./ErrorItems/ErrorItems";

const Hero = () => {
  const [content, setContent] = React.useState("");
  const [lang, setLang] = React.useState("fr");
  const [corrections, setCorrections] = React.useState({});

  const checkCorrection = async () => {
    try {
      if (content.trim() != "") {
        let response = await https.post("/corrector", {
          text: content,
          lang,
        });
        if (response) {
          console.log(response.data);
          setCorrections(response.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkCorrection();
  }, [content]);

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
              <EditableContent content={content} setContent={setContent} />
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
                  <ErrorItems correction={correct} key={idx} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
