/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect } from "react";

import Navbar from "../../components/Navbar";
import { MainContext } from "../../contexts/MainContext";

import { BookStyle } from "../../styles/bookID/style";

const Book = () => {
  const { fetchBookId, book } = useContext(MainContext)

  useEffect(()=>{
    fetchBookId()
  },[])

  return(
    <>
      <Head>
        <title>Book</title>
      </Head>

      <Navbar backgroundColor="#000000" />
      <BookStyle>
        {
          book.id && <>
            <div>
              <h1>{book.volumeInfo.title}</h1>
              <p>{book.volumeInfo.authors ?  book.volumeInfo.authors[0] : "Unknown author"}</p>
            </div>
            <section>
              <Image src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} width={280} height={280} />
              <div>
                <p>{book.volumeInfo.description}</p>
                <div>
                  <p>Page count : {book.volumeInfo.pageCount}</p>
                   <p>Categories : {book.volumeInfo.categories ? book.volumeInfo.categories[0] : "No category specified."  }</p>
                </div>
              </div>
            </section>
          </>
        }
      </BookStyle>
    </>
    )
}

export default Book;