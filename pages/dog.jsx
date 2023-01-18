import React, { useState, useEffect } from 'react';
import Carousel from "react-elastic-carousel";
import DogImageCard from '../components/DogImageCard';
import { getDogFact, getDogImage } from "../services/api";
import { ContainerCenter } from '../styles/DogStyles';

function Dog() {
  // const [fact, setFact] = useState();
  const [images, setImages] = useState();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];

  useEffect(() => {
    getFactAndImages();
  }, []);

  async function getFactAndImages() {
    // const dataFact = await getDogFact();
    const dataImages = await getDogImage();

    /* const resultFact = [{
      title: dataFact.data[0].type,
      text: dataFact.data[0].attributes.body,
    }] */
    setImages(dataImages.message);
    // setFact(resultFact);
  }
  
  if (images === undefined) {
    return (
      <>
        Still loading...
      </>
    )
  }
  return (
    <>
    <ContainerCenter>
      <Carousel breakPoints={breakPoints}>
      {images.map((url, index) => (
        <DogImageCard key={ index } { ...{url} } />
      ))}
      </Carousel>
    </ContainerCenter>
    {/* <Container>
      {fact.map(box => (
        <Box key={box.id} bgColor={box.bgColor}>
          <BoxTitle>{box.title}</BoxTitle>
          <BoxText>{box.text}</BoxText>
        </Box>
      ))}
    </Container> */}
    </>
  );
}
  
export default Dog