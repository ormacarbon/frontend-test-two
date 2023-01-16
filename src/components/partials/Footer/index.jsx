import Link from 'next/link';
import {
  FacebookLogo,
  YoutubeLogo,
  TwitterLogo,
  InstagramLogo
} from 'phosphor-react';

import { FooterContainer, FooterHeader, FooterList } from './styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeader>
        <Link href={''}>
          <FacebookLogo />
        </Link>
        <Link href={''}>
          <InstagramLogo />{' '}
        </Link>
        <Link href={''}>
          <TwitterLogo />{' '}
        </Link>
        <Link href={''}>
          <YoutubeLogo />{' '}
        </Link>
      </FooterHeader>

      <FooterList>
        <li>Audiodescrição</li>
        <li>Central de Ajuda</li>
        <li>Cartão pré-pago</li>
        <li>Imprensa</li>
        <li>Relações com investidores</li>
        <li>Carreiras</li>
        <li>Termos de Uso</li>
        <li>Privacidade</li>
        <li>Avisos legais</li>
        <li>Preferências de cookies</li>
        <li>Informações corporativas</li>
        <li>Entre em contato</li>
      </FooterList>
      <button>Código do serviço</button>
    </FooterContainer>
  );
};
