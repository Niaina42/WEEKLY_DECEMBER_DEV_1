import React from "react";

const Stats = () => {
  return (
    <section id="stats" class="stats">
      <img src="../../../assets/images/AI.jpg" alt="" data-aos="fade-in" />

      <div
        class="container position-relative"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="row gy-4">
          <div class="col-lg-7 col-md-7">
            <p>
              Explorez l'ampleur de notre expertise linguistique avec le nombre
              de données actuellement intégrées dans notre dictionnaire,
              assurant une correction précise et complète.
            </p>
          </div>
        </div>
        <div class="row gy-4">
          <div class="col-lg-4 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
                class="purecounter"
              >21074</span>
              <p>mots Français</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="1453"
                data-purecounter-duration="1"
                class="purecounter"
              >64168</span>
              <p>mots Anglais</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="32"
                data-purecounter-duration="1"
                class="purecounter"
              >1702</span>
              <p>mots Malagasy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stats;
