import path from 'path'
import express, { Express } from 'express'
import cors from 'cors'
import { router } from './router'
import { env } from './config'
import { logger } from './logger'
import { connectMongoDb } from './db'

const app: Express = express() // express app instance

// applying necessary middlewares & tweaks
app.use(express.json()) // parse incoming request body as JSON
app.use(express.urlencoded({ extended: true })) // parse incoming request body as URL encoded data
app.use(cors({ origin: '*' })) // CORS enabled for all origins
app.use(router) // applying router (routes) handler

// only for production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client'))) // serve static files from client folder
  app.use('/', (_, res) => {
    res.sendFile(path.join(__dirname, './client/index.html')) // serve index.html for all routes
  })
}

// boot
async function bootstrap() {
  app.listen(env.port, env.host, () => {
    logger.info(`Server is running on http://${env.host}:${env.port}`)
  })

  await connectMongoDb()
}

export { app, bootstrap }
