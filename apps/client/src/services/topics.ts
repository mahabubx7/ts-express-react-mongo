import { ITopic } from '../interfaces/topic'

const API_URL =
  process.env.NODE_ENV === 'production'
    ? '/topics'
    : 'http://localhost:4000/topics'

export const getTopics = async () => {
  const response = await fetch(API_URL)
  const data = (await response.json()) as ITopic[]
  return data
}

export const addTopic = async (topic: string) => {
  const response = await fetch(API_URL, {
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
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })
  const data = (await response.json()) as { status: string }
  return data
}

export const upvoteTopic = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/up`, {
    method: 'PUT',
  })
  const data = (await response.json()) as ITopic
  return data
}

export const downvoteTopic = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/down`, {
    method: 'PUT',
  })
  const data = (await response.json()) as ITopic
  return data
}
