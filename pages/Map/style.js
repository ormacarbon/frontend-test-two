import styled from "styled-components";

export const MainBreweries = styled.main`
  .pagination {
    display: flex;
    gap: 40px;
    padding: 0 20px 20px 20px;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    list-style: none;
    cursor: pointer;
  }

  .pagination a {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid var(--color-12);
    color: var(--color-12);
  }

  .pagination__link {
    font-weight: bold;
  }

  .pagination__link--active a {
    color: var(--color-0);
    background: var(--color-12);
  }

  .pagination__link--disabled a {
    color: rgb(198, 197, 202);
    border: 1px solid rgb(198, 197, 202);
  }
`;

export const DivBreweriesTitle = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: var(--color-11);

  p {
    margin-bottom: 4px;
  }

  @media (max-width: 800) {
    padding-top: 40px;
    padding-bottom: 40px;

    .title p {
      font-size: 1rem;
      text-transform: lowercase;
      font-weight: 400;
    }
  }
`;

export const ArticleBreweries = styled.article`
  padding-top: 60px;
  padding-bottom: 120px;
  a {
    display: block;
  }

  h2 {
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    gap: 40px;
    padding: 0 20px 20px 20px;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    overflow-x: auto;
  }

  li {
    flex: 1;
    min-width: 280px;
  }

  img {
    margin-bottom: 16px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    grid-row: 1/2;
  }

  .test {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 40px;
  }
  .test span {
    grid-column: 1;
    grid-row: 2;
    place-self: start end;
    background: var(--color-12);
    display: inline-block;
    padding: 8px 16px 8px 8px;
    border-radius: 4px 0 0 4px;
    align-self: center;
  }
`;

export const DivBreweriesMap = styled.div`
  background-color: var(--color-11);
  /* box-shadow: inset 0 80px var(--color-2), inset 0 -80px var(--color-2); */
  .leaflet-container {
    width: 100%;
    height: 100vh;
  }
  @media (max-width: 800px) {
    box-shadow: initial;
  }
`;
