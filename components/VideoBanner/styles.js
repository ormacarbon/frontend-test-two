import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  border-radius: ${props => props.theme.spacing.xl};
  overflow: hidden;
  color: ${props => props.theme.colors.white};

  video {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 527px) { 
      width: auto;
      top: 0;
      right: 50%;
      transform: translateX(50%);
      height: 100%;
    }
  }
`

export const Content = styled.div`
  z-index: 1;
  padding: ${props => props.theme.spacing['4xl']};
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  h4 {
    font-size: ${props => props.theme.fonts.size['2xl']};
  }

  & :nth-child(3) {
    margin-top: ${props => props.theme.spacing.xl};
  }
`