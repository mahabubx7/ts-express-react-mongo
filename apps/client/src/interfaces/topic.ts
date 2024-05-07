export interface ITopic {
  _id: string
  topic: string
  published_at: Date
  score: number
}

export interface ITopicHashList {
  [key: string]: ITopic
}
