import React from 'react'
import styled from "styled-components";

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
}`;

const Span = styled.span`
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 9999px;
  background: ${({ theme }) => theme.background};
}`;

const Label = styled.label
  `cursor: pointer;
  background-color: rgb(113 113 122);
  display: flex;
  align-items: center;
  padding: 0.25rem;
  width: 3.5rem;
  height: 1.75rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  border-radius: 9999px;
  margin: 1rem;

  ${HiddenCheckbox}:checked + & {
    background-color: rgb(228 228 231);
    justify-content: flex-end;
  }`;

const Toggle = ({theme,  toggleTheme }) => {
  return (
    <>
      <HiddenCheckbox 
        id="check"
        onChange={e => toggleTheme(e)}/>
      <Label htmlFor="check">
        <Span></Span>
      </Label>
    </>
  );
};

export default Toggle;
