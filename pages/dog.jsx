import React, { useState, useEffect } from 'react';
import DogCard from '../components/dogCard';
import NavBar from '../components/navBar';
import DogImageCard from '../components/dogImageCard';
import { getDogFact, getDogImage } from "../services/api";

function Dog() {
  const [fact, setFact] = useState();
  const [images, setImages] = useState();

  useEffect(() => {
    getFactAndImages();
  }, []);

  async function getFactAndImages() {
    const dataFact = await getDogFact();
    const dataImages = await getDogImage();

    const resultFact = {
      title: dataFact.data[0].type,
      text: dataFact.data[0].attributes.body,

    }
    /* const resultImage = {
      title: dataImages.message,

    } */
    setImages(dataImages.message);
    setFact(resultFact);
    console.log(dataImages.message);
  }
  
  if (fact === undefined) {
    return (
      <>
      <NavBar />
        Still loading...
      </>
    )
  }
  return (
    <>
    <NavBar />
    <h1>Dog Page</h1>
    <DogCard { ...fact}/>
    {images.map((url, index) => (
      <DogImageCard key={ index } { ...{url} } />
    ))}
    </>
  );
}
  
export default Dog