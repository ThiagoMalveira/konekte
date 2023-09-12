import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const ContainerMenu = styled.div`
  display: flex;
  background-color: transparent;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    > svg {
      display: none;
    }
  }
`

export const WrapperLogo = styled.div<DefaultProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1366px) {
    display: none;
  }
`

export const Container = styled.div<DefaultProps>`
  background-color: ${({ theme }) => theme.palette.primary.dark};
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 12%;
  animation: showSidebar 0.4s;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`
