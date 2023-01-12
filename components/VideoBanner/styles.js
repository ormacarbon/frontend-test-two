import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  border-radius: ${props => props.theme.spacing.lg};
  overflow-y: hidden;

  video {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const Content = styled.div`
  z-index: 1;
  padding: ${props => props.theme.spacing['3xl']};

  h4 {
    font-size: ${props => props.theme.fonts.size.xl};
  }

  & :nth-child(3) {
    margin-top: ${props => props.theme.spacing.lg};
  }
`