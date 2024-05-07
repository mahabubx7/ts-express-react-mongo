import { Request, Response, NextFunction } from 'express'
import { ITopic, Topic } from '../models/topics'

type Controller = (req: Request, res: Response, next?: NextFunction) => void

const listAll: Controller = async (_, res) => {
  const topics: ITopic[] = await Topic.find({})
  return res.json(topics)
}

const create: Controller = async (req, res) => {
  const { topic } = req.body
  const newTopic = new Topic({ topic })
  await newTopic.save().catch((err) => {
    return res.status(400).json({ error: err.message })
  })
  return res.status(201).json(newTopic)
}

const deleteTopic: Controller = async (req, res) => {
  const { id } = req.params
  await Topic.findByIdAndDelete(id).catch((err) => {
    return res.status(400).json({ error: err.message })
  })
  return res.status(202).json({ status: 'deleted' })
}

const voteUp: Controller = async (req, res) => {
  const { id } = req.params
  const topic = await Topic.findById(id)
  if (!topic) {
    return res.status(404).json({ error: 'Topic not found' })
  }
  topic.score += 1
  await topic.save().catch((err) => {
    return res.status(400).json({ error: err.message })
  })
  return res.status(202).json(topic)
}

const voteDown: Controller = async (req, res) => {
  const { id } = req.params
  const topic = await Topic.findById(id)
  if (!topic) {
    return res.status(404).json({ error: 'Topic not found' })
  }
  if (topic.score === 0) return res.status(200).json(topic)
  topic.score -= 1
  await topic.save().catch((err) => {
    return res.status(400).json({ error: err.message })
  })
  return res.status(202).json(topic)
}

// compose exports
export default {
  listAll,
  create,
  delete: deleteTopic,
  voteUp,
  voteDown,
}
