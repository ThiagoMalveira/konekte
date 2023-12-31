import { HandleError } from '@resources/helpers/handleError'
import HandleNotification from '@resources/helpers/handleNotification'
import { HttpCodes } from '@resources/types/httpCode'
import { typesNotification } from '@resources/types/notification'
import { translateUrlParam } from '@resources/utils/forString'
import { AxiosResponse } from 'axios'
import { endpoints, getApiHeader, getApiInstance } from '..'
import { IGetClient, IRequestClient, IUpdateStatus } from './types'

export const ClientService = {
  createClient: async ({
    capacidadeEntrega,
    clienteCnpj,
    clienteEmailComercial,
    clienteInscricaoEstadual,
    clienteInscricaoMunicipal,
    clienteTelefoneComercial,
    clienteDataFundacao,
    segmentos,
  }: IRequestClient): Promise<any> => {
    try {
      const api = getApiInstance()

      const header = getApiHeader()

      const payload: IRequestClient = {
        capacidadeEntrega,
        clienteCnpj,
        clienteEmailComercial,
        clienteInscricaoEstadual,
        clienteInscricaoMunicipal,
        clienteTelefoneComercial,
        clienteDataFundacao,
        segmentos,
      }

      const response: AxiosResponse = await api.post(
        endpoints.URL.clients.createClient,
        payload,
        header,
      )

      if (![HttpCodes.CREATED].includes(response.status)) {
        HandleNotification(typesNotification.ERROR, 'Ocorreu algum problema!')
      }

      return response.data
    } catch (err) {
      HandleError(err)
    }
  },

  getClients: async (): Promise<any> => {
    try {
      const api = getApiInstance()

      const header = getApiHeader()

      const response: AxiosResponse = await api.get(
        endpoints.URL.clients.getClients,
        header,
      )

      return response.data
    } catch (err) {
      HandleError(err)
    }
  },
  getClient: async ({ id }: IGetClient): Promise<any> => {
    try {
      const api = getApiInstance()

      const header = getApiHeader()

      const url = translateUrlParam(endpoints.URL.clients.getClientsById, {
        id,
      })

      const response: AxiosResponse = await api.get(url, header)

      return response.data
    } catch (err) {
      HandleError(err)
    }
  },
  putClientStatus: async ({
    clienteId,
    clientestatusaprovacao,
  }: IUpdateStatus): Promise<any> => {
    try {
      const api = getApiInstance()

      const header = getApiHeader()

      const payload = { clienteId, clientestatusaprovacao }

      const response: AxiosResponse = await api.put(
        endpoints.URL.clients.getClients,
        payload,
        header,
      )

      HandleNotification(typesNotification.SUCCESS, 'Alterado com sucesso!')

      return response.data
    } catch (err) {
      HandleError(err)
    }
  },
}
