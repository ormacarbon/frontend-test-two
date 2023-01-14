import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => (props.title && props.icon) && props.theme.spacing.md};
  width: ${props => props.flex ? '100%' : 'max-content'};
  min-width: ${props => !props.icon && '10rem'};
  border-radius: ${props => (props.rounded && '50%') || props.theme.spacing.md};
  padding: ${props => props.theme.spacing[props.size] || props.theme.spacing.md};
  color: ${props => props.theme.colors[props.textColor] || props.theme.colors.light};
  font-size: ${props => props.theme.fonts.size.md};
  font-weight: 500;
  transition: background 0.3s, color 0.3s;
  cursor: pointer;

  background: ${
    props => props.active ? 
    props.theme.colors[props.activeColor] || 
    props.theme.colors.primary100 :
    props.theme.colors[props.color] || 
    props.theme.colors.primary200
  };

  span {
    text-align: ${props => props.icon && 'start'};
    flex:1;
  }

  :hover {
    background: ${ props => !props.active && (props.theme.colors[props.hoverColor] || props.theme.colors.primary300) };
  }

  :disabled {
    pointer-events: none;
    filter: opacity(0.5);
  }
`
