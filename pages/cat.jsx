import React, { useState, useEffect } from 'react';
import CatCard from '../components/catCard';
import { getCatMessage } from '../services/api';

function Cat() {
  const [url, setUrl] = useState();

  useEffect(() => {
    getCat();
  }, []);

  async function getCat() {
    const data = await getCatMessage();
    const result = {
      url: data.url
    }
    setUrl(result);
  }

  if (url === undefined) {
    return (
      <>
        Still loading...
      </>
    )
  }
  return (
    <>
      {console.log(typeof(url))}
      <h1>Cat Page</h1>
      <CatCard {...url}/>
    </>
  );
}

export default Cat