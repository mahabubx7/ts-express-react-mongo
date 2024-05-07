import Env from '@mx7/tenv'
import path from 'path'
import { config } from 'dotenv'

config({ path: path.resolve(__dirname, '../../../.env') })

const envParser = new Env(process.env as Record<string, string>)

export const env = {
  port: envParser.key('API_PORT', 4000).get(),
  host: envParser.key('API_HOST', '0.0.0.0').get(),
  nodeEnv: envParser.key('NODE_ENV', 'dev').get(),
  mongoUri: envParser
    .key('MONGODB_URI', 'mongodb://localhost:27017/ermovied')
    .get(),
} as const
