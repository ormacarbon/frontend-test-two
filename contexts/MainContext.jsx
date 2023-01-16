import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

export const MainContext = createContext({})

const MainProvider = ({ children }) => {
  const router = useRouter();

  const [ search, setSearch ] = useState("storyTelling");
  const [ dataBooks, setDataBooks ] = useState({});
  const [ page, setPage ] = useState(0);
  const [ book, setBook ] = useState({})
  const [ loading, setLoading ] = useState(false)
  const [ theme, setTheme ] = useState(light)

  const fetchAllBooks = async() => {
    try {
      setLoading(true)
      const res =  await fetch(`https://www.googleapis.com/books/v1/volumes?q=flowers+intitle:${search}&startIndex=${page}&maxResults=15&projection=lite&key=AIzaSyDBqWgKEp9tGl75UGGvXe-IQz_7VRKo8ek`)
      const data = await res.json()
    
      if(!data){
        throw "Error in Request"
      }
    
      setDataBooks(data)
    
    } catch (error) {
      console.error(error)
    }finally{
      setLoading(false)
    }
  }

  const fetchBookId = async() => {
    const bookId = router.query.bookId
    try {
      
      const res =  await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      const data = await res.json()
      
      if(!data){
        throw "Error in Request"
      }
      
      setBook(data)
      
    } catch (error) {
      console.error(error)
    }
  }

  const nextPage = ()=>{
    if(page < dataBooks.totalItems && dataBooks.totalItems > 15){
      setPage(page + 15)  
    }
  }
    
  const previosPage = ()=>{
    if(page > 0){
      setPage(page - 15)  
    }
  }

  const toogleTheme = () => {
    setTheme(theme.title == 'light' ? dark : light)
  }

  return(
    <MainContext.Provider value={{
      search, setSearch, dataBooks, page, setPage, 
      fetchAllBooks, nextPage, previosPage, book, 
      fetchBookId, loading, setLoading, toogleTheme
    }}>
      <ThemeProvider theme={theme}>
      { children }
      </ThemeProvider>
    </MainContext.Provider>
  )
}

export default MainProvider;