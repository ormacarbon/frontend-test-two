import React, {
  useState,
  useEffect,
  useContext
} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import http, { setAuthTokenAndUserID } from '../../axios/axiosConfig'
import { validateEmail } from '../../utils/utils'
import { LoadingContext } from '../../context/LoadingContext'
import * as C from './styles'
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

const Login: React.FC = () => {
  const { setIsLoading } = useContext(LoadingContext)
  const router = useRouter()

  const [loginForm, setLoginForm] = useState<LoginForm>({ email: '', password: '' })
  const [loginFormState, setLoginFormState] = useState<LoginFormState>({ email: { state: true, feedback: '' }, password: { state: true, feedback: '' } })
  const [userNotFound, setUserNotFound] = useState<boolean>(false)
  const [disableButton, setDisableButton] = useState<boolean>(false)

  useEffect(() => {
    const userID: string = localStorage.getItem('userID')
    const token: string = localStorage.getItem('token')

    if (userID && token) router.push('/tasks')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleInputChange = (newValue: string, inputName: string) => {
    setLoginForm({...loginForm, [inputName]: newValue})
  }

  const validateFields = (): boolean => {
    Object.keys(loginForm).forEach((prop) => {
      if (loginForm[prop] === '') {
        loginFormState[prop].state = false
        loginFormState[prop].feedback = 'Campo obrigatório'
      } else {
        loginFormState[prop].state = true
        loginFormState[prop].feedback = ''

        if (prop === 'email') {
          const validation: boolean = validateEmail(loginForm[prop])

          loginFormState[prop].state = validation
          loginFormState[prop].feedback = validation ? '' : 'Insira um e-mail válido'
        }
      }
      setLoginFormState({ ...loginFormState })
    })

    const states = Object.keys(loginFormState).map((prop) => loginFormState[prop].state)

    return !states.includes(false)
  }

  const login = (): void => {
    const validation: boolean = validateFields()

    if (validation) {
      setDisableButton(true)
      setIsLoading(true)

      http.post('/login', loginForm)
        .then((response) => {
          const { token, userID } = response.data
          setAuthTokenAndUserID(token, userID.toString())
          if (!userNotFound) setUserNotFound(false)
          router.push('/tasks')
        })
        .catch((e): void => {
          setUserNotFound(true)
          setDisableButton(false)
          setIsLoading(false)
          console.error(e?.message)
        })
    }
  }

  return (
    <C.Container>
      <C.LoginContainer>
        <C.Title>Login</C.Title>
        <C.Form>
          { userNotFound && <C.FormError>Usuário ou senha inválidos!</C.FormError> }
          <Input
            name="email"
            label="E-mail"
            placeholder="Digite aqui"
            value={loginForm.email}
            change={handleInputChange}
            invalidFeedback={loginFormState.email.feedback}
            state={loginFormState.email.state}
          />

          <Input
            name="password"
            label="Senha"
            type="password"
            placeholder="*********"
            value={loginForm.password}
            change={handleInputChange}
            invalidFeedback={loginFormState.email.feedback}
            state={loginFormState.password.state}
          />
        </C.Form>
        <Button
          label="Entrar"
           option="salmon"
           disabled={disableButton}
           onClick={login}
        />
        <C.RegisterText>
          Não possui uma conta? <Link href="/register">Cadastre-se</Link>
        </C.RegisterText>
      </C.LoginContainer>
    </C.Container>
  )
}

export default Login
