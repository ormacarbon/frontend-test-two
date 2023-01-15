import styled from "styled-components";

export const Container = styled.div`
  margin-left: ${({theme}) => theme.spacings.xLarge};
  margin-right: ${({theme}) => theme.spacings.medium};

  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .label {
    background-color: ${({theme}) => theme.colors.background};
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    position: relative;
    height: 24px;
    width: 49px;
    transform: scale(1.5);
  }

  .label .ball {
    background-color: ${({theme}) => theme.colors.text};
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 20px;
    width: 20px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
  }

  .checkbox:checked + .label .ball {
    transform: translateX(25px);
  }

  .fa-sun,
  .fa-moon {
    fill: ${({theme}) => theme.colors.text};
  }

  .fa-moon {
    margin-right: -2px;
  }
  .fa-sun {
    margin-left: -2px;
  }
`
