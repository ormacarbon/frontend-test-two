import { Header } from "./style";

import { Routes, Route, useParams } from "react-router-dom";

export const HeaderComponent = () => {
  return (
    <>
      <Header>
        <p className="drinks">Administração de eventos</p>

        <p className="events">Eventos</p>

        <ul>
          <li>casamento</li>
          <li>confraternização</li>
          <li>formatura</li>
        </ul>
      </Header>
    </>
  );
};
