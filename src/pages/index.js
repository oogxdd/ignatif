import { useState } from 'react'
import { fields, tags, projects } from '@/data'
// import Field from '@/components/field'
// import Tag from '@/components/tag'
import ProjectsTimeline from '@/components/projects-timeline'

const HomePage = () => {
  const [selectedFields, setSelectedFields] = useState([])
  const [selectedTags, setSelectedTags] = useState([])

  return (
    <div className="flex flex-col justify-between items-start h-full min-h-screen w-full p-16">
      <div className="self-end text-xl text-start leading-7">
        hi
        <br />
        my name is Maxim
        <br />
        i got plenty of experience
        <br />
        <a
          href="mailto:ignatif@gmail.com"
          target="_blank"
          className="text-blue-600"
        >
          discuss something with me
        </a>
      </div>
      <div className="self-center">
        <ProjectsTimeline />
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-wrap space-x-4">
          {fields.map((field) => (
            <Field field={field} key={field} />
          ))}
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-3">
          {tags.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}

const Field = ({ field, selected = false }) => (
  <div className="px-5 py-3 rounded-full border text-2xl font-medium text-gray-900 border-gray-300 tracking-wide hover:cursor-pointer hover:border-gray-500">
    {field}
  </div>
)

const Tag = ({ tag, selected = false }) => (
  <div className="px-3 py-1.5 rounded-full border text-lg font-medium text-gray-900 border-gray-300 tracking-wide hover:cursor-pointer hover:border-gray-500">
    {tag}
  </div>
)

export default HomePage
