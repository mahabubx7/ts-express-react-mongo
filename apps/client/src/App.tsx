import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import TopicList from './components/TopicList'
import {
  getTopics,
  addTopic,
  upvoteTopic,
  downvoteTopic,
  deleteTopic as removeTopic,
} from './services/topics'
import { ITopicHashList } from './interfaces/topic'
import './App.css'

function App() {
  const [topics, setTopics] = useState<ITopicHashList>({})

  const addNewTopic = (topic: string) => {
    addTopic(topic)
      .then((data) => {
        setTopics((prev) => {
          return {
            ...prev,
            [data._id]: data,
          }
        })
      })
      .then(() => {
        setTopics((prev) => {
          return Object.fromEntries(
            Object.entries(prev).sort(([, a], [, b]) => b.score - a.score),
          )
        })
      })
  }

  const upVote = (id: string) => {
    upvoteTopic(id)
      .then((data) => {
        setTopics((prev) => {
          return {
            ...prev,
            [data._id]: data,
          }
        })
      })
      .then(() => {
        setTopics((prev) => {
          return Object.fromEntries(
            Object.entries(prev).sort(([, a], [, b]) => b.score - a.score),
          )
        })
      })
  }

  const downVote = (id: string) => {
    downvoteTopic(id)
      .then((data) => {
        setTopics((prev) => {
          return {
            ...prev,
            [data._id]: data,
          }
        })
      })
      .then(() => {
        setTopics((prev) => {
          return Object.fromEntries(
            Object.entries(prev).sort(([, a], [, b]) => b.score - a.score),
          )
        })
      })
  }

  const deleteTopic = (id: string) => {
    removeTopic(id)
      .then(() => {
        setTopics((prev) => {
          const newTopics = { ...prev }
          delete newTopics[id]
          return newTopics
        })
      })
      .then(() => {
        setTopics((prev) => {
          return Object.fromEntries(
            Object.entries(prev).sort(([, a], [, b]) => b.score - a.score),
          )
        })
      })
  }

  useEffect(() => {
    getTopics().then((data) => {
      data = data.sort((a, b) => b.score - a.score)
      data.map((topic) => {
        setTopics((prev) => {
          return {
            ...prev,
            [topic._id]: topic,
          }
        })
      })
    })
  }, [])

  return (
    <main>
      <Navbar addNewTopic={addNewTopic} />
      <TopicList
        topics={topics}
        upVote={upVote}
        downVote={downVote}
        deleteTopic={deleteTopic}
      />
    </main>
  )
}

export default App
