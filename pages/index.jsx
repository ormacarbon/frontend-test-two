/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";

import Image from "next/image";
import Head from "next/head";

import PageNavigator from "../components/PageNavigator";
import InputSearch from "../components/InputSearch";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

import { HomeStyle } from "../styles/home/style";
import ilustrationImage from "../assets/ilustration1.svg"
import { MainContext } from "../contexts/MainContext";


export default function Home() {
  const {  search, dataBooks, page, fetchAllBooks, loading } = useContext(MainContext)

  useEffect(()=>{
    fetchAllBooks()

  },[page])

  useEffect(()=>{
    fetchAllBooks()
    
  },[search])

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <HomeStyle>
        <section>
          <div className="container">
            <Navbar backgroundColor="none" />
            <div>
              <div>
                <h1>
                  Books are a uniquely portable magic.
                </h1>
                <InputSearch />
              </div>
              <figure>
                <Image src={ilustrationImage} alt="Image Ilustration" />
              </figure>
            </div>
          </div>
        </section>
        <main>
          <ul>
            {
              loading && <h2>Loading Information...</h2>
            }
            
            { dataBooks.items ? dataBooks.items.map(book => (
                <Card
                  id={book.id} 
                  key={book.id} 
                  src={book.volumeInfo.imageLinks.smallThumbnail}
                  name={book.volumeInfo.title}
                  authors={book.volumeInfo.authors} 
                />
            )) : (
              <h2>No book found with that title.</h2>
            ) 

            }
          </ul>
        </main>
        <PageNavigator />
      </HomeStyle>
    </>
  )
}
