import { FacebookApi } from '@/infra/apis'
import { env } from '@/main/config/env'
import { makeAxiosClient } from '../http'

export const makeFacebookApi = (): FacebookApi => {
  const axiosClient = makeAxiosClient()
  return new FacebookApi(
    axiosClient,
    env.facebookApi.clientId,
    env.facebookApi.clientSecret
  )
}
