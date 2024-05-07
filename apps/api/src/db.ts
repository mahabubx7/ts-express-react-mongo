import { env } from './config'
import { connect } from 'mongoose'
import { logger } from './logger'

export async function connectMongoDb() {
  await connect(env.mongoUri)
    .then(() => {
      logger.info('Connected to MongoDB!')
    })
    .catch((err) => {
      logger.error(err)
    })
}
