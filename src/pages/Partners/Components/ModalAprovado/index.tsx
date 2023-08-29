import Typography from '@components/UI/Typography'
import * as S from './styles'
import { IProps } from './types'

const ModalAprovado = ({ open, id, status }: IProps) => {
  return (
    <>
      {open && (
        <S.ContainerModal>
          <Typography>{id}</Typography>
          <Typography>{status}</Typography>
        </S.ContainerModal>
      )}
    </>
  )
}

export default ModalAprovado
