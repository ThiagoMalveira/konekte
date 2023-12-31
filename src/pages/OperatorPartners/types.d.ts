export type IObjGrid = {
  id: number
  cnpj: string
  estado: string
  segmento: string
  entrega: string
  status: string
  index: number
}

export type IPropsStyle = {
  filter: 'PENDENTE' | 'APROVADO' | 'REPROVADO'
}

export type IStyledProps = {
  isActive: boolean
}
