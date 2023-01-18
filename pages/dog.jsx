import React, { useState, useEffect } from 'react';
import Carousel from "react-elastic-carousel";
import DogImageCard from '../components/DogImageCard';
import { getDogFact, getDogImage } from "../services/api";

function Dog() {
  const [fact, setFact] = useState();
  const [images, setImages] = useState();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  useEffect(() => {
    getFactAndImages();
  }, []);

  async function getFactAndImages() {
    // const dataFact = await getDogFact();
    const dataImages = await getDogImage();
    console.log(dataImages)

    /* const resultFact = [{
      title: dataFact.data[0].type,
      text: dataFact.data[0].attributes.body,
    }] */
    /* const resultImage = {
      title: dataImages.message,

    } */
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
    <h1>Dog Page</h1>
    <Carousel breakPoints={breakPoints}>
    {images.map((url, index) => (
      <DogImageCard key={ index } { ...{url} } />
    ))}
    </Carousel>
    {/* <DogCard { ...fact}/> */}
    {/* <Container>
      {fact.map(box => (
        <Box key={box.id} bgColor={box.bgColor}>
          <BoxTitle>{box.title}</BoxTitle>
          <BoxText>{box.text}</BoxText>
        </Box>
      ))}
    </Container> */}
    {/* <Gallery>
      {images.map((url, index) => (
        <ImageComponent key={ index } { ...{url} } />
        ))}
		</Gallery> */}
    {/* <Content>
        <CarouselComponent>
          <div>1</div>
          <div />
          <div />
          <div />
          <div />
        </CarouselComponent>
      </Content> */}
    {/* {images.map((url, index) => (
      <DogImageCard key={ index } { ...{url} } />
    ))} */}
    </>
  );
}
  
export default Dog