import { ReactNode } from 'react'

import { Fonts } from '@resources/types/mixins'

export interface IGridHeader {
  label: ReactNode | string
  grid: number
  action: () => void | null
  order: boolean
  value: string
  field: 'value' | 'interaction' | 'select'
  styles: {
    align: 'left' | 'right' | 'center'
    fontType: Fonts | undefined
    fontSize: number
    color: string | undefined
  }
}

export interface IGridData {
  id: number
  select: ReactNode | string
  action: ReactNode | string
  values: {
    [key: string]: string | number | null
  }
}

export interface IProps {
  header: IGridHeader[]
  data: IGridData[]
}

export interface IViewProps {
  header: IGridHeader[]
  data: IGridData[]
}

export type GridProps = {
  grid: number
  align: string
}
