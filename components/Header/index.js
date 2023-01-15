import React, { useContext } from 'react';
import { Container, Title } from './styles';
import { RouteContext } from '../../context/routeContext';
import { ArrowLeft } from 'phosphor-react';
import Button from '../Button';
import Input from '../Input';

function Header(props) {
  const { backRoute } = useContext(RouteContext);

  return(
    <Container>
      <div className='left-content'>
        {
          !props.hideButton &&
          <Button icon={<ArrowLeft size={20} weight="bold" onClick={() => backRoute()} />}/>
        }
        <Title>
          {
            props.subtitle && 
            <h2>{props.subtitle}</h2>
          }
          <h1>{props.title}</h1>
        </Title>
      </div>
      <Input />
    </Container>
  )
}
export default Header;