import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`

export const Content = styled.div`
  display: grid;
  grid-template-areas: 
  "frame description"
  "frame attributes"
  "frame stats";
  gap: ${props => props.theme.spacing.lg};

  .frame {
    grid-area: frame;
  }

  .description {
    grid-area: description;
    h3 {
      margin-bottom: ${props => props.theme.spacing.lg};
    }
  }

  .attributes {
    grid-area: attributes;
  }

  .stats {
    grid-area: stats;
  }

  @media (max-width: ${props => props.theme.breakpoints.xl}) { 
    grid-template-areas: 
    "frame description"
    "frame attributes"
    "stats stats";
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
  }
`

export const Description = styled.div`
  text-align: start;
  font-size: ${(props) => props.theme.fonts.size.md};
`

export const Evolutions = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${props => props.theme.spacing.xs};
  margin-top: ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    flex-wrap: wrap;
  }
`
export const CardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`

export const Indicator = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(50%, -50%);
  z-index: 1;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    right: 50%;
    top: auto;
    bottom: 0;
    transform-origin: bottom;
    transform: translate(50%, 50%);
    transform: rotate(90deg);
  }
`