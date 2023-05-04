import React from 'react'
import * as C from './styles'
import { useRouter } from 'next/router'

const Home: React.FC = () => {
  const router = useRouter()

  const redirectToLoginScreen = (): Promise<boolean> => router.push('/login')

  return (
    <C.HomeContainer>
      <C.MiddleContainer>
        <C.SvgContainer>
            <C.HomeImage src="home-image.svg" alt="home image" />
        </C.SvgContainer>
        <C.Title>
          Gerenciador<br/>de<br/>Tarefas
        </C.Title>
        <C.Button onClick={redirectToLoginScreen}>
          <C.ButtonText>
            Entrar
          </C.ButtonText>
        </C.Button>
      </C.MiddleContainer>
    </C.HomeContainer>
  )
}

export default Home
