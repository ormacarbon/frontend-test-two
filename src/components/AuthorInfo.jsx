import styled from 'styled-components';
import blogLogo from '../assets/img/logo-dark.svg';
import Image from 'next/image';
import Script from 'next/script';

const AuthorInfoStyles = styled.div`
  
  background-origin: border-box;
  background-repeat: no-repeat;
  padding-bottom: 8.125rem;
  padding-top: 10.625rem;
  text-align: center;

  
  h1 {
    font-family: 'BigNoodleTitling', sans-serif;
    font-style: oblique;
    font-size: 2.5rem;
    font-weight: 500;
    letter-spacing: 3px;
    margin: 2.5rem 0 2.5rem 0;
  }

  p {
    margin-bottom: 7px;
  }

  p:nth-child(5) {
    padding-bottom: 1.875rem;
  }

`

const Button = styled.button`
  background: ${props => (props.primary ? "var(--reddark)" : "var(--alpha-30)")};
  border: ${props => (props.primary ? "none" : "1px solid var(--gray-100)")};
  border-radius: 4px;
  color: var(--grey-100);
  cursor: pointer;
  font-size: 1rem;
  margin: 10px;
  padding: 5px 20px;
  
  :hover {
    background-color: ${props => (props.primary ? "rgba(189, 75, 75, 0.7)" : "rgba(0, 0, 0, 0.1)")};
    border: ${props => (props.primary ? "none" : "1px solid var(--gray-200)")};
    color: var(--gray-200);
    transition: 250ms ease;
  }
`;

export function AuthorInfo() {
  return (
    <div className="author-bg">
      <Script src='../assets/js/jquery.backstretch.js' />  
      <Script src='../assets/js/scripts.js' />  
      <div className="wrapper">
      <AuthorInfoStyles>
       
            <Image
            src={blogLogo}
            alt="Blog Logo"
            width={100}
            height={100}
          />
          <h1 className=".top-content .text">ANDREK TITANIUM</h1>
          <p> Metaverse Fashion Artist </p>
          <p> Script Developer</p>
          <p> *** A test website for Orma Carbon® ***</p>
          <Button primary>SEE MY WORK</Button><Button>CONTACT ME</Button> 
      </AuthorInfoStyles>
      </div> 
    </div>
  )
}

