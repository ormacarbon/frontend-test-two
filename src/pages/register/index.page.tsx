import React, { useState, type FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { validateEmail } from '../../utils/utils'
import http, { setAuthTokenAndUserID } from '../../axios/axiosConfig'
import * as C from './RegisterStyles'
import Input from '../../components/input/index'
import Button from '../../components/button'

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  retypePassword: string;
}

interface RegisterFormState {
  name: {
    state: boolean;
    feedback: string;
  };

  email: {
    state: boolean;
    feedback: string;
  };

  password: {
    state: boolean;
    feedback: string;
  };

  retypePassword: {
    state: boolean;
    feedback: string;
  };
}

interface LoginResponse {
  token: string;
  userID: number;
}

const Register: FC = () => {
  const router = useRouter()

  const [disableButton, setDisableButton] = useState<boolean>(false)
  const [registerForm, setRegisterForm] = useState<RegisterForm>({ name: '', email: '', password: '', retypePassword: '' })
  const [registerFormState, setRegisterFormState] = useState<RegisterFormState>({
    name: { state: true, feedback: '' },
    email: { state: true, feedback: '' },
    password: { state: true, feedback: '' },
    retypePassword: { state: true, feedback: '' }
  })

  const handleNameInputChange = (newValue: string): void => {
    setRegisterForm({ ...registerForm, name: newValue })
  }

  const handleEmailInputChange = (newValue: string): void => {
    setRegisterForm({ ...registerForm, email: newValue })
  }

  const handlePasswordInputChange = (newValue: string): void => {
    setRegisterForm({ ...registerForm, password: newValue })
  }

  const handleRetypePasswordInputChange = (newValue: string): void => {
    setRegisterForm({ ...registerForm, retypePassword: newValue })
  }

  const validateFields = (): boolean => {
    Object.keys(registerForm).forEach((prop) => {
      if (registerForm[prop] === '') {
        registerFormState[prop].state = false
        registerFormState[prop].feedback = 'Campo obrigatório'
        setRegisterFormState({ ...registerFormState })
      } else {
        switch (prop) {
          case 'email': {
            const validation: boolean = validateEmail(registerForm[prop])
            registerFormState[prop].state = validation
            registerFormState[prop].feedback = validation ? '' : 'Insira um e-mail válido'
            break
          }
          case 'password': {
            registerFormState[prop].state = registerForm.password === registerForm.retypePassword || registerForm.retypePassword === ''
            registerFormState[prop].feedback = registerFormState[prop].state ? '' : 'As senhas não são iguais'
            break
          }
          case 'retypePassword': {
            registerFormState[prop].state = registerForm.password === registerForm.retypePassword || registerForm.password === ''
            registerFormState[prop].feedback = registerFormState[prop].state ? '' : 'As senhas não são iguais'
            break
          }
          default: {
            registerFormState[prop].state = true
            registerFormState[prop].feedback = ''
            break
          }
        }
      }
      setRegisterFormState({ ...registerFormState })
    })

    const states = Object.keys(registerFormState).map((prop) => registerFormState[prop].state)

    return !states.includes(false)
  }

  const register = (): void => {
    const validation: boolean = validateFields()

    if (validation) {
      setDisableButton(true)
      http.post('/user', {...registerForm, role: 0})
        .then(() => {
          http.post<LoginResponse>('/login', registerForm)
            .then((response) => {
              const { token, userID } = response.data
              setAuthTokenAndUserID(token, userID)
              router.push('/tasks')
            })
            .catch((e) => {
              setDisableButton(false)
              console.error(e?.message)
              router.push('/login')
            })
        })
        .catch((e): void => {
          setDisableButton(false)
          console.error(e?.message)
        })
    }
  }

  return (
    <C.Container>
      <C.RegisterContainer>
        <C.Title>Cadastro</C.Title>
        <C.Form>
          <Input
            id="name-input"
            className="register-input"
            label="Nome"
            placeholder="Digite aqui"
            onChange={handleNameInputChange}
            invalidFeedback={registerFormState.name.feedback}
            state={registerFormState.name.state}
          />

          <Input
            id="email-input"
            className="register-input"
            label="E-mail"
            placeholder="Digite aqui"
            onChange={handleEmailInputChange}
            invalidFeedback={registerFormState.email.feedback}
            state={registerFormState.email.state}
          />

          <Input
            id="password-input"
            className="register-input"
            label="Senha"
            type="password"
            placeholder="*********"
            onChange={handlePasswordInputChange}
            invalidFeedback={registerFormState.password.feedback}
            state={registerFormState.password.state}
          />

          <Input
            id="retype-password-input"
            className="register-input"
            label="Repita a senha"
            type="password"
            placeholder="*********"
            onChange={handleRetypePasswordInputChange}
            invalidFeedback={registerFormState.retypePassword.feedback}
            state={registerFormState.retypePassword.state}
          />
        </C.Form>
        <Button
          label="Cadastrar"
          option="salmon"
          disabled={disableButton}
          onClick={register}
        />
        <C.LoginText>Já possui uma conta? <Link href="/login">Faça login</Link></C.LoginText>
      </C.RegisterContainer>
    </C.Container>
  )
}

export default Register
