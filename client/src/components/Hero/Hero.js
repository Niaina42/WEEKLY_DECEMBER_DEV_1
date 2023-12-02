import React from "react";

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
              d’orthographe et de grammaire multilingue CorrectorPro corrige et
              reformule vos phrases en temps réel.
            </p>
          </div>
          <div class="col-lg-7">
            <form action="#" class="sign-up-form d-flex">
              <input
                type="text"
                class="form-control"
                placeholder="Enter email address"
              />
              <input type="submit" class="btn btn-primary" value="Sign up" />
            </form>
          </div>
          <div class="col-lg-5">
            <div className="error-box">
              Erreur
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
