import { ITopic } from '../interfaces/topic'

export const getTopics = async () => {
  const response = await fetch('http://localhost:4000/topics')
  const data = (await response.json()) as ITopic[]
  return data
}

export const addTopic = async (topic: string) => {
  const response = await fetch('http://localhost:4000/topics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ topic }),
  })
  const data = (await response.json()) as ITopic
  return data
}

export const deleteTopic = async (id: string) => {
  const response = await fetch(`http://localhost:4000/topics/${id}`, {
    method: 'DELETE',
  })
  const data = (await response.json()) as { status: string }
  return data
}

export const upvoteTopic = async (id: string) => {
  const response = await fetch(`http://localhost:4000/topics/${id}/up`, {
    method: 'PUT',
  })
  const data = (await response.json()) as ITopic
  return data
}

export const downvoteTopic = async (id: string) => {
  const response = await fetch(`http://localhost:4000/topics/${id}/down`, {
    method: 'PUT',
  })
  const data = (await response.json()) as ITopic
  return data
}
