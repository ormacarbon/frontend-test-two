import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background_800};
  color: ${(props) => props.theme.colors.text};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const DesktopNavBar = styled.div`
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.font_size.md};
    font-weight: ${(props) => props.theme.font_weight.bold};
    border-bottom: 1px transparent;
    gap: 1rem;
    padding: 0.3rem 1rem;

    transition: 0.3s;

    &:hover,
    &:active,
    &:focus {
      color: ${(props) => props.theme.colors.caption_600};
      border-bottom: 1px solid ${(props) => props.theme.colors.caption_600};
    }
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const MobileNavBar = styled.div`
  @media (min-width: 1100px) {
    display: none;
  }
`;
