import {
  NewsContainer,
  Image,
  Title,
  Paragraph,
  FlexDiv,
  Link,
} from "./styles";
import Arrow from "../../assets/arrow";

const News = () => {
  return (
    <NewsContainer>
      <Image
        src="https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/01/Kleanbus_.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"
        alt="Teste"
      />
      <div>
        <Title>
          Here’s how this company turns diesel buses into electric buses
        </Title>
        <Paragraph>
          Kleanbus, which just completed its first prototype vehicle, strips
          diesel engines out of five- to 10-year-old buses and replaces them
          with electric powertrains.\n more…\nThe post Here’s how this company
          turns diesel buses into electric buses appeared first on E…
        </Paragraph>
        <FlexDiv>
          <span>20/05/2021 • 16h36</span>
          <Link href="https://electrek.co/2023/01/12/heres-how-this-company-turns-diesel-buses-into-electric-buses">
            Full Story
            <Arrow />
          </Link>
        </FlexDiv>
      </div>
    </NewsContainer>
  );
};

export default News;
