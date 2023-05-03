import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  margin: 65px 0;

  background: ${props => props.theme.colors.cardBackground};
  border: 2px solid #000000;
  box-shadow: 14px 18px 27px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 40px;

  .input-component {
    margin-bottom: 20px;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    max-width: 160px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: start;

    button {
      margin-top: 20px;
      max-width: 100%;
    }
  }

`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: ${props => props.theme.colors.label};
`

export const TasksContainer = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 30px 0;
`

export const ShowMoreContainer = styled.div`
  padding-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 55vw;
    max-width: 480px;
  }
`

export const Input = styled.input`
  margin-top: 30px;
  border: 1px solid ${props => props.theme.colors.inputBorderColor};
  height: 38px;
  border-radius: 6px;
  outline: none;
  width: 100%;
  padding: 0 15px;

  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #1C1C1C;

  &::placeholder {
    color: #9C9C9C
  }
`
