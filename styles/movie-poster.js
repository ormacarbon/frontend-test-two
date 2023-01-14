import styled from "styled-components";

export const MovieContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
cursor: default;
height: 100%;
`

export const MoviePoster = styled.img`
height: 100%;
width: 100%;
display: grid;
border-radius: 0.5rem;
transition: all 0.2s;
cursor: pointer;
border: 1px solid var(--separator-color);
justify-content: center;
color: var(--font-color);
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;


&:hover {
  transform: scale( 1.05 );
}
`