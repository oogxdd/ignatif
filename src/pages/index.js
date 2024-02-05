import React from 'react'
import { projects } from '@/data/projects'
import { fieldColors, fieldTextColors } from '@/data/fields'
import { formatDate } from '@/utils'
import { CheckIcon } from '@heroicons/react/24/outline'

const List = () => {
  return (
    <div className="flex flex-col _space-y-8p-6 px-8">
      {/*
      <button className="bg-tomatoA-4 hover:bg-tomato-5 text-tomatoA-11">
        Button
      </button>
      */}
      <a
        href="mailto:oogxdd@gmail.com"
        className="text-sm absolute top-3.5 right-4"
      >
        oogxdd@gmail.com
      </a>
      <div className="text-lg mt-12 sm:mt-8 mb-3.5">
        Hi, I'm <b className="font-medium">Maxim Ignatev</b>, a full-stack
        developer with AI expertise and design background.
        <br />
        {/*
        <br />I can spearhead projects independently or integrate seamlessly
        within a team to drive
        <br />
        impactful outcomes. Dive into my projects below to see the value I bring
        to the table:
*/}
      </div>
      {/*
      <div className="flex flex-col  border-red-300 border-b">
        <div className="flex items-center w-full justify-between mb-2">
          <span className="font-semibold text-xl">Maxim Ignatev</span>
          <a href="mailto:oogxdd@gmail.com" className="text-sm">
            oogxdd@gmail.com
          </a>
        </div>
        <div className="text-sm">
          A self-driven developer with a distinctive design background.
          <br />
          <br />
          My skills transform ideas into functional products, with a balance of technical precision and aesthetic appeal.
          <br />
          <br />
    I prioritize clear communication, ensuring alignment and teamwork to achieve collective goals.
        </div>
      </div>
      <span className="mt-12 text-xs tracking-wider font-bold text-gray-400 uppercase">
        My experience:
      </span>
      */}
      <div className=" divide-y max-w-3xl">
        {projects
          .filter((i) => !!i.list)
          .reverse()
          .map((project) => (
            <Project
              project={project}
              key={`${project.startDate}-${project.name}`}
            />
          ))}
        <div className="w-full h-screen flex-col md:h-auto pt-0 md:pt-4 pb-0 md:pb-8 md:items-start flex items-center justify-center">
          <div className="flex divide-x gap-x-4">
            <a href="mailto:oogxdd@gmail.com" className="_pl-4" target="_blank">
              Email
            </a>

            <a
              href="https://github.com/oogxdd"
              className="pl-4"
              target="_blank"
            >
              GitHub
            </a>

            <a
              href="https://www.upwork.com/freelancers/~010f734ee3702089ab"
              className="pl-4"
              target="_blank"
            >
              Upwork
            </a>

            <a
              href="https://www.linkedin.com/in/maxim-ignatev/"
              className="pl-4"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          {/*
          <div className="text-xl md:text-base">
            <span className="inline-block">For inquires, please reach at:</span>
            <a href="mailto:oogxdd@gmail.com" className="font-light">
              {` oogxdd@gmail.com`}
            </a>
          </div>
          */}
        </div>
      </div>
    </div>
  )
}

const Project = ({ project }) => (
  <div className="flex flex-col space-y-3 mb-6 pt-6 avoid-break">
    <div className="flex flex-col">
      {/*
      <p className="mt-b text-xs text-gray-600">
        {project.startDate} - {project.endDate}
      </p>
*/}

      <p className="mb-1 text-xs text-gray-400 font-light">
        {formatDate(project.startDate)}
        {project.endDate ? ` - ${formatDate(project.endDate)}` : ''}
      </p>
      <h2
        className="text-xl text-gray-900 font-bold flex items-center"
        style={{
          fontSize: 21,
        }}
      >
        <span className="font-medium text-gray-800">{`${project.title} at `}</span>
        <span className="ml-1.5">{project.name}</span>
        {/* project.good && (
          <CheckIcon className="ml-1 w-4 h-4 text-green-600 mt-[1.5px] inline" />
        ) */}
      </h2>
    </div>
    <p className="text-sm mt-2 text-gray-600 text-lg">{project.description}</p>
    {project.bullets?.length > 0 && (
      <ul className="list-disc list-outside mt-2 space-y-2 pl-5 text-md">
        {/*
            <li
              key={index}
              className="text-sm pl-1"
              dangerouslySetInnerHTML={{ __html: bullet }}
            />
            */}
        {project.bullets.map((bullet, index) => (
          <li key={index} className="text-sm pl-1">
            {bullet}
          </li>
        ))}
      </ul>
    )}
    {/* 
    <div className="flex _ml-6">
      {project.fields.map((field) => (
        <Tag key={`${project.name}-${field}`}>{field}</Tag>
      ))}
    </div>
    */}
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

// <span className="">
//   {field}
// </span>

const Tag = ({ children, selected = false }) => {
  const color = fieldColors[children]
  const textColor = fieldTextColors[children]

  return (
    <div
      className={`px-2.5 py-1 rounded-full border mr-1.5 text-sm _font-medium tracking-wide border-[1.5px] border-[${color}] color-[${textColor}] flex items-center justify-center text-gray-600`}
      style={{
        borderColor: color,
        color: textColor,
        // background: textColor,
        // color: 'white',
      }}
    >
      {/*
      <div
        className="w-1.5 h-1.5 mr-1 rounded-full"
        style={{
          background: textColor,
        }}
      />
      */}
      {children}
    </div>
  )
}

export default List
