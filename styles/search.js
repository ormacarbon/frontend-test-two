import styled from "styled-components";

export const SearchMovieList = styled.div`
  
`

export const SearchMoviePoster = styled.img`
  width: 100px;
  height: 150px;
  cursor: pointer;

`

export const SearchMovieContainer = styled.div`
  display: flex;
  height: 100%;
  margin-block: 1rem;
  align-items: center;
`

export const SearchDescriptionContainer = styled.div`
  margin-left: 2rem;

`

export const SearchMovieTitle = styled.h1`
font-weight: 600;
margin-bottom: 0.5rem;
color: #fff;
cursor: pointer;

&:hover {
  color: #a8dadc;
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
  -webkit-line-clamp: 3;
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
`