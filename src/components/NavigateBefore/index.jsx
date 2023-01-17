import React from 'react';
import { X } from 'phosphor-react';

import { NavigateBeforeContainer } from './styled';

export const NavigateBefore = ({ href }) => {
  return (
    <NavigateBeforeContainer href={href}>
      <X />
    </NavigateBeforeContainer>
  );
};
