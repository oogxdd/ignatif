import React from 'react'
import { projects } from '@/data/projects'
import { fieldColors, fieldTextColors } from '@/data/fields'
import { formatDate } from '@/utils'
import { CheckIcon } from '@heroicons/react/24/outline'

const List = () => {
  return (
    <div
      className="flex flex-col _space-y-8p-6 px-12 py-12 origin-top-left"
      style={{}}
    >
      <a
        href="mailto:ignatif@gmail.com"
        className="text-sm text-blue-500 absolute top-3.5 right-4"
      >
        ignatif@gmail.com
      </a>
      <div
        className="text-lg mt-14 sm:mt-8 mb-4"
        style={{
          fontSize: 17,
        }}
      >
        Hi, I'm <b className="font-semibold">Maxim Ignatev</b>, a full-stack
        developer with AI expertise and design background.
        <br />
      </div>
      <div className="flex flex-col">
        <div className=" mb-2">Experience</div>
        <ul
          className="space-y-0.5 flex flex-col text-m text-gray-800 mb-4 _gap-y-0.5 ml-2 list-disc list-inside"
          style={{
            fontSize: 15,
            // lineHeight: '130%',
          }}
        >
          <li>Frontend - 6 years</li>
          <li>Backend - 4 years</li>
          <li>UI/UX - 1.5 years</li>
          <li>AI - 1 years</li>
        </ul>
      </div>
      <div
        className="mb-4"
        style={
          {
            // fontSize: 15,
            // lineHeight: '130%',
          }
        }
      >
        Proficiency in: React, Next.js, Tailwind, GraphQL, Hasura, Prisma,
        Apollo, Typescript, Tiptap
      </div>
      {/*
      <div
        className="text-gray-800 mb-4 text-sm"
        style={{
          fontSize: 15,
          // lineHeight: '130%',
        }}
      >
        Fimiliar with: React Native, Electron, Vue
      </div>
      */}
      <div className="text-lg font-semibold mt-12" style={{ fontSize: 20 }}>
        Work history:
      </div>
      <div className="-mt-3 divide-y max-w-3xl">
        {projects
          .filter((i) => !!i.list)
          .reverse()
          .map((project) => (
            <Project
              project={project}
              key={`${project.startDate}-${project.name}`}
            />
          ))}
        <div className="w-full h-screen flex-col md:h-auto pt-0 md:pt-4 pb-0 md:pb-2 md:items-start flex items-center justify-center">
          <div className="flex divide-x gap-x-5 text-base text-blue-500">
            <a
              href="mailto:ignatif@gmail.com"
              className="_pl-4"
              target="_blank"
            >
              ignatif@gmail.com
            </a>

            <a
              href="https://github.com/oogxdd"
              className="pl-4"
              target="_blank"
            >
              Github
            </a>

            {/*
            <a
              href="https://www.upwork.com/freelancers/~010f734ee3702089ab"
              className="pl-4"
              target="_blank"
            >
              Upwork
            </a>
           */}

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
            <a href="mailto:ignatif@gmail.com" className="font-light">
              {` ignatif@gmail.com`}
            </a>
          </div>
           */}
        </div>
      </div>
    </div>
  )
}

const Project = ({ project }) => (
  <div className="flex flex-col space-y-3 mb-4 pb-4 pt-8 avoid-break">
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

      <div className="flex items-center justify-between">
        <h2
          className="text-xl text-gray-900 font-bold flex items-center"
          style={{
            fontSize: 20,
          }}
        >
          <span className="font-medium text-gray-800">{`${project.title} at `}</span>
          <span className="ml-1.5">{project.name}</span>

          {/* project.upd && (
            <CheckIcon className="ml-1 w-4 h-4 text-green-600 inline" />
          ) */}
        </h2>
      </div>
    </div>
    <p
      className="text-sm mt-1.5 text-gray-600 text-lg"
      style={{ marginTop: 8 }}
    >
      {project.description}
    </p>
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
    {project.title === 'Founder' && (
      <div
        className="px-1.5 py-0.5 text-sm rounded-full border border-1 border-orange-600 color-orange-600 flex items-center justify-center text-gray-600 text-orange-600"
        style={{
          fontSize: 11.5,
          height: 22,
          fontWeight: 500,
          width: 'max-content',
          marginTop: 4,
        }}
      >
        Indie project
      </div>
    )}
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

// {/*
// <button className="bg-tomatoA-4 hover:bg-tomato-5 text-tomatoA-11">
//   Button
// </button>
//  */}

export default List
