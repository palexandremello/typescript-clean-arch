import { LoadFacebookUserApi } from '@/data/contracts/apis'
import { AuthenticationError } from '@/domain/errors'
import { FacebookAuthentication } from '@/domain/features'
import { LoadUserAccountRepository } from '../contracts/apis/repos'

export class FacebookAuthenticationService {
  constructor (
    private readonly loadFaceBookUserApi: LoadFacebookUserApi,
    private readonly loadUserAccountRepo: LoadUserAccountRepository
  ) {}

  async perfom (params: FacebookAuthentication.Params): Promise<AuthenticationError> {
    const fbData = await this.loadFaceBookUserApi.loadUser(params)
    if (fbData !== undefined) {
      await this.loadUserAccountRepo.load({ email: fbData.email })
    }
    return new AuthenticationError()
  }
}
