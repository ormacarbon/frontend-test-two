import styled from "styled-components";

export const Container = styled.button`
  flex: 1;
  height: 100%;
  display: flex;
  background: ${(props) => props.theme.colors.gray['600']};
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.light};
  border: 1px solid ${(props) => props.theme.colors.gray[400]};
  box-shadow: 0 0 4rem rgba(0, 0, 0, 0.2);
  transition: background 0.3s, border 0.3s;
`

export const Frame = styled.div`
  width: 100%;
  border-radius: ${(props) => props.theme.spacing.md};
  background-color: transparent;
  background-image: repeating-linear-gradient(45deg, transparent, transparent 30px, ${(props) => props.theme.colors.gray[500]} 30px, ${(props) => props.theme.colors.gray[500]} 60px);
  border: 1px solid ${(props) => props.theme.colors.gray[400]};
  img {
    width: 100%;
    height: 100%;
    max-width: 475px;
    max-height: 475px;
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xs};
  text-align: start;
  font-weight: 600;

  span {
    text-transform: capitalize;
    font-size: ${(props) => props.theme.fonts.size.xl};
  }

  div {
    color: ${(props) => props.theme.colors.gray[300]};
    border-radius: ${(props) => props.theme.spacing.lg};
    font-size: ${(props) => props.theme.fonts.size.md};
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};

  .button-container {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`

export const Types = styled.div`
  display: flex;
  height: 100%;
  gap: ${(props) => props.theme.spacing.xs};
`
