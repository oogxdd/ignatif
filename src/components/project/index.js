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
        className="flex justify-between items-center cursor-pointer w-max hover:bg-sand-2 hover:dark:bg-sand-3 rounded-lg -ml-2 px-2 py-0.5"
        onClick={toggleExpand}
      >
        <p className="mr-1 text-sand-12">
          <b>{project.name}</b>
          <span className="dark:text-sand-11"> - {project.description}</span>
        </p>
        {isExpanded ? (
          <ChevronUpIcon className="h-[18px] w-[18px] text-sand-10 dark:text-sand-10" />
        ) : (
          <ChevronDownIcon className="h-[18px] w-[18px] text-sand-10 dark:text-sand-10" />
        )}
      </div>
      <div
        className={`mt-4 space-y-4 mb-14 -ml-4 p-4 py-3 pb-6 bg-sand-3 dark:bg-sand-2 rounded-xl max-w-3xl ${isExpanded ? 'block' : 'hidden'}`}
      >
        <MediaGallery media={project.media} />
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
