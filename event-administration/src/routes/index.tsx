import React from "react";

import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/Home";
import { AvailableBeersPageComponent } from "../pages/AvailableBeers";
import { WeddingBeersPageComponent } from "../pages/WeddingBeers";
import { ConfraterzinationBeersPageComponent } from "../pages/ConfraternizationBeers";
import { GraduationBeersPageComponent } from "../pages/GraduationBeers";

export const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/availablebeers/"
          element={<AvailableBeersPageComponent />}
        />
        <Route path="/weddingbeers" element={<WeddingBeersPageComponent />} />
        <Route
          path="/confraternizationbeers"
          element={<ConfraterzinationBeersPageComponent />}
        />
        <Route
          path="/graduationbeers"
          element={<GraduationBeersPageComponent />}
        />
      </Routes>
    </>
  );
};
