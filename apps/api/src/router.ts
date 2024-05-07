import { Router } from 'express'
import topicController from './controllers/topics'

const router = Router()

// :: REGISTER routes here :: //

router.get('/topics', topicController.listAll)
router.post('/topics', topicController.create)
router.delete('/topics/:id', topicController.delete)
router.put('/topics/:id/up', topicController.voteUp)
router.put('/topics/:id/down', topicController.voteDown)

export { router }
