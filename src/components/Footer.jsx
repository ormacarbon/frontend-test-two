import Script from 'next/script';
import styled from 'styled-components';
import { HeadingLine } from './HeadingLine';

const FooterStyles = styled.div`
  border-top: 1px solid var(--gray-600);
  background-origin: border-box;
  background-repeat: no-repeat;
  letter-spacing: 1px;
  padding-bottom: 12.125rem;
  padding-top: 12.625rem;
  text-align: center;

  h2 {
    padding-bottom: 1rem;
  }

  
  .headerMenu {
      display: none;
    }
`
export function Footer(props) {
  return(
    <div className="footer-bg">
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
          <HeadingLine />
          <p>A test website for Orma Carbon®</p>
        </div>
      </FooterStyles>
    </div>
  )
}