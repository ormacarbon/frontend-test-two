import React from 'react';
import { useRouter } from 'next/router';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const About = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <Hero>
        <h1>We are Next UserDB.</h1>
        <p>A company that is specialized in keeping your information safe.</p>
        <p>We can help you save your info against malicious people.</p>
        <p>Here in our safe database you are protected against:</p>
        <ul>
          <li>Hackers</li>
          <li>Phishing</li>
          <li>Annoying Ads</li>
          <li>Ramsonware</li>
          <li>Virus</li>
          <li>And all sorts of malicious software or people</li>
        </ul>
        <button
          type='button'
          onClick={() => router.push('/')}
        >
          Back to home
        </button>
      </Hero>
    </>
  )
}

export default About
