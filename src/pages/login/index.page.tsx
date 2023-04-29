import React, { useState, type FC } from 'react'
import Link from 'next/link'

import * as C from './LoginStyles'
import Input from '../../components/input'
import Button from '../../components/button'

interface LoginForm {
  email: string;
  password: string;
}
interface LoginFormState {
  email: {
    state: boolean;
    feedback: string;
  };

  password: {
    state: boolean;
    feedback: string;
  };
}

const Login: FC = () => {
  const [loginForm, setLoginForm] = useState<LoginForm>({ email: '', password: '' })
  const [loginFormState, setLoginFormState] = useState<LoginFormState>({ email: { state: true, feedback: '' }, password: { state: true, feedback: '' } })
  const [userNotFound, setUserNotFound] = useState<boolean>(false)
  const [disableButton, setDisableButton] = useState<boolean>(false)

  const handleEmailInputChange = (newValue: string): void => {
    setLoginForm({...loginForm, email: newValue})
  }

  const handlePasswordInputChange = (newValue: string): void => {
    setLoginForm({...loginForm, password: newValue})
  }

  return (
    <C.Container>
      <C.LoginContainer>
        <C.Title>Login</C.Title>
        <C.Form>
          {userNotFound && <C.FormError>Usuário ou senha inválidos!</C.FormError>}
          <Input
            id="email-input"
            label={'E-mail'}
            placeholder="Digite aqui"
            onChange={handleEmailInputChange}
            invalidFeedback={loginFormState.email.feedback}
            state={loginFormState.email.state}
          />

          <Input
            id="password-input"
            label="Senha"
            type="password"
            placeholder="*********"
            onChange={handlePasswordInputChange}
            invalidFeedback={loginFormState.email.feedback}
            state={loginFormState.password.state}
          />
        </C.Form>
        <Button label="Entrar" option="salmon" disabled={disableButton} />
        <C.RegisterText>
          Não possui uma conta? <Link href="/register">Cadastre-se</Link>
        </C.RegisterText>
      </C.LoginContainer>
    </C.Container>
  )
}

export default Login
