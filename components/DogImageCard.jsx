import styled from "styled-components";
import px2vw from "../services/px2vw";

const Wrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 15px;
  background: linear-gradient(to right, #11998e,#38ef7d);
  padding: 20px;
  margin-top: 10%;
  z-index: -2;

  @media (min-width: 550px) {
    width: 250px;
    height: 250px;
  }

  @media (min-width: 768px) {
    width: ${px2vw(300)};
    height: ${px2vw(300)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(300)};
    height: ${px2vw(300)};
  }
`;

const Image = styled.img`
  display:block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 25px;
  border: 2px solid black;
  z-index: -1;
  src: ${props => props.url};
`;

export default function DogImageCard(props) {
  const {url} = props;
  
  return (
    <Wrapper>
      <Image src={url} alt="A dog"/>
    </Wrapper>
  );
}
