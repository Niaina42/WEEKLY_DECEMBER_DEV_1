import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <main id="main-page" className="index-page">
      <Header />
      {children}
      <Footer />
    </main>
  );
};
export default Layout;
