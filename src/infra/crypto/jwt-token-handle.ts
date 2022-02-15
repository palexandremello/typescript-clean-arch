import { TokenGenerator } from '@/domain/contracts/crypto'
import { sign } from 'jsonwebtoken'

type Params = TokenGenerator.Params
type Result = TokenGenerator.Result

export class JwTokenHandler implements TokenGenerator {
  constructor (private readonly secret: string) {}

  async generateToken ({ expirationInMs, key }: Params): Promise<Result> {
    const expirationInSeconds = expirationInMs / 1000
    const token = sign({ key: key }, this.secret, { expiresIn: expirationInSeconds })
    return token
  }
}
