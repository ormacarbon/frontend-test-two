// import Image from "next/image";
import { Wrapper, Image } from '../styles/CatStyles';

export default function CatCard(props) {
  const {url} = props;
  return (
    <Wrapper>
      <Image src={url} alt="A cat" />
    </Wrapper>
  );
}