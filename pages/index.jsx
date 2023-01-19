import { Container, Box, BoxTitle, BoxText } from '../styles/HomeStyles';
import React from 'react';

export default function Home() {

  const data = [
    {
      id: 1,
      title: "A LONG RELATIONSHIP",
      text: ["Men and animals share a long relationship. Animals have played a huge role in the lives of human beings, becoming an integral part of our survival, our history and our very identity. It is believed that the domestication of animals dates back to around 12,000 years ago, in the Neolithic period: when man learned to cultivate the land, he also learned to raise animals as a food reserve. The association between humans and animals enabled a co-evolution, in which both parties could change to adapt to a new reality.", "Domesticated animals, compared to wild animals, have undergone numerous changes in behavior, physiology, and morphology. This would explain why today's domestic dogs are so different from their ancestor, the gray wolf. These changes include, in addition to greater docility, genetic changes in size, color and facial features.", "Recently, a study carried out at Harvard University, in the United States, showed that these alterations may have been even more profound. In an analysis based on magnetic resonance imaging, neuroscientist Erin Hecht demonstrated that living with humans altered the brain structure of dogs. Breeds are known to vary in cognition, temperament, and behavior, but the neural origins of this variation are unknown. The research results pointed out that, through selective breeding, humans significantly altered the brains of different strains of domestic dogs, in several ways.", " But this is a two-way street. Coexistence with animals has also changed human beings. Perhaps the most popular example is milk consumption: before animal domestication, people naturally developed lactose intolerance as they grew and no longer needed breast milk. When humans began to raise livestock, they began to drink more milk, and the digestive system adapted to accommodate milk throughout life."],
      bgColor: "#D5CAFA"
    }
  ];

  return (
    <>
      <Container>
        <Box bgColor={data.bgColor}>
          <BoxTitle>{data[0].title}</BoxTitle>
          {data[0].text.map(elem => (
            <BoxText key={data[0].id}>{elem}</BoxText>
          ))}
        </Box>
      </Container>
    </>
  );
}