import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState("#corrector");
  const headerScroll = () => {
    let body = document.querySelector("#main-page");
    if (window.pageYOffset <= 50) {
      body.classList.remove("scrolled");
    } else {
      if (window.pageYOffset > 50) {
        body.classList.add("scrolled");
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", headerScroll);
  }, []);

  useEffect(() => {
    setActive(location.hash);
  }, [location.hash]);

  return (
    <header id="header" class="header fixed-top d-flex align-items-center">
      <div class="container-fluid d-flex align-items-center justify-content-between">
        <a
          href="#corrector"
          class="logo d-flex align-items-center me-auto me-xl-0"
        >
          <h1>CorrectorPro</h1>
          <span>.</span>
        </a>

        <nav id="navmenu" class="navmenu">
          <ul>
            <li>
              <a
                href="#corrector"
                class={`${active == "#corrector" ? "active" : ""}`}
              >
                Correcteur
              </a>
            </li>
            <li>
              <a href="#about" class={`${active == "#about" ? "active" : ""}`}>
                À propos
              </a>
            </li>
            <li>
              <a href="#stats" class={`${active == "#stats" ? "active" : ""}`}>
                Statistiques
              </a>
            </li>
            <li>
              <a href="#api" class={`${active == "#api" ? "active" : ""}`}>
                API
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class={`${active == "#contact" ? "active" : ""}`}
              >
                Contact
              </a>
            </li>
          </ul>

          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a class="btn-getstarted" href="#api">
          Get Started
        </a>
      </div>
    </header>
  );
};
export default Header;
