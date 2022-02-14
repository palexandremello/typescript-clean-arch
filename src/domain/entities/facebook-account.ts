type AccountData = {
  id?: string
  name?: string
}

type FacebookModel = {
  name: string
  email: string
  facebookId: string
}
export class FacebookAccount {
  id?: string
  name: string
  email: string
  facebookId: string

  constructor (fbData: FacebookModel, accountData?: AccountData) {
    this.id = accountData?.id
    this.name = accountData?.name ?? fbData.name
    this.email = fbData.email
    this.facebookId = fbData.facebookId
  }
}
