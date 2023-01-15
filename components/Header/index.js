import React, { useContext } from 'react';
import { Container, Title } from './styles';
import { RouteContext } from '../../context/routeContext';
import { ArrowLeft } from 'phosphor-react';
import Button from '../Button';
import Input from '../Input';

function Header(props) {
  const { lastRoute, router } = useContext(RouteContext);

  return(
    <Container>
      {
        !props.hideButton &&
        <Button icon={<ArrowLeft size={20} weight="bold" onClick={() => router.push(lastRoute)} />}/>
      }
      <Title>
        {
          props.subtitle && 
          <h2>{props.subtitle}</h2>
        }
        <h1>{props.title}</h1>
      </Title>
      {props.showInput && <Input />}
    </Container>
  )
}
export default Header;