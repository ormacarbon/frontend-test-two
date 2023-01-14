import * as C from './style'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loading = () => {
  return (
    <C.ContainerLoading>
      <AiOutlineLoading3Quarters className='icon' />
      <h4>Carregando ...</h4>
    </C.ContainerLoading>
  )
}

export default Loading