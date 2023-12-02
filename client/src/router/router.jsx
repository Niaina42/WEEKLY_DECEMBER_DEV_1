import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IsConnected from "../services/guard-page/isConnected";
import Redirect from "../services/guard-page/redirect.jsx";
import Home from "../components/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Redirect>
              <Home />
            </Redirect>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
