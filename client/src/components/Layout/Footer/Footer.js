import React from "react";

const Footer = () => {
  return (
    <footer id="footer" class="footer">
      <div class="container footer-top">
        <div class="row gy-4">
          <div class="col-lg-5 col-md-12 footer-about">
            <a href="index.html" class="logo d-flex align-items-center">
              <span>CorrectorPro</span>
            </a>
            <p>
              L'assurance d'une écriture irréprochable, où que vous alliez.
              Élevez vos mots avec précision et confiance!
            </p>
            <div class="social-links d-flex mt-4">
              <a href="">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>Liens utiles</h4>
            <ul>
              <li>
                <a href="#corrector">Correcteur</a>
              </li>
              <li>
                <a href="#about">À propos</a>
              </li>
              <li>
                <a href="#stats">Statistiques</a>
              </li>
              <li>
                <a href="#api">API</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>Notre Services</h4>
            <ul>
              <li>
                <a href="#">Correcteur orthographique</a>
              </li>
              <li>
                <a href="#">API integrée</a>
              </li>
              <li>
                <a href="#">Dictionaire de mot</a>
              </li>
              <li>
                <a href="#">IA modeling</a>
              </li>
              <li>
                <a href="#">Word nlp</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contactez-nous</h4>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p>United States</p>
            <p class="mt-4">
              <strong>Phone:</strong> <span>+1 5589 55488 55</span>
            </p>
            <p>
              <strong>Email:</strong> <span>support@correctorpro.com</span>
            </p>
          </div>
        </div>
      </div>

      <div class="container copyright text-center mt-4">
        <p>
          &copy; <span>Copyright</span>{" "}
          <strong class="px-1">CorrectorPro</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div class="credits">
          Developed by{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/razafindrazaka-niaina-christopher"
            className="by"
          >
            Christopher
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
