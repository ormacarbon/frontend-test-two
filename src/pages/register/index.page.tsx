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
import Input from '../../components/input/index'
import Button from '../../components/button'
import nookies from 'nookies'

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
  name: string;
}

const Register: React.FC = () => {
  const { setIsLoading } = useContext(LoadingContext)
  const router = useRouter()

  const [disableButton, setDisableButton] = useState<boolean>(false)
  const [registerForm, setRegisterForm] = useState<RegisterForm>({ name: '', email: '', password: '', retypePassword: '' })
  const [registerFormState, setRegisterFormState] = useState<RegisterFormState>({
    name: { state: true, feedback: '' },
    email: { state: true, feedback: '' },
    password: { state: true, feedback: '' },
    retypePassword: { state: true, feedback: '' }
  })

  useEffect(() => {
    const cookies = nookies.get()
    const token = cookies.token
    const userID = cookies.userID

    if (userID && token) router.push('/tasks')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleInputChange = (newValue: string, inputName: string) => {
    setRegisterForm({...registerForm, [inputName]: newValue})
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
      setIsLoading(true)

      http.post('/user', {...registerForm, role: 0})
        .then(() => {
          http.post<LoginResponse>('/login', registerForm)
            .then((response) => {
              const { token, userID, name} = response.data
              setAuthTokenAndUserID(token, userID.toString(), name)

              router.push('/tasks')
            })
            .catch((e) => {
              setDisableButton(false)
              console.error(e?.message)
              router.push('/login')
              setIsLoading(false)
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
            name="name"
            label="Nome"
            placeholder="Digite aqui"
            value={registerForm.name}
            change={handleInputChange}
            invalidFeedback={registerFormState.name.feedback}
            state={registerFormState.name.state}
          />

          <Input
            name="email"
            label="E-mail"
            placeholder="Digite aqui"
            value={registerForm.email}
            change={handleInputChange}
            invalidFeedback={registerFormState.email.feedback}
            state={registerFormState.email.state}
          />

          <Input
            name="password"
            label="Senha"
            type="password"
            placeholder="*********"
            value={registerForm.password}
            change={handleInputChange}
            invalidFeedback={registerFormState.password.feedback}
            state={registerFormState.password.state}
          />

          <Input
            name="retypePassword"
            label="Repita a senha"
            type="password"
            placeholder="*********"
            value={registerForm.retypePassword}
            change={handleInputChange}
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
