import {
  BackgroundContainer,
  CoverContainer,
  PreTitle,
  Title,
  MainText,
  TextContainer,
} from "./styles";

const Cover = ({ preTitleText, titleText, mainText }) => {
  return (
    <BackgroundContainer>
      <CoverContainer>
        <TextContainer className="animated">
          {preTitleText && <PreTitle>{preTitleText}</PreTitle>}
          <Title>{titleText}</Title>
          {mainText && <MainText>{mainText}</MainText>}
        </TextContainer>
      </CoverContainer>
    </BackgroundContainer>
  );
};

export default Cover;
