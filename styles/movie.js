import styled from "styled-components";

export const MovieBackgroundMask = styled.div`
width: 950px;
height: 534px;
position: absolute;
background-repeat: no-repeat;
left: 50%;
transform: translateX(-50%);
top: 3rem;
`

export const MovieBanner = styled.img`
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 60%);opacity: 0.3;
  width: 950px;
  height: 534px;
  transform: translateX(-50%);
  left: 50%;
  position: absolute;
  z-index: -1;
  top: 3rem;
`

export const MovieContainer = styled.div`
margin-bottom: 5rem;
`

export const MoviePoster = styled.img`
width: 230px;
border-radius: 10px
`

export const MovieInformation = styled.div`
  margin-left: 2rem;
  `

export const MovieTitleContainer = styled.div`
    
`

export const MovieTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--font-color);
  margin-right: 1rem;
  display: inline-block;
  margin-bottom: 0.5rem;
`
export const TitleComplement = styled.span`
  margin-right: 1rem;
  font-weight: 300;
  display: inline-block;
`
export const OriginalTitle = styled.div`
  margin-block: 1rem;
`
export const Overview = styled.div`
  font-weight: 400;
  margin-top: 2rem;
  line-height: 1.25;
`

export const MovieInformationContainer = styled.div`
  margin-top: 160px;
  color: #fff;
  position: relative;
  z-index: 2;
  display: flex;
`

export const CastInformation = styled.div`
  margin-top: 2rem;
  width: 500px
`

export const InformationTitle = styled.span`
  font-weight: 300;
  font-size: 0.925rem;
  margin-bottom: 0.5rem;
  display: inline-block;
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
/* cursor: pointer; */
`

export const InfoFooterContainer = styled.div`
  margin-top: 1.5rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  `

export const InfoFooterContent = styled.span`
/* margin-right: 0.5rem */
  
`
export const Separator = styled.span`
display: inline-block;
width: 2px;
background-color: var(--font-color);
height: 16px;
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