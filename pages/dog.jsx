import React, { useState, useEffect } from 'react';
import DogCard from '../components/DogCard';
import NavBar from '../components/NavBar';
import DogImageCard from '../components/DogImageCard';
import { getDogFact, getDogImage } from "../services/api";
import { Container, Box, BoxTitle, BoxText } from '../styles/DogStyles';

function Dog() {
  const [fact, setFact] = useState();
  const [images, setImages] = useState();

  useEffect(() => {
    getFactAndImages();
  }, []);

  async function getFactAndImages() {
    const dataFact = await getDogFact();
    const dataImages = await getDogImage();

    const resultFact = [{
      title: dataFact.data[0].type,
      text: dataFact.data[0].attributes.body,

    }]
    /* const resultImage = {
      title: dataImages.message,

    } */
    setImages(dataImages.message);
    setFact(resultFact);
  }
  
  if (fact === undefined) {
    return (
      <>
        Still loading...
      </>
    )
  }
  return (
    <>
    <h1>Dog Page</h1>
    {/* <DogCard { ...fact}/> */}
    <Container>
      {fact.map(box => (
        <Box key={box.id} bgColor={box.bgColor}>
          <BoxTitle>{box.title}</BoxTitle>
          <BoxText>{box.text}</BoxText>
        </Box>
      ))}
    </Container>
    {images.map((url, index) => (
      <DogImageCard key={ index } { ...{url} } />
    ))}
    </>
  );
}
  
export default Dog