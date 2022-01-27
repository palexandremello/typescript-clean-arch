import './config/module-alias'

import 'reflect-metadata'
import { app } from '@/main/config/app'
import { env } from './config/env'

app.listen(env.port, () => {
  console.log(`Server Running at http://localhost:${env.port}`)
})
