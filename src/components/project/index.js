import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import {
  MediaGallery,
  Fields,
  Platforms,
  Technologies,
  Role,
  BulletPoints,
  Note,
  Url,
  SourceUrl,
  Dates,
} from './sections'

const Project = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="">
      <div
        className={`
          flex justify-between items-center cursor-pointer w-full sm:w-max hover:bg-sand-2 hover:dark:bg-sand-3 rounded-lg
          -ml-2 px-4 py-2.5 w-[calc(100vw-1rem)]
          sm:-ml-2 sm:px-2 sm:py-0.5
        `}
        onClick={toggleExpand}
      >
        <p className="mr-1 text-sand-12 text-sm sm:text-base">
          <b className="mb-0.5 sm:mb-0 block sm:inline text-[14px] sm:text-base">
            {project.name}
          </b>
          <span className="dark:text-sand-11 block sm:inline">
            <span className="hidden sm:inline"> - </span>
            {project.description}
          </span>
        </p>
        {isExpanded ? (
          <ChevronUpIcon className="h-[18px] w-[18px] text-sand-10 dark:text-sand-10 flex-shrink-0" />
        ) : (
          <ChevronDownIcon className="h-[18px] w-[18px] text-sand-10 dark:text-sand-10 flex-shrink-0" />
        )}
      </div>
      <div
        // className={`mt-4 sm:mt-3 space-y-4 mb-8 sm:mb-14 ml-0 sm:-ml-4 sm:mr-0 p-4 py-3 pb-6 bg-sand-3 dark:bg-sand-2 rounded-xl max-w-full sm:max-w-3xl ${
        //   isExpanded ? 'block' : 'hidden'
        // }`}
        className={`
          mt-3 space-y-5 sm:space-y-4 mb-8 bg-sand-3 dark:bg-sand-2 rounded-xl
          -ml-2 px-4 py-4 sm:py-3 pb-6 w-[calc(100vw-1rem)]
          sm:mt-3 sm:mb-14 sm:-ml-4 sm:mr-0 sm:p-4 sm:py-3 sm:pb-6 sm:max-w-3xl
          ${isExpanded ? 'block' : 'hidden'}
        `}
      >
        {/*
        <MediaGallery media={project.media} />
        */}
        <Role role={project.title} />
        <Fields fields={project.fields} />
        {/*
        <Platforms platforms={project.platforms} />
        */}
        <Technologies technologies={project.technologies} />
        <BulletPoints bullets={project.bullets} />
        <Url links={project.url} />
        {/*
        <SourceUrl sources={project.codeSource} />
        <Note note={project.note} />
        <Dates start={project.startDate} end={project.endDate} />
        */}
      </div>
    </div>
  )
}

export default Project
