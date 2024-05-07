import { ITopic } from '../interfaces/topic'
import { TfiTrash } from 'react-icons/tfi'

interface ITopicItemProps {
  topic: ITopic
  upVote: (id: string) => void
  downVote: (id: string) => void
  deleteTopic: (id: string) => void
}

const TopicItem = ({
  topic,
  upVote,
  downVote,
  deleteTopic,
}: ITopicItemProps) => {
  return (
    <div className="topic_card bg-white p-6 rounded-md flex justify-between">
      <div className="flex flex-col flex-start">
        <button
          type="button"
          onClick={() => upVote(topic._id)}
          className="bg-transparent w-12 h-12 overflow-hidden relative mt-[-16px] group"
        >
          <span className="absolute top-8 right-[3px] w-10 h-10 bg-gray-400 block transform rotate-45 group-hover:bg-gray-500"></span>
        </button>
        <strong className="block text-center text-xl py-2">
          {topic.score}
        </strong>
        <button
          type="button"
          onClick={() => downVote(topic._id)}
          className="bg-transparent w-12 h-12 overflow-hidden relative group"
        >
          <span className="absolute bottom-8 right-[3px] w-10 h-10 bg-gray-400 block transform rotate-45 group-hover:bg-gray-500"></span>
        </button>
      </div>

      <div className="w-full pl-6 mt-6">
        <h3 className="font-bold text-gray-950 text-xl md:text-2xl">
          {topic.topic}
        </h3>
        <p className="text-lg md:text-xl">
          <span className="uppercase font-semibold text-gray-500">
            created at
          </span>
          : {new Date(topic.published_at).toLocaleDateString()}
        </p>
      </div>

      <div className="text-red-500 text-3xl mt-6 mr-2">
        <button type="button" onClick={() => deleteTopic(topic._id)}>
          <TfiTrash />
        </button>
      </div>
    </div>
  )
}

export default TopicItem
