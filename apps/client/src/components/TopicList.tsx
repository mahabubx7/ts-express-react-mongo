import { ITopicHashList } from '../interfaces/topic'
import TopicItem from './TopicItem'

interface ITopicListProps {
  topics: ITopicHashList
  upVote: (id: string) => void
  downVote: (id: string) => void
  deleteTopic: (id: string) => void
}

const TopicList = ({
  topics,
  upVote,
  downVote,
  deleteTopic,
}: ITopicListProps) => {
  return (
    <div className="topics_area">
      <div className="container flex flex-col gap-4">
        {Object.keys(topics).length === 0 && <p>No topics found!</p>}
        {Object.keys(topics).length > 0 &&
          Object.values(topics).map((topic) => (
            <TopicItem
              key={topic._id}
              topic={topic}
              upVote={upVote}
              downVote={downVote}
              deleteTopic={deleteTopic}
            />
          ))}
      </div>
    </div>
  )
}

export default TopicList
