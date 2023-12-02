import React from "react";
import EditableContent from "./EditableContent/EditableContent";

const Hero = () => {
  return (
    <section id="corrector" class="hero">
      <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />

      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>Une écriture simple, optimisée, améliorée.</h2>
            <p>
              Utilisé par des millions d’utilisateurs, le correcteur
              d’orthographe multilingue CorrectorPro corrige et
              reformule vos phrases en temps réel.
            </p>
          </div>
          <div class="col-lg-7">
            <div className="content-editable-box">
              <EditableContent />
              <button class="btn-correct mt-3">
                Valider
                {" "}<i class="bi bi-check"></i>
              </button>
            </div>
          </div>
          <div class="col-lg-5">
            <div className="error-box">Erreur</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
