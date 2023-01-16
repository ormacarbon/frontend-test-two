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
  height: 400px;
  -webkit-box-shadow: inset 0px 107px 300px 200px rgba(0,0,0,0.40);
  -moz-box-shadow: inset 0px 107px 300px 200px rgba(0,0,0,0.40);
  box-shadow: inset 0px 107px 300px 200px rgba(0,0,0,0, 0.40);

  h3{
    font-weight: bold;
    max-width: 70%;
    font-size: 24px;
    margin-bottom: 48px;
    line-height: 32px;
    text-align: center;
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    @media (min-width: 768px) {
    justify-content: flex-start;

    h3 {
      margin-top: 48px;
      font-size: 20px;
    }

    @media (min-width: 980px) {
      justify-content: flex-start;

      h3 {
        margin-top: 48px;
        font-size: 22px;
      }

      @media (min-width: 1300px) {
        height: 700px;

        h3 {
          margin-top: 120px;
          font-size: 32px;
          line-height: 48px;
        }
      }
    }
  }
}

 @media (max-width: 768px) {
  
  h3 {
      font-size: 16px;
    }
 }


`;
