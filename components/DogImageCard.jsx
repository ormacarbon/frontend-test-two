import styled from "styled-components";
import px2vw from "../services/px2vw";

const Wrapper = styled.div`
  position: relative;
  width: ${px2vw(600)};
  height: ${px2vw(600)};
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 15px;
  background: linear-gradient(to right, #11998e,#38ef7d);
  padding: ${px2vw(10)};

  margin-top: 10%;
  @media (min-width: 550px) {
    width: ${px2vw(400)};
    height: ${px2vw(400)};
  }
`;

const Image = styled.img`
  display:block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 25px;
  border: 2px solid black;
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
