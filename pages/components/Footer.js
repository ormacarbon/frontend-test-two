import styled from "styled-components";

const Footer_style = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    background-color: #333;
    height: 116px;
    margin-top: 2em;
    border-top: 2px  solid #FFBB11;
`
const Span = styled.span`
    font-weight: bold;
`

export default function Footer() {
    return (
       <Footer_style>
          <p><Span>Pokémon</Span> &copy; {new Date().getFullYear()}</p>
       </Footer_style>
    );
 }; 