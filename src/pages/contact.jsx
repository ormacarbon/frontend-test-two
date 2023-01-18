import React from 'react';
import { useRouter } from 'next/router';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Contact = () => {
  const router = useRouter();

  return (
    <>
    <Navbar />
    <Hero>
      <h3>Do you want to know more about Next UserDB?</h3>
      <p>Send us an email.</p>
      <p>We&apos;ll get back to you in a few hours.</p>
      <input type="email" placeholder='Your email' />
      <textarea cols="30" rows="10" placeholder='Enter your message'></textarea>
      <button>Send message</button>
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

export default Contact
