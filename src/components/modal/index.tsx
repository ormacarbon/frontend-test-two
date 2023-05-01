import React, { type FC, ReactNode} from 'react'

import * as C from './ModalStyles'
import Button from '../button'

enum DisplayAction {
  Open = 'open',
  Close = 'close'
}

enum ButtonAction {
  Save = 'save'
}

interface Props {
  title: string;
  display: boolean;
  children?: ReactNode;
  setDisplay: (status: boolean) => void;
  clearFields?: () => void;
  save?: () => void;
}

const Modal: FC<Props> = ({ title, display, setDisplay, children, save, clearFields }) => {
  const handleDisplayChange = (action: string): void => {
    let status: boolean

    switch (action) {
      case DisplayAction.Open:
        status = true
        break
      case DisplayAction.Close:
        status = false
        break
      default:
        status = false
        break
    }

    setDisplay(status)
  }

  const handleButtonAction = (action?: string): void => {
    if (action === ButtonAction.Save) save && save()

    handleDisplayChange('close')
    clearFields && clearFields()
  }

  return (
    <C.Container style={{display: display ? 'flex' : 'none'}}>
      <C.Modal>
        <C.CloseButton onClick={() => handleDisplayChange('close')}>
          <C.CloseButtonText>X</C.CloseButtonText>
        </C.CloseButton>
        <C.Title>{ title }</C.Title>
        <C.Content>
          { children }
        </C.Content>
        <C.ButtonsContainer>
          <Button
            label="Cancelar"
            option="salmon"
            onClick={() => handleButtonAction()}
          />

          <Button
            label="Salvar"
            option="white"
            onClick={() => handleButtonAction('save')}
          />
        </C.ButtonsContainer>
      </C.Modal>
    </C.Container>
  )
}

export default Modal
