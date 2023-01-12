import styled from "styled-components";

export const StyledNavbar = styled.header`
  background-color: #ffffff;
  height: 3.5rem;
  display: flex;
  position: relative;
  align-items: center;
  border-bottom: 1px solid grey;
  a,
  button {
    cursor: pointer;
  }
  button {
    transition: box-shadow 0.2s ease;
    border: none;
    width: 180px;
    height: 3.5rem;
    font-weight: 500;
    font-size: 1.3rem;
    color: #404040;
    border-radius: 2px;
    border: 1px solid grey;
  }
  img {
    width: 180px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .button-home {
    background-color: #f3f3f3;
  }
  button:hover {
    background-color: lightgray;
  }
  button:active {
    background-color: darkgray;
  }

  .search-container {
    transition: width 0.2s ease;
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
      background-color: #f3f3f3;
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
    transition: width 0.2s ease;
    display: flex;
    align-self: center;
  }

  .search-input:focus {
    outline: none;
    width: 250px;
    border: 0 none;
  }
`;
