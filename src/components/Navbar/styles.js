import styled from "styled-components";

export const StyledNavbar = styled.header`
  background-color: ${({ theme }) => theme.backgroundLevel2};
  height: 55px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.borderBase};
  a,
  button {
    cursor: pointer;
  }
  button {
    border: none;
    width: 180px;
    height: 3.5rem;
    font-weight: 500;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.textColorBase};
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.borderBase};
  }
  img {
    width: 180px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .button-home {
    background-color: ${({ theme }) => theme.backgroundLevel1};
  }
  .button-pokedex {
    background-color: ${({ theme }) => theme.backgroundLevel1};
  }
  button:hover {
    background-color: lightgray;
  }
  button:active {
    background-color: darkgray;
  }

  .search-container {
    cursor: pointer;
    display: flex;

    img {
      width: 25px;
    }
    .button-search {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 80px;
      background-color: ${({ theme }) => theme.backgroundLevel1};
    }
    .button-search:hover {
      background-color: lightgrey;
    }
    .button-search:active {
      background-color: darkgray;
    }
  }
  .search-input {
    width: 350px;
    padding: 0 20px;
    font-size: 1.4rem;
    font-weight: 700;
    background: transparent;
    border: none;
    display: flex;
    align-self: center;
  }

  .search-input:focus {
    outline: none;
    border: 0 none;
  }

  .switch {
    font-size: 17px;
    position: absolute;
    display: flex;
    width: 3.5em;
    height: 2em;
    right: 50px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 10px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.3em;
    width: 1.4em;
    border-radius: 6px;
    left: 0.3em;
    bottom: 0.3em;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: grey;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px grey;
  }

  input:checked + .slider:before {
    transform: translateX(1.3em);
  }
`;
