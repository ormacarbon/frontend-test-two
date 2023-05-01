import React, { type FC } from 'react'

import * as C from './LoadingStyles'

const Loading: FC = () => (
  <C.Container>
    <C.Spinner />
  </C.Container>
)

export default Loading
