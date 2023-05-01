import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 auto;
`

export const LoginContainer = styled.div`
  width: 100vw;
  max-width: 456px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 auto;
  padding: 40px 40px;
  border: 2px solid #1C1C1C;
  border-radius: 20px;
  box-shadow: 24px 18px 27px rgba(0, 0, 0, 0.25);
`

export const Title = styled.h1`
  color: #1C1C1C;
  font-size: 24px;
  font-weight: 600;
  line-height: 29.05px;
`

export const Form = styled.form`
  margin-top: 30px;
  width: 100%;

  .input-component {
    margin-bottom: 20px;

    &:nth-child(2) {
      margin-bottom: 45px;
      padding-top: 0px;

      &.is-invalid {
        margin-bottom: 20px;
      }
    }
  }
`

export const FormError = styled.p`
  width: 100%;
  padding: 10px 0;

  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  color: #FF2121;
  text-align: center;
`

export const RegisterText = styled.p`
  margin-top: 23px;
  width: 100%;
  color: #1c1c1c;
  text-align: center;

  &, a {
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
  }
`
