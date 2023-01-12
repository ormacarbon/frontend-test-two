import styled from "styled-components";

export default function About() {
  return (
    <AboutContainer>      
      <Glass>
        <h2>
          Este projeto teve como objetivo criar uma aplicação web que utilizasse
          a API do MyAnimeList, <a href="https://jikan.moe/">Jikan API</a>, para
          exibir informações sobre animes e mangas. A aplicação foi desenvolvida
          utilizando a framework <strong>NextJs</strong> e o        <strong>Styled-components</strong> foi utilizado para estilização das
          páginas. O desenvolvimento deste projeto foi uma ótima oportunidade
          para aprender mais sobre a utilização de APIs e sobre como trabalhar
          com o <strong>NextJs</strong> e o <strong>Styled-components</strong>. Além disso, o projeto me permitiu
          aprofundar meus conhecimentos em desenvolvimento web e me desenvolver
          pessoalmente como um programador.
        </h2>
      </Glass>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 300px;
  text-align: justify;
  color: white;
  height: 91vh;
  
  
  @media (max-width: 768px) {
    padding: 10px
  }
  
  
  @media (min-width: 768px) and (max-width: 1080px) {
    padding: 150px;
  }
`;

const Glass = styled.div`
  max-height: 600px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: ${(props) => props.theme.aboutColor};

  @media (max-width: 768px) {
    padding: 5px;
    font-size: 14px;

  }
  
  h2{
    background: transparent;
  }

  a {
    background: transparent;
    color: #df72d0;
    text-decoration: none;
  }

  strong {
    background: transparent;
    color: #08060F;
  }

  
  
`;
