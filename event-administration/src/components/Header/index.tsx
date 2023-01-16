import { Header, HeaderMenu } from "./style";

import { useNavigate } from "react-router-dom";

export const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <HeaderMenu>
          <p className="drinks" onClick={() => navigate("/availablebeers")}>
            Administração de eventos
          </p>
          <p>Eventos</p>
        </HeaderMenu>

        <ul>
          <li onClick={() => navigate("/weddingbeers")}>casamento</li>
          <li onClick={() => navigate("/confraternizationbeers")}>
            confraternização
          </li>
          <li onClick={() => navigate("/graduationbeers")}>formatura</li>
        </ul>
      </Header>
    </>
  );
};
