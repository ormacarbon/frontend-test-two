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
    display: flex;
    align-self: center;
  }

  .search-input:focus {
    outline: none;
    border: 0 none;
  }

  /* The switch - the box around the slider */
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
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
    border: 1px solid grey;
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
    border: 1px solid grey;
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
