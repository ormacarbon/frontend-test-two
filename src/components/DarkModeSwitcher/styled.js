import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #000000;
  width: 89px;
  height: 38px;
  padding: 3px 6px;
  border-radius: 59px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const Switcher = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  background-color: ${props => props.theme.colors['red-600']};;
  border-radius: 50%;
  transition: all ease 0.3s;
  margin-left: ${(props) => props.marginLeft};
`;
