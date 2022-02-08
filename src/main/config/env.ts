import { ConnectionOptions } from 'typeorm'

export const pgConnection: ConnectionOptions = {
  type: 'postgres',
  host: 'kesavan.db.elephantsql.com',
  port: 5432,
  username: 'klidlpgs',
  password: 'JaN4FfnbEN-um9LWdaXG7urXIgbisfcG',
  database: 'klidlpgs',
  entities: ['dist/infra/postgres/entities/index.js']
}
export const env = {
  facebookApi: {
    clientId: process.env.FB_CLIENT_ID ?? '349189767023177',
    clientSecret: process.env.FB_CLIENT_SECRET ?? 'f297361efc45e71cf2b9be12a482cfe4'
  },
  port: process.env.PORT ?? 8080,
  jwtSecret: process.env.JWT_SECRET ?? '3zjk24h32jkl43',
  pgConnection
}
