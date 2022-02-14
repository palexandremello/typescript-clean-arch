export const env = {
  facebookApi: {
    clientId: process.env.FB_CLIENT_ID ?? '349189767023177',
    clientSecret: process.env.FB_CLIENT_SECRET ?? 'f297361efc45e71cf2b9be12a482cfe4'
  },
  port: process.env.PORT ?? 8080,
  jwtSecret: process.env.JWT_SECRET ?? '3zjk24h32jkl43'
}
