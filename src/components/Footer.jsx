import Script from 'next/script';
import styled from 'styled-components';
import { HeadingLine } from './HeadingLine';
import { IconContext } from "react-icons";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, BsGithub } from 'react-icons/fa';
import { GoMarkGithub } from "react-icons/go";
import Link from 'next/link';

const FooterStyles = styled.div`
  border-top: 1px solid ${({ theme }) => theme.line};
  color: var(--gray-100);
  background-origin: border-box;
  background-repeat: no-repeat;
  letter-spacing: 1px;
  padding-bottom: 14.125rem;
  padding-top: 14.625rem;
  text-align: center;

  h2 {
    padding-bottom: 1rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  a {
    margin: 0px;
  }

  .footer-icons {
    padding: 3px;
  }

  .footer-icons:hover {
    color: var(--reddark);
    transition: 200ms ease;
  }
 
`
const NoScriptBg = styled.div`
    
  background-image: url("assets/img/backgrounds/footer1.jpg");
  background-size: cover;
  z-index: -999;
`

export function Footer(props) {
  return(
    <NoScriptBg>
      <div className="footer-bg" id="contact">
        {!props.nobg ? 
          <>
            <Script src='../assets/js/scripts.js' /> 
            <Script src='../assets/js/jquery.backstretch.js' />  
          </>
          : ""}
        <FooterStyles>
          <div className="wrapper">
            <h2>© André Horbach</h2>
            <p>andrecomexdev@gmail.com</p>
            <p> Follow me: </p>
            <p>
              <IconContext.Provider value={{ size: "2rem", className: 'footer-icons'}}>
              
              <Link href="https://www.instagram.com/andre.horbach/" target="_blank"><FaInstagramSquare /></Link>
              <Link href="https://www.linkedin.com/in/andrehorbach/" target="_blank"><FaLinkedin /></Link>
              <Link href="https://www.facebook.com/profile.php?id=100002359065660&mibextid=ZbWKwL" target="_blank"><FaFacebookSquare /></Link>
              <Link href="https://github.com/andrehorbach" target="_blank"><GoMarkGithub /></Link>
              </IconContext.Provider>
            </p>
            <HeadingLine />
            <p>A test website for Orma Carbon®</p>
          </div>
        </FooterStyles>
      </div>
    </NoScriptBg>
  )
}