import React from "react";

import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/Home";
import { AvailableBeersPageComponent } from "../pages/AvailableBeers";

export const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/availablebeers/"
          element={<AvailableBeersPageComponent />}
        />
      </Routes>
    </>
  );
};
