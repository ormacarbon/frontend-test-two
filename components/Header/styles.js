import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5em;
  background: ${({ darkMode }) => (darkMode ? "#393E46" : "#ece8dd")};
  border-bottom: 1px solid ${({ darkMode }) => (darkMode ? "#ece8dd" : "#8080802c")};

  .title {
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      width: 70px;
      height: 70px;

      @media (max-width: 768px) {
        width: 50px;
        height: 50px;
      }
    }

    span {
      font-size: 1.2em;
      font-weight: 600;

      @media (max-width: 768px) {
        font-size: 0.7em;
      }
    }
  }

  .darkmode-area {
    display: flex;
    align-items: center;
    span {
      margin-right: 1em;

      @media (max-width: 768px) {
        font-size: 0.7em;
      }
    }
  }
`;

export const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 65px;
  height: 24px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #cdf0ea;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #cdf0ea;
  }

  &:checked + ${Slider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
