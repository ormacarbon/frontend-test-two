import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 0.5rem;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardBox = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0px 2px 2px 0px hsla(0, 0%, 0%, 0.14),
    0px 3px 1px -2px hsla(0, 0%, 0%, 0.12), 0px 1px 5px 0px hsla(0, 0%, 0%, 0.2);
  cursor: pointer;
`;

export const CardOverlay = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: flex-end;
  padding: 0 0.5rem 0.5rem;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.25),
    transparent 35%,
    transparent 65%,
    rgba(0, 0, 0, 0.25)
  );

  height: 100%;
  width: 100%;

  position: absolute;
  bottom: 0;

  color: ${(props) => props.theme.colors.text_overlay};

  h1 {
    font-size: ${(props) => props.theme.font_size.sm};
  }
  svg {
    height: 1.3rem;
  }
`;

export const DownloadBtn = styled.button`
  display: flex;
  justify-content: end;

  border: none;
  background: transparent;
  color: ${(props) => props.theme.colors.text_overlay};
  text-decoration: none;
  cursor: pointer;
`;

export const DownloadBtnMobile = styled.button`
  display: flex;
  padding: 0 0.5rem 0.5rem;

  position: absolute;
  bottom: 0;
  right: 0;

  border: none;
  background: transparent;
  color: ${(props) => props.theme.colors.text_overlay};
  text-decoration: none;
  cursor: pointer;

  svg {
    height: 1.3rem;
    opacity: 95%;
  }

  @media (min-width: 1100px) {
    svg {
      display: none;
    }
  }
`;
