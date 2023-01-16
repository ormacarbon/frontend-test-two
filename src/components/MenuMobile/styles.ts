import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;

  background: rgba(17, 18, 17, 0.95);
  background: linear-gradient(34deg, gray 0%, rgba(17,18,17,0.95) 95%);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  
  strong {
    font-size: 2rem;
    padding: 2rem;
  }

  a {
    text-decoration: none;
    color: white;
  }

`