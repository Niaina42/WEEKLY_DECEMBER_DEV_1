import React, { useEffect } from "react";

const Header = () => {
  const headerScroll = () => {
    let body = document.querySelector("#main-page");
    if (window.pageYOffset <= 50) {
      body.classList.remove("scrolled")
    }
    else {
      if (window.pageYOffset > 50) {
        body.classList.add("scrolled")
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", headerScroll);
  }, [])
  return (
    <header id="header" class="header fixed-top d-flex align-items-center">
      <div class="container-fluid d-flex align-items-center justify-content-between">
        <a
          href="index.html"
          class="logo d-flex align-items-center me-auto me-xl-0"
        >
          <h1>CorrectorPro</h1>
          <span>.</span>
        </a>

        <nav id="navmenu" class="navmenu">
          <ul>
            <li>
              <a href="#corrector" class="active">
                Correcteur
              </a>
            </li>
            <li>
              <a href="#about">À propos</a>
            </li>
            <li>
              <a href="#documentation">Docummentation</a>
            </li>
            <li>
              <a href="#api">API</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a class="btn-getstarted" href="#documentation">
          Get Started
        </a>
      </div>
    </header>
  );
};
export default Header;
