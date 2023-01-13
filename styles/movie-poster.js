import styled from "styled-components";

export const MovieContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 0.5rem;
cursor: default;
`

export const MoviePoster = styled.img`
height: 225px;
width: 150px;
display: grid;
border-radius: 0.5rem;
transition: all 0.2s;
cursor: pointer;
border: 1px solid #abc;
justify-content: center;
color: #abc;

img [alt] {
  padding: 2rem;
  border: 3px solid red;
}


&:hover {
  transform: scale( 1.05 );
}
`