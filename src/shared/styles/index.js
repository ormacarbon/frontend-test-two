import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
     *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  
  html, body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textColor};
    font-family: 'Inter', sans-serif;
  }
  


  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  .flex {
    display: flex;
    gap: 1rem;
  }

  .center {
    align-items: center;
    justify-content: center;
  }

  .column {
    flex-direction: column;
  }

  .between {
    justify-content: space-between;
  }

  .grid {
    display: grid;
  }

  .responsive-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
    place-items: center;
  }



 ul {
  list-style: none;
 }
  
 h2 {
  margin-bottom: 1rem;
 }

 h1  {
  font-size: 3.2rem;
 }
  
  img.avatar {
     max-width: 100%;
    object-fit: cover;
    border-radius: 1rem;
    transition: opacity 0.3s ease;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }

  button {
    background-color: ${({ theme }) => theme.colors.blue[800]};
    padding: 1rem;
    border-radius: 3px;
    color: inherit;
    transition: background .4s ease;
  }

  button:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.blue[700]};
  }

hr{
  margin: 0.5rem 0;
}

  input, select {
    padding: 0.5rem;
    outline: none; 
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.colors.grey[500]};
  color: ${({ theme }) => theme.colors.white};

    &:is(select){
      cursor: pointer;
    }
  
    &::placeholder {
      color: inherit;
    }
  }

  .col {
    flex-direction: column;
  }

 




`;

export default globalStyles;
