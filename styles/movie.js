import styled from "styled-components";

export const MovieBanner = styled.img`
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 60%);opacity: 0.3;
  max-width: 950px;
  max-height: 534px;
  width: 100%;
  transform: translateX(-50%);
  left: 50%;
  position: absolute;
  z-index: -1;
  top: 3rem;

  @media (max-width: 1279px) {
    top: 3rem;
  }
  @media (max-width: 780px) {
    top: 10rem;
  }
`

export const MovieContainer = styled.div`
margin-bottom: 5rem;
`

export const MoviePosterContainer = styled.div`
  max-width: 250px;
  min-width: 250px;
  width: 100%;

  @media (max-width: 780px) {
    margin-bottom: 3rem;
  }
`

export const MoviePoster = styled.img`
width: 100%;
border-radius: 10px;
height: 100%;
max-height: 370px;
border: 1px solid var(--font-color);
`

export const MovieInformation = styled.div`
  margin-left: 2rem;
  
  @media (max-width: 780px) {
    margin-left: unset;
  }
  `

export const MovieTitleContainer = styled.div`

@media (max-width: 780px) {
    top: 10rem;
  }
    
`

export const MovieTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--font-color);
  margin-right: 1rem;
  display: inline-block;
  margin-bottom: 0.5rem;
`
export const TitleComplement = styled.div`
  margin-right: 1rem;
  font-weight: 300;
  display: inline-block;
  a {
    font-weight: 500;
    border-bottom: 1px solid var(--font-color);
  }


  @media (max-width: 780px) {
  }
`

export const TitleComplementDate = styled(TitleComplement)`
  display: inline-block !important;
  margin-block: 1rem;
  border-bottom: unset;
`
export const MovieGenres = styled.div`
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 0.825rem
`
export const Overview = styled.div`
  font-weight: 600;
  margin-top: 2rem;
  line-height: 1.25;
`

export const MovieInformationContainer = styled.div`
  margin-top: 160px;
  padding-inline: 2rem;
  color: #fff;
  position: relative;
  z-index: 2;
  display: flex;

  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  }
`

export const CastInformation = styled.div`
  margin-top: 2rem;
`

export const InformationTitle = styled.span`
  font-weight: 600;
  font-size: 0.925rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  cursor: pointer;

  :not(:first-child) {
    margin-left: 0.5rem;
  }
`

export const CastItem = styled.span`
background: var(--cast-info-color);
color: rgb(221, 238, 255);
margin: 6px;
margin-bottom: unset;
margin-left: unset;
padding: 6px 8px;
display: inline-block;
font-size: 0.725rem;
border-radius: 4px;
`

export const InfoFooterContainer = styled.div`
  margin-top: 1.5rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  `

export const InfoFooterContent = styled.span`
  
`
export const Separator = styled.span`
display: inline-block;
width: 2px;
background-color: var(--separator-color);
height: 18px;
margin-inline: 12px;
`
export const InfoFooterLink = styled.a`
  padding-inline: 6px;
  border-radius: 2px;
  border: 2px solid var(--font-color);
  transition: all 0.2s;
  font-weight: 600;
  margin-left: 0.5rem;

  &:hover {
    color: black;
    background: #f5c518;
    border: 2px solid #f5c518;
  }
`