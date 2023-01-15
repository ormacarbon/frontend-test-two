import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 70px;
  right: 20px;
  display: ${props => (props.show ? 'block' : 'none')};
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.backgroundLevel3};
  color: #fff;
  border-radius: 50%;
  border:none;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
`;

export default function ScrollButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container show={showButton} onClick={handleClick}>
      <StyledButton>^</StyledButton>
    </Container>
  );
};


