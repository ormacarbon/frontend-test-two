import Link from 'next/link';
import styled from 'styled-components';

const ContactStyle = styled.div`
  text-align: center;
  min-height: 100vh;
`;
const H1 = styled.h1`
  font-size: 2em;
  margin-bottom: 1em;
`;
const Paragrafo = styled.p`
  max-width: 500px;
  margin: 0 auto 1.5em;
  line-height: 1.4em;
  font-weight: bold;
`;
const Ul = styled.ul`
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
   

    li{
        padding-bottom: 2em;
        border-color: #000;
    }
    a{
      text-decoration: none;
      color: #000;
      font-size: 12pt;
      transition: .4s;
    border-bottom: 2px solid transparent;

    }
    a:hover{
    border-color: rgba(255 0 25);
  }
    
`
export default function Contact() {
  return (
    <>
      <ContactStyle>
        <H1>Contact</H1>
        <Paragrafo>Developed by Emerson Araújo</Paragrafo>
        <Ul>
                    <li><Link href='#'>Telegram</Link></li>
                    <li><Link href='#'>Facebook</Link></li>
                    <li><Link href='#'>Instagram</Link></li>
                    <li><Link href='#'>YouTube</Link></li>
                    <li><Link href='#'>Twitch</Link></li>
                    <li><Link href='#'>Linkedln</Link></li>
                    <li><Link href='#'>Discord</Link></li>
                </Ul>
      </ContactStyle>
    </>
  );
}
