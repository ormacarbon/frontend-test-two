import styled from "styled-components";

export const MovieBackgroundMask = styled.div`
background-image: linear-gradient(90deg,#14181d 0,rgba(20,24,29,.986) .97%,rgba(20,24,29,.945) 2.07833333%,rgba(20,24,29,.883) 3.29666667%,rgba(20,24,29,.803) 4.60166667%,rgba(20,24,29,.711) 5.96666667%,rgba(20,24,29,.61) 7.365%,rgba(20,24,29,.504) 8.77166667%,rgba(20,24,29,.398) 10.16%,rgba(20,24,29,.296) 11.505%,rgba(20,24,29,.203) 12.78%,rgba(20,24,29,.122) 13.95833333%,rgba(20,24,29,.059) 15.01666667%,rgba(20,24,29,.016) 15.92833333%,rgba(20,24,29,0) 16.66666667%,rgba(20,24,29,0) 83.33333333%,rgba(20,24,29,.016) 84.07166667%,rgba(20,24,29,.059) 84.98333333%,rgba(20,24,29,.122) 86.04166667%,rgba(20,24,29,.203) 87.22%,rgba(20,24,29,.296) 88.495%,rgba(20,24,29,.398) 89.84%,rgba(20,24,29,.504) 91.22833333%,rgba(20,24,29,.61) 92.635%,rgba(20,24,29,.711) 94.03333333%,rgba(20,24,29,.803) 95.39833333%,rgba(20,24,29,.883) 96.70333333%,rgba(20,24,29,.945) 97.92166667%,rgba(20,24,29,.986) 99.03%,#14181d),linear-gradient(0deg,#14181d 0,#14181d 21.48148148%,rgba(20,24,29,.986) 23.63703704%,rgba(20,24,29,.945) 26.1%,rgba(20,24,29,.883) 28.80740741%,rgba(20,24,29,.803) 31.70740741%,rgba(20,24,29,.711) 34.74074074%,rgba(20,24,29,.61) 37.84814815%,rgba(20,24,29,.504) 40.97407407%,rgba(20,24,29,.398) 44.05925926%,rgba(20,24,29,.296) 47.04814815%,rgba(20,24,29,.203) 49.88148148%,rgba(20,24,29,.122) 52.5%,rgba(20,24,29,.059) 54.85185185%,rgba(20,24,29,.016) 56.87777778%,rgba(20,24,29,0) 58.51851852%);
width: 950px;
height: 534px;
position: absolute;
background-repeat: no-repeat;
left: 50%;
transform: translateX(-50%);
top: 3rem;
`

export const MovieBanner = styled.img`
mask-image: linear-gradient(180deg, transparent 1%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 100%, transparent 95%);
opacity: 0.3;
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
  color: #fff;
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
  font-weight: 300;
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
background: rgb(48, 56, 64);
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
background-color: #abc;
height: 16px;
margin-inline: 12px;
`
export const InfoFooterLink = styled.a`
  padding-inline: 6px;
  border-radius: 2px;
  border: 2px solid #abc;
  transition: all 0.2s;
  font-weight: 600;
  margin-left: 0.5rem;

  &:hover {
    color: black;
    background: #f5c518;
    border: 2px solid #f5c518;
  }
`