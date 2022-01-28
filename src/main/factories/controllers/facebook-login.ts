import { FacebookLoginController } from '@/application/controllers'
import { makeFacebooAuthenticationService } from '@/main/factories/services'

export const makeFacebookLoginController = (): FacebookLoginController => {
  return new FacebookLoginController(
    makeFacebooAuthenticationService()
  )
}
