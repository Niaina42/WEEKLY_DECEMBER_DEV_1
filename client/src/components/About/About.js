import React from "react";

const About = () => {
  return (
    <section id="about" class="about">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row align-items-xl-center gy-5">
          <div class="col-xl-5 content">
            <h3>À propos</h3>
            <h2>CorrectorPro</h2>
            <p>
              Perfectionnez votre écriture dans toutes les langues avec notre
              plateforme de correction orthographique avancée. De la clarté en
              un clic, où que vous écriviez.
            </p>
            <a href="#documentation" class="read-more">
              <span>Lire plus</span>
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>

          <div class="col-xl-7">
            <div class="row gy-4 icon-boxes">
              <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div class="icon-box">
                  <i class="bi bi-stopwatch"></i>
                  <h3>Temps réel</h3>
                  <p>
                    Une correction en temps réel, garantissant une écriture
                    impeccable au fur et à mesure que vous rédigez, pour une
                    communication sans erreur.
                  </p>
                </div>
              </div>

              <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div class="icon-box">
                  <i class="bi bi-clipboard-pulse"></i>
                  <h3>Rapidité</h3>
                  <p>
                    Une correction rapide et performante, propulsant la qualité
                    de votre écriture vers l'excellence en un clin d'œil.
                  </p>
                </div>
              </div>

              <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div class="icon-box">
                  <i class="bi bi-flag"></i>
                  <h3>Multilingue</h3>
                  <p>
                    Une correction multilingue, garantissant une précision
                    linguistique sans frontières pour vos écrits en plusieurs
                    langues.
                  </p>
                </div>
              </div>

              <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div class="icon-box">
                  <i class="bi bi-graph-up-arrow"></i>
                  <h3>API</h3>
                  <p>
                    Intégrez la puissance d'CorrectorPro dans votre application
                    grâce à son API, offrant la possibilité d'une correction
                    avancée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
