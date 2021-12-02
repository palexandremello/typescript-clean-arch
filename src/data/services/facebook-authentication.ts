import { LoadFacebookUserApi } from '@/data/contracts/apis'
import { AuthenticationError } from '@/domain/errors'
import { FacebookAuthentication } from '@/domain/features'

export class FacebookAuthenticationService {
  constructor (private readonly LoadFacebookUserApi: LoadFacebookUserApi) {}

  async perfom (params: FacebookAuthentication.Params): Promise<AuthenticationError> {
    await this.LoadFacebookUserApi.loadUser(params)
    return new AuthenticationError()
  }
}
