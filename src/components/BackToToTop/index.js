import React from 'react';
import { ArrowUp } from 'phosphor-react';

import { BackToTopContainer } from './styled';

export const BackToTop = () => {
  const backToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <BackToTopContainer onClick={backToTop}>
      <ArrowUp />
    </BackToTopContainer>
  );
};
