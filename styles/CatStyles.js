import styled from "styled-components";
import px2vw from "../services/px2vw";

export const Form = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-evenly ;
`

export const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;
`

export const Input = styled.input`
  font-family: inherit;
  width: ${px2vw(1000)};
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  
  ::placeholder {
    color: transparent;
  }
  
  &:focus {
    padding-bottom: 6px;  
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e,#38ef7d);
    border-image-slice: 1;
  }
  &:focus {
    & ~ ${Label}{
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #11998e;
      font-weight:700; 
    }
  }
  
  &:required,&:invalid { box-shadow:none; }
`

export const Button = styled.button`
  align-items: center;
  appearance: none;
  background-image: radial-gradient(100% 100% at 100% 0, #11998e 0,  #38ef7d 100%);
  border: 0;
  width: ${px2vw(100)};
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 38px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;

  &:focus {
    box-shadow: #38ef7d 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #11998e 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #11998e 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #11998e 0 3px 7px inset;
    transform: translateY(2px);
  }
`
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: center;
  display: flex;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: ${px2vw(500)};
  height: ${px2vw(500)};
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 15px;
  background: linear-gradient(to right, #11998e,#38ef7d);
  padding: ${px2vw(10)};
  margin-top: 10%;
  }
`;

export const Image = styled.img`
  display:block;
  max-width: 100%;
  max-height: 100%;
  border-radius: 25px;
  border: 2px solid black;
  src: ${props => props.url};
`;