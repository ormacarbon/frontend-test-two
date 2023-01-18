import React from "react";

import { SceneContext } from "../contexts/SceneContext";

export function useScene() {
  const context = React.useContext(SceneContext);
  const { scenes, setScene } = context;
  return {
    scenes,
    setScene,
  };
}
