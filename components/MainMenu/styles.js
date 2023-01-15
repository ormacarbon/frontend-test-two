import styled from "styled-components";

export const MenuWrapper = styled.div`
  width: 100%;
  height: 93vh;
  display: flex;

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
      background: #1e90ff;
      border: 1px solid #fff;
      padding: 1em;
      border-radius: 5px;
      color: #ffffff;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;

      @media (max-width: 1000px) {
        padding: 0.5em;
        font-size: 0.9rem;
      }

      @media (max-width: 400px) {
        padding: 0.3em;
        font-size: 0.8rem;
      }

      &:hover {
        background: #fff;
        color: #1e90ff;
      }
    }

    .logout-btn {
      background: #e97777;
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
