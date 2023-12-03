import React from "react";
import responseImg from "../../assets/images/response_api.png";

const Api = () => {
  return (
    <section id="api">
      <div class="container section-title" data-aos="fade-up">
        <h2>Utilisé l'API ?</h2>
        <p>
          Voici les instructions détaillées pour utiliser l'API avec facilité.
          Suivez ces étapes claires pour intégrer les fonctionnalités dans votre
          application.
        </p>
      </div>

      <div class="container">
        <div class="row gy-4 align-items-center features-item">
          <div
            class="col-lg-5 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>
              Requètte pour l'API <i class="bi bi-arrow-right-circle"></i>
            </h3>
            <p>
              Libérez le potentiel de CorrectorPro dans vos applications en
              envoyant simplement cette requête. Intégrez une correction
              orthographique de pointe pour offrir une expérience textuelle
              impeccable à vos utilisateurs. Faites de la précision linguistique
              un atout majeur de votre application!
            </p>
          </div>
          <div class="col-lg-7 order-1 order-lg-2 d-flex align-items-center">
            <div className="request-area">
              Endpoint{"  "}:{"  "} http:/173.249.22.169:9002/api/corrector
              <br />
              Body{"  "}: {"  "}
              {`{`}
              <br />
              {`
                    "text": "votre texte ici",
                  `}
              <br />
              {`
                    "lang": "la langue choisi (fr/en/mg)" `}
              <br />
              {`
               }`}
            </div>
          </div>
        </div>

        <div class="row gy-4 align-items-stretch justify-content-between features-item mt-4">
          <div class="col-lg-6 d-flex align-items-center features-img-bg">
            <img src={responseImg} class="img-fluid" alt="response-api" />
          </div>
          <div class="col-lg-5 d-flex justify-content-center flex-column">
            <h3>
              <i class="bi bi-arrow-left-circle"></i> Réponse de l'API
            </h3>
            <p>
              Recevez cette réponse instantanée confirmant le traitement en
              cours. Votre demande est notre priorité, assurant une intégration
              fluide et efficace de nos fonctionnalités dans votre application.
            </p>
            <ul>
              <li>
                <i class="bi bi-check"></i>{" "}
                <span>
                  "incorrect_words": Liste des mots incorrecte dans le texte.
                </span>
              </li>
              <li>
                <i class="bi bi-check"></i>
                <span>
                  {" "}
                  "corrections": Tableau contenant les mot et leurs erreurs.
                </span>
              </li>
              <li>
                <i class="bi bi-check"></i>{" "}
                <span>
                  "distance": La distance de Levenshtein par rapport au mot.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Api;
