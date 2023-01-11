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


&:hover {
  transform: scale( 1.05 );
}
`

export const MovieTitle = styled.div`
font-size: 1rem;
color: #f4f1de;
margin-top: 1rem;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 1; 
line-clamp: 1; 
-webkit-box-orient: vertical;
`