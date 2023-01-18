import React, { useState, useEffect } from 'react';
import CatCard from '../components/CatCard';
import { Label, Form, Input, Button, Container } from '../styles/CatStyles';
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
  }

  function generateCatMessage(event) {
    getCat(message)
  }

  if (url === undefined) {
    return (
      <>
        <form>
          <Form>
            <div>
              <Input placeholder="Name" name="name" id='name' onChange={event => setMessage(event.target.value)} value={message} />
              <Label htmlFor="name">Message:</Label>
            </div>
            <Button type="button" onClick={() => generateCatMessage()}>Submit</Button>
          </Form>
        </form>
      </>
    )
  }

  return (
    <>
      <form>
        <Form>
          <div>
            <Input placeholder="Name" name="name" id='name' onChange={event => setMessage(event.target.value)} value={message} />
            <Label htmlFor="name">Message:</Label>
          </div>
          <Button type="button" onClick={() => generateCatMessage()}>Submit</Button>
        </Form>
      </form>
      <Container>
        <CatCard {...url}/>
      </Container>
    </>
  );
}

export default Cat