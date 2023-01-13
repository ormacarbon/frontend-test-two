import React, { useState, useEffect } from 'react';
import DogCard from '../components/dogCard';
import { getDogFact } from "../services/api";

function Dog() {
  const [fact, setFact] = useState();

  useEffect(() => {
    getFact();
  }, []);

  async function getFact() {
    const data = await getDogFact();
    const result = {
      title: data.data[0].type,
      text: data.data[0].attributes.body,

    }
    setFact(result);
    console.log(result);
  }
  
  if (fact === undefined) {
    return (
      <>
        {console.log('1')}
        Still loading...
      </>
    )
  }
  return (
    <>
      {console.log(fact)}
      <h1>Dog Page</h1>
      <DogCard { ...fact}/>
    </>
  );
}
  
export default Dog