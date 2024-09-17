import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'

import {
  MediaGallery,
  Fields,
  Technologies,
  Role,
  BulletPoints,
  Comment,
  Url,
  SourceUrl,
} from './sections'

const Project = ({ project, isExpanded, onToggle }) => {
  return (
    <div className="">
      <div
        className="flex justify-between items-center cursor-pointer w-max hover:bg-sand-2 hover:dark:bg-sand-3 rounded-lg -ml-2 px-2 py-0.5"
        onClick={onToggle}
      >
        <p className="mr-1 text-sand-12">
          <b>{project.name}</b>
          <span className="dark:text-sand-11"> - {project.description}</span>
        </p>
        {isExpanded ? (
          <ChevronUpIcon className="h-[18px] w-[18px] text-sand-10 dark:text-sand-10" />
        ) : (
          <ChevronDownIcon className="h-[18px] w-[18px] text-sand-10 dark:text-sand-10 " />
        )}
      </div>
      {isExpanded && (
        <div className="mt-4 space-y-4 mb-8">
          {/*
              <MediaGallery media={project.media} />
            */}
          <Fields fields={project.fields} />
          <Technologies technologies={project.technologies} />
          {/*
            <Role title={project.title} />
          */}
          <BulletPoints bullets={project.bullets} />
          {/*
              <Url links={project.links} />
              <SourceUrl sources={project.codeSource} />
              <Note comment={project.comment} />
            */}
        </div>
      )}
    </div>
  )
}

export default Project
