import styled from 'styled-components';

export const Main = styled.div`
  font-family: sans-serif;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};

  margin-top: 1rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;

  position: relative;
`;

export const DropDownContainer = styled.div`
  width: 7rem;
  margin: 0 auto;
`;

export const DropDownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  box-shadow: 0px 2px 2px 0px hsla(0, 0%, 0%, 0.14),
    0px 3px 1px -2px hsla(0, 0%, 0%, 0.12), 0px 1px 5px 0px hsla(0, 0%, 0%, 0.2);
  font-weight: ${(props) => props.theme.font_weight.bold};
  font-size: ${(props) => props.theme.font_size.sm};

  border-radius: 5px;
`;

export const Title = styled.span``;

export const DropDownListContainer = styled.div`
  width: 30%;
`;

export const DropDownList = styled.ul`
  box-shadow: 0px 2px 2px 0px hsla(0, 0%, 0%, 0.14),
    0px 3px 1px -2px hsla(0, 0%, 0%, 0.12), 0px 1px 5px 0px hsla(0, 0%, 0%, 0.2);

  border-radius: 5px;
  position: absolute;
  z-index: 1;
  margin-right: 1rem;

  right: 0;
  width: 13rem;

  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  font-size: 1.3rem;
  font-weight: 500;
`;

export const ListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.caption_400};
  &:last-child {
    border: none;
  }
`;

export const Button = styled.button`
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
