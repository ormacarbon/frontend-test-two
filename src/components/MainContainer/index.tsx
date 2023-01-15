import Footer from '../Footer';
import Header from '../Header'
import * as Styled from './styles';

export default function MainContainer({children}) {
  return (
    <>
      <Header/>
      <Styled.Container>
        {children}
      </Styled.Container>
      <Footer/>
    </>
  )
}
