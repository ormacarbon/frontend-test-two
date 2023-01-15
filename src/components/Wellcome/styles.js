import styled from 'styled-components';
import stadium from '../../assets/imgs/stadium.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${stadium.src})  center center no-repeat ;
  background-size: cover;
  width: 100%;
  height: 600px;
  -webkit-box-shadow: inset 0px 107px 300px 200px rgba(0,0,0,0.40);
  -moz-box-shadow: inset 0px 107px 300px 200px rgba(0,0,0,0.40);
  box-shadow: inset 0px 107px 300px 200px rgba(0,0,0,0.50);

  h3{
    font-weight: bold;
    max-width: 60%;
    font-size: 24px;
    margin-bottom: 48px;
    line-height: 32px;
    text-align: center;
  }
`;
