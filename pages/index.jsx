import NavBar from '../components/navBar';
import { Container, Box, BoxTitle, BoxText } from '../styles/HomeStyles';
import React from 'react';

export default function Home() {

  const data = [
    {
      id: 1,
      title: "Box title 1",
      text: "Test",
      bgColor: "#D5CAFA"
    }
  ];

  return (
      <>
        <NavBar />
        <Container>
          {data.map(box => (
            <Box key={box.id} bgColor={box.bgColor}>
              <BoxTitle>{box.title}</BoxTitle>
              <BoxText>{box.text}</BoxText>
            </Box>
          ))}
        </Container>
        Teste
      </>
  );
}