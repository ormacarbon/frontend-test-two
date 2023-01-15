import Link from 'next/link';
import { FiGithub, FiMail, FiLinkedin, FiFileText } from 'react-icons/fi';
import { FooterContainer, FooterIcons } from '../styles/footer'

const Footer = () => {

  return (
    <FooterContainer>
      <span>Made with ❤️ by Giovani Corrêa</span>
      <FooterIcons>
        <Link target="_blank" href={'https://www.linkedin.com/in/giovanimachado/'}>
          <FiLinkedin />
        </Link>
        <Link target="_blank" href={'https://github.com/Elesiann'}>
          <FiGithub />
        </Link>
        <Link target="_blank" href={'mailto: giovanicorrea.dev@gmail.com'}>
          <FiMail />
        </Link>
        <Link target="_blank" href={'https://cvgiovanimachado.vercel.app/'}>
          <FiFileText />
        </Link>
      </FooterIcons>
    </FooterContainer>
  )
}

export default Footer;