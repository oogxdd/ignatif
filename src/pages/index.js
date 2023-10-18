import React from 'react'
import { projects } from '@/data/projects'
import { formatDate } from '@/utils'

const List = () => {
  return (
    <div className="flex flex-col _space-y-8 divide-y p-6 px-8 max-w-4xl">
      <div className="w-full justify-between">
        <span>Maxim Ignatev</span>

        <span>oogxdd@gmail.com</span>
      </div>
      <div>
        A solution-oriented developer and UI/UX designer with a penchant for
        turning ideas into reality. <br />
        <br />
        My unique design background complements my technical expertise,
        fostering quick delivery with a keen eye for aesthetics.
        <br />
        <br />I value team dynamics, always ready to collaborate and compromise
        to bring visions to life, and my communication skills bridge the gap
        between technical and non-technical stakeholders.
      </div>
      <span>My experience:</span>
      {projects
        .filter((i) => !!i.list)
        .reverse()
        .map((project) => (
          <Project
            project={project}
            key={`${project.startDate}-${project.name}`}
          />
        ))}
      <div className="w-full h-screen flex items-center justify-center">
        <a href="mailto:oogxdd@gmail.com">oogxdd@gmail.com</a>
      </div>
    </div>
  )
}

const Project = ({ project }) => (
  <div className="flex flex-col space-y-3 mb-6 pt-6">
    <div className="flex flex-col">
      {/*
      <p className="mt-b text-xs text-gray-600">
        {project.startDate} - {project.endDate}
      </p>
*/}

      <p className="mb-0.5 text-xs text-gray-400 font-light">
        {formatDate(project.startDate)} - {formatDate(project.endDate)}
      </p>
      <h2 className="text-xl text-gray-900 font-bold">{project.name}</h2>
    </div>
    <p className="text-sm mt-2 text-gray-600 text-lg">{project.description}</p>
    {project.bullets?.length > 0 && (
      <ul className="list-disc list-outside mt-2 space-y-2 pl-5 text-md">
        {project.bullets.map((bullet, index) => (
          <li key={index} className="text-sm pl-1">
            {bullet}
          </li>
        ))}
      </ul>
    )}
    <div className="flex _ml-6">
      {project.fields.map((field) => (
        <>
          {/*
        <Tag>{field}</Tag>
        */}

          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded mr-2">
            {field}
          </span>
        </>
      ))}
    </div>
    <div className="flex items-center gap-x-1.5 text-xs _ml-6 flex-wrap">
      {project.technologies.map((tag, index) => (
        <React.Fragment key={tag}>
          <span className="text-gray-800 py-1 hover:text-blue-600 hover:cursor-pointer">
            {tag}
          </span>
          {index < project.technologies.length - 1 && (
            <span className="text-gray-800">•</span>
          )}
        </React.Fragment>
      ))}
    </div>
    {/*
    <div className="flex">
      {project.technologies.map((tag) => (
        <span
          key={tag}
          className="bg-blue-200 text-blue-700 px-2 py-1 rounded mr-2"
        >
          {tag}
        </span>
      ))}
    </div>
    */}
  </div>
)

const Tag = ({
  children,
  tag,
  selected = false,
  onSelect = () => {},
  onHover = () => {},
}) => (
  <div
    className={`px-3 py-1.5 rounded-full border text-lg font-medium ${
      selected ? 'bg-gray-200' : 'text-gray-900'
    } border-gray-300 tracking-wide hover:cursor-pointer hover:border-gray-500`}
    onClick={() => onSelect(tag)}
    onMouseOver={() => onHover(tag)}
  >
    {children}
  </div>
)

export default List
