import React, { useState, useEffect } from 'react';
import CatCard from '../components/catCard';
import { getCatMessage } from '../services/api';

function Cat() {
  const [url, setUrl] = useState();
  const [message, setMessage] = useState();

  async function getCat(yourMessage) {
    const data = await getCatMessage(yourMessage);
    const result = {
      url: data.url
    }
    setUrl(result);
    console.log(data);
  }

  function generateCatMessage(event) {
    getCat(message)
  }

  return (
    <>
      <h1>Cat Page</h1>
      <form> 
          <label htmlFor="message">Message:</label><br />
          <input type="text" id="message" name="message" value={message} placeholder='your text' onChange={event => setMessage(event.target.value)} /><br />
          <button type="button" onClick={() => generateCatMessage()}>Submit</button>
      </form>
      <CatCard {...url}/>
    </>
  );
}

export default Cat