import styled from "styled-components";
const Loader = () => {

  const LoaderContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  `

  return (
    <LoaderContainer>
      <div className="lds-ripple"><div></div><div></div></div>
    </LoaderContainer>
  )
}

export default Loader