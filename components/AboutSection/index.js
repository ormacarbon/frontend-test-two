import { Title, Paragraph } from "../../styles/global";
import { Template } from "./styles";

const AboutSection = () => {
  return (
    <Template>
      <Title>About</Title>
      <Paragraph>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </Paragraph>
      <Paragraph>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English of a page when looking at its layout. The
        point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters of a page when looking at its layout. The point
        of using Lorem Ipsum is that it has a more-or-less normal distribution
        of letters.
      </Paragraph>
      <Paragraph>
        It is a long established fact that a reader will be distracted by the
        readable content.
      </Paragraph>
      <Paragraph>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters..
      </Paragraph>
    </Template>
  );
};

export default AboutSection;
