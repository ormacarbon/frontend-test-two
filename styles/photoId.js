import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 0 3rem;
`;

export const Content = styled.div`
  width: 90%;
  box-shadow: 0px 2px 2px 0px hsla(0, 0%, 0%, 0.14),
    0px 3px 1px -2px hsla(0, 0%, 0%, 0.12), 0px 1px 5px 0px hsla(0, 0%, 0%, 0.2);
  margin: 1rem 0 0;
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: row;
`;

export const ArtistInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 15%;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    border-bottom: 1px solid ${(props) => props.theme.colors.caption_400};
    font-size: ${(props) => props.theme.font_size.md};
    font-weight: ${(props) => props.theme.font_weight.black};
    padding: 0 0 0.3rem;
    width: 100%;
  }

  span {
    margin: 0.3rem 0 0 0;
  }
`;

export const Download = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin: 0;
  }
`;

export const ButtonDownload = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 0.5rem;

  box-shadow: 0px 2px 2px 0px hsl(0deg 0% 0% / 14%),
    0px 1px 1px -2px hsl(0deg 0% 0% / 12%), 0px 1px 5px 0px hsl(0deg 0% 0% / 5%);
  font-weight: ${(props) => props.theme.font_weight.bold};
  font-size: ${(props) => props.theme.font_size.sm};

  border-radius: 5px;
  cursor: pointer;
`;

export const DropDownListContainer = styled.div`
  width: 30%;
`;

export const DropDownList = styled.div`
  box-shadow: 0px 2px 2px 0px hsla(0, 0%, 0%, 0.14),
    0px 3px 1px -2px hsla(0, 0%, 0%, 0.12), 0px 1px 5px 0px hsla(0, 0%, 0%, 0.2);

  border-radius: 5px;
  position: absolute;
  z-index: 1;
  margin-right: 2.5rem;

  right: 0;
  width: 13rem;
  box-sizing: border-box;
  font-size: 1.3rem;
  font-weight: 500;
`;

export const Button = styled.div`
  display: flex;

  font-size: ${(props) => props.theme.font_size.xsm};
  font-weight: ${(props) => props.theme.font_weight.black};
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: none;
  outline: none;

  width: 100%;

  padding: 1rem 0.5rem;

  cursor: pointer;

  &:focus,
  &:active,
  &:hover {
    background-color: ${(props) => props.theme.colors.background_700};
  }
`;

export const ListItem = styled.div`
  list-style: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.caption_400};
  &:last-child {
    border: none;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.colors.caption_400};
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 1rem 0;
  padding: 0 0 1rem;

  @media (min-width: 1100px) {
    width: 45%;
  }
`;

export const InfoPhoto = styled.div`
  margin: 1rem 0;
  h1 {
    font-size: ${(props) => props.theme.font_size.md};
    font-weight: ${(props) => props.theme.font_weight.black};
    margin: 0 0 1rem;

    @media (min-width: 1100px) {
      font-size: ${(props) => props.theme.font_size.lg};
      font-weight: ${(props) => props.theme.font_weight.bold};
    }
  }
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  div {
    @media (min-width: 1100px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export const InfoTitle = styled.div`
  font-size: ${(props) => props.theme.font_size.sm};
  font-weight: ${(props) => props.theme.font_weight.regular};
  margin-bottom: 0.2rem;

  @media (min-width: 1100px) {
    font-size: ${(props) => props.theme.font_size.md};
  }
`;

export const Info = styled.span`
  font-size: ${(props) => props.theme.font_size.sm};
  font-weight: ${(props) => props.theme.font_weight.semi_bold};
  margin-bottom: 1rem;

  @media (min-width: 1100px) {
    font-size: ${(props) => props.theme.font_size.md};
  }
`;

export const AvgColor = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-left: 0.5rem;
    height: 0.8rem;
    width: 0.8rem;
    border: 1px solid ${(props) => props.theme.colors.text};
  }
  @media (min-width: 1100px) {
    flex-direction: row !important;
  }
`;
