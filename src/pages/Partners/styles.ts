import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'
import { IPropsStyle } from './types'

export const Container = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.palette.primary.light};
`

export const ContainerButton = styled.div<DefaultProps>`
  display: flex;
  width: 110px;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const ContainerDataGrid = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 93vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.palette.primary.lightest};
`

export const WrapperGrid = styled.div<DefaultProps>`
  background-color: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  border-radius: 10px;
  width: 80vw;
  height: 80vh;
  margin: 0 0 0 330px;
  padding: 20px;
`

export const WrapperFilters = styled.div<DefaultProps>`
  background-color: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  border-radius: 10px;
  width: 80vw;
  margin: 0 0 20px 330px;
  padding: 20px;
`

export const ContainerFilter = styled.div<IPropsStyle & DefaultProps>`
  display: flex;
  padding: 10px 0px;

  ${({ filter, theme }) =>
    filter === 'PENDENTE' &&
    `
    &:nth-child(1) {
      border-bottom: 1px solid ${theme.palette.warning.lightest};
    }
    `}

  ${({ filter, theme }) =>
    filter === 'APROVADO' &&
    `
    &:nth-child(3){
      
      border-bottom: 1px solid ${theme.palette.warning.lightest};
    }

  `}

  ${({ filter, theme }) =>
    filter === 'REPROVADO' &&
    `
    &:nth-child(5){
      
      border-bottom: 1px solid ${theme.palette.warning.lightest};
    }

  `}


  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`
