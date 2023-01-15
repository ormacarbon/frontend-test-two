import React from 'react'
import {WaningContainer,WarningText} from './style'

const WarningSection = () => {
  return (
    <React.Fragment>
        <WaningContainer>
            <WarningText>
                This project have no official connection with the Orma Group, neither with the Pokemon Tcg Api. It's merely a selective process project.
            </WarningText>
        </WaningContainer>
    </React.Fragment>
  )
}

export default WarningSection