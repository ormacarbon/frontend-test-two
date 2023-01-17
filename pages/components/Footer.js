import styled from "styled-components";

const Footer_style = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFBB33;
    background-color: #000;
    height: 100px;
    width: 100%;
    margin-top: 2em;
    border-top: 3px  solid #FFBB33;
    
    @media (max-width: 768px) {
    display: flex;
    width: auto;
    height: 80px;
    
  }
  @media (max-width: 320px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    
  }
    
`
const Span = styled.span`
    font-weight: bold;
`

export default function Footer() {
    return (
       <Footer_style>
          <p><Span>Jikan Lib</Span> &copy; {new Date().getFullYear()}</p>
       </Footer_style>
    );
 }; 