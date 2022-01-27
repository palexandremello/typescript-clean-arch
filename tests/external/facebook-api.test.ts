import { FacebookApi } from '@/infra/apis'
import { AxiosHttpClient } from '@/infra/http'
import { env } from '@/main/config/env'
describe('Facebook Api Integration Test', () => {
  it('Should return a FAcebook User if token is valid', async () => {
    const axiosClient = new AxiosHttpClient()
    const sut = new FacebookApi(
      axiosClient,
      env.facebookApi.clientId,
      env.facebookApi.clientSecret
    )

    const fbUser = await sut.loadUser({ token: 'EAAE9lhQFykkBADnC0OZAZAvqOfgKtG2JZA1AbvAJLRZCkdZAYwboZB8xk5YZBQqftTwapyb8kRIGeRBMW4MeZA1aeTYVsyddGzaNM4YmVVfv3Tt7WsddIbkEKJfUfnI8gXxGx6IDiPAupzGgsesImnYAxaleeCm7N9edxds1jP2aQCNeEIBz1bn8IeaVxZAioBVHH2b4Od7DZC4fVqfTz51aJT' })
    expect(fbUser).toEqual({
      facebookId: '101845282416174',
      email: 'picgqvvclf_1643257595@tfbnw.net',
      name: 'Sophia Algggbajfdghb Fallerstein'

    })
  })

  it('Should return undefined if token is invalid', async () => {
    const axiosClient = new AxiosHttpClient()
    const sut = new FacebookApi(
      axiosClient,
      env.facebookApi.clientId,
      env.facebookApi.clientSecret
    )

    const fbUser = await sut.loadUser({ token: 'invalid_token' })
    expect(fbUser).toBeUndefined()
  })
})
