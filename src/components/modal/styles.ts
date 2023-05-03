import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.37);
  min-width: 100vw;
  min-height: 100vh;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
`

export const Modal = styled.div`
  width: 90vw;
  max-width: 550px;
  position: relative;
  padding: 40px;
  z-index: 101;

  background: ${props => props.theme.colors.cardBackground};
  border: 2px solid #000000;
  box-shadow: 24px 18px 27px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`
export const CloseButton = styled.button`
  width: 41px;
  height: 41px;

  position: absolute;
  right: -12px;
  top: -12px;

  background: #FF4843;
  border: 1px solid #000000;
  border-radius: 6px;

  user-select: none;
  outline: none;
  cursor: pointer;
`

export const CloseButtonText = styled.span`
  color: #fff;
  font-weight: 600;
`

export const Title = styled.h3`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 28px;
  line-height: 39px;
  color: #FE6763;
  padding-bottom: 30px;
`

export const Content = styled.div`
  width: 100%;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;

  button {
    max-width: 119px;
  }
`
