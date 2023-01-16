import styled from "styled-components";

export const MenuWrapper = styled.div`
  width: 100%;
  height: 93vh;
  display: flex;

  .modal-btns {
    display: flex;
    gap: 1em;
    margin-top: 1em;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  .side-menu {
    width: 15%;
    border-right: 1px solid
      ${({ darkMode }) => (darkMode ? "#ece8dd" : "#8080802c")};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em;

    @media (max-width: 1000px) {
      flex-direction: row;
      width: 100%;
      border-right: none;
    }

    .nav-buttons {
      display: flex;
      flex-direction: column;
      gap: 1em;

      @media (max-width: 1000px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5em;
      }
    }

    button {
      @media (max-width: 1000px) {
        padding: 0.5em;
        font-size: 0.9rem;
      }

      @media (max-width: 400px) {
        padding: 0.3em;
        font-size: 0.8rem;
      }
    }
  }

  .content {
    width: 85%;
    height: 100%;
    padding: 1em;
    overflow-y: scroll;

    @media (max-width: 1000px) {
      width: 100%;
    }
  }
`;
