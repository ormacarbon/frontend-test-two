import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 auto;
  padding: 73px 10px;
`

export const MiddleContainer = styled.div`
  height: 412px;
  position: relative;
  margin: 0 auto;

  @media (max-width: 768px) and (min-width: 480px) {
    height: 370px;
  }

  @media (max-width: 480px) {
    height: auto;
  }
`

export const Title = styled.h1`
  color: #fff;
  font-size: 80px;
  font-weight: 600;
  line-height: 96.82px;

  @media (max-width: 768px) and (min-width: 480px) {
    font-size: 55px;
    line-height: 68px;
  }

  @media (max-width:480px) {
    font-size: 48px;
    line-height: 58.09px;
    margin-top: 24px;
  }
`

export const HomeImage = styled.img`
`

export const SvgContainer = styled.div`
  position: absolute;
  left: 269px;
  top: 92px;
  user-select: none;


  @media (max-width: 768px) and (min-width: 480px) {
    left: 150px;
    top: 25px;
    scale: 0.75;
  }

  @media (max-width: 480px) {
    position: initial;
    left: initial;
    top: initial;
    display: flex;
    justify-content: center;
  }
`

export const Button = styled.button`
  position: absolute;
  left: 0;
  bottom: 0;
  border: 3px solid #DB3D39;
  border-radius: 6px;
  padding: 10px 86px;
  user-select: none;
  margin-left: 3px;
  cursor: pointer;

  &:hover {
    background: #E1DEFF;
  }

  &:active {
    background: #D3CFFF;
  }

  @media (max-width: 768px) and (min-width: 480px) {
    position: initial;
    bottom: initial;
    margin-top: 62px;
  }

  @media (max-width: 480px) {
    position: initial;
    bottom: initial;
    width: 100%;
    margin-top: 62px;
  }
`

export const ButtonText = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #DB3D39;
`
