import styled from "styled-components";

export const SearchPageContainer = styled.div`
    padding-inline: 2rem;
`

export const SearchPageInformation = styled.div`
  text-align: center;
  line-height: 1.25;
`

export const SearchMovieList = styled.div`
`

export const SearchMoviePoster = styled.img`
  width: 100px;
  height: 150px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid var(--separator-color);
`

export const SearchListContainer = styled.div`
  margin-block: 3rem;
  `

export const SearchMovieContainer = styled.div`
  display: flex;
  height: 100%;
  margin-block: 2rem;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--separator-color);
`

export const SearchDescriptionContainer = styled.div`
  margin-left: 2rem;

`

export const SearchMovieTitle = styled.h1`
font-weight: 600;
margin-bottom: 0.5rem;
color: var(--font-color);
cursor: pointer;

&:hover {
  color: var(--font-hover-color);
}
`

export const SearchMovieOriginalTitle = styled.h2`
font-size: 0.875rem;
margin-bottom: 0.5rem;

`

export const SearchMovieDescription = styled.p`
  font-size: 0.75rem;
  margin-bottom: 1rem;
  line-height: 1.3;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
`
export const SearchMovieRatingContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SearchMovieRating = styled.div`
  margin-top: 2px;
  margin-left: 0.5rem;
`