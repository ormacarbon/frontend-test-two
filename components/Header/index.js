import { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import Switch from 'react-switch';

import { shade } from 'polished';

import { Container } from './styles';

export function Header(props) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <h1>Hello</h1>
      <Switch
        onChange={props.toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={4}
        width={30}
        handleDiameter={15}
        offColor={shade(0.5, colors.background)}
        onColor={colors.text_overlay}
        offHandleColor={colors.text}
      />
    </Container>
  );
}
