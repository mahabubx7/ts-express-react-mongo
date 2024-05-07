import { Router } from 'express'

const router = Router()

// :: REGISTER routes here :: //
router.get('/', (_, res) => {
  res.json({
    message: 'Hello, world!',
  })
})

export { router }
