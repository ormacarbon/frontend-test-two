import React from "react";

import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/Home";

export const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};
