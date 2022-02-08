import { RequiredStringValidator } from '@/application/validation'
import { AuthenticationError } from '@/domain/entities/errors'
import { FacebookAuthentication } from '@/domain/features'
import { AccessToken } from '@/domain/entities'
import { mock, MockProxy } from 'jest-mock-extended'
import { FacebookLoginController } from '@/application/controllers/'
import {
  ServerError,
  UnauthorizedError
} from '@/application/errors'

describe('FacebookLoginController', () => {
  let sut: FacebookLoginController
  let facebookAuth: MockProxy<FacebookAuthentication>
  let token: string
  beforeAll(() => {
    token = 'any_token'
    facebookAuth = mock()
    facebookAuth.perfom.mockResolvedValue(new AccessToken('any_value'))
  })

  beforeEach(() => {
    sut = new FacebookLoginController(facebookAuth)
  })

  it('should build Validators Correctly ', async () => {
    const validators = sut.buildValidators({ token })

    expect(validators).toEqual([
      new RequiredStringValidator('any_token', 'token')
    ])
  })

  it('should call FacebookAuthentication with correct params ', async () => {
    await sut.handle({ token })

    expect(facebookAuth.perfom).toHaveBeenCalledWith({ token })
    expect(facebookAuth.perfom).toHaveBeenCalledTimes(1)
  })

  it('should return 401 if authentication fails ', async () => {
    facebookAuth.perfom.mockResolvedValueOnce(new AuthenticationError())

    const httpResponse = await sut.handle({ token })

    expect(httpResponse).toEqual({
      statusCode: 401,
      data: new UnauthorizedError()
    })
  })
  it('should return 200 if authentication success', async () => {
    const httpResponse = await sut.handle({ token })

    expect(httpResponse).toEqual({
      statusCode: 200,
      data: {
        accessToken: 'any_value'
      }
    })
  })
  it('should return 500 if authentication throws', async () => {
    const error = new Error('infra_error')
    facebookAuth.perfom.mockRejectedValueOnce(error)
    const httpResponse = await sut.handle({ token })

    expect(httpResponse).toEqual({
      statusCode: 500,
      data: new ServerError(error)
    })
  })
})
