import { Schema, model } from 'mongoose'

export interface ITopic {
  topic: string
  published_at: Date
  score: number
}

const topicSchema = new Schema<ITopic>(
  {
    topic: {
      type: String,
      required: true,
      unique: true,
    },
    published_at: {
      type: Date,
      default: Date.now,
    },
    score: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: false, // Disabled timestamps
    versionKey: false, // Disabled versioning
  },
)

export const Topic = model<ITopic>('Topic', topicSchema) // creating the Topic model
