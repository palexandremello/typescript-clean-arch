import { JwTokenHandler } from '@/infra/crypto'
import { env } from '@/main/config/env'

export const makeJwtTokenGenerator = (): JwTokenHandler => {
  return new JwTokenHandler(env.jwtSecret)
}
