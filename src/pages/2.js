
// import React from 'react'
// import { fieldColors, fieldTextColors } from '@/data/fields'
// import { formatDate } from '@/utils'
// import { CheckIcon } from '@heroicons/react/24/outline'

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, Mail, GitHub, Linkedin, Twitter } from 'lucide-react';
import { projects } from '@/data/projects'

export default function ResumePage() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const groupProjectsByYear = (projects) => {
    return projects.reduce((acc, project) => {
      const year = new Date(project.startDate).getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(project);
      return acc;
    }, {});
  };

  const groupedProjects = groupProjectsByYear(projects);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
    {/*
      <Header
        name="John Doe"
        role="Fullstack / AI Engineer"
        description="Passionate about creating innovative solutions using cutting-edge technologies."
        email="john@example.com"
        github="https://github.com/johndoe"
        linkedin="https://linkedin.com/in/johndoe"
        twitter="https://twitter.com/johndoe"
      />
*/}

      {Object.entries(groupedProjects).reverse().map(([year, yearProjects]) => (
        <div key={year} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{year}</h2>
          {yearProjects.map((project) => (
            <ProjectDetails
              key={project.name}
              project={project}
              isExpanded={expandedProject === project.name}
              onToggle={() => toggleProject(project.name)}
            />
          ))}
        </div>
      ))}

      <footer className="mt-12 text-center">
        <p className="text-gray-600">Contact me at: <a href="mailto:john@example.com" className="text-blue-500 hover:underline">john@example.com</a></p>
      </footer>
    </div>
  );

}


// const Header = ({ name, role, description, email, github, linkedin, twitter }) => (
//   <header className="mb-12">
//     <h1 className="text-3xl font-bold mb-2">{name}</h1>
//     <p className="text-xl mb-4">{role}</p>
//     <p className="text-gray-600 mb-4">{description}</p>
//     <div className="flex space-x-4">
//       <a href={`mailto:${email}`} className="text-blue-500 hover:text-blue-600">
//         <Mail className="h-6 w-6" />
//       </a>
//       <a href={github} className="text-gray-700 hover:text-gray-900">
//         <GitHub className="h-6 w-6" />
//       </a>
//       <a href={linkedin} className="text-blue-600 hover:text-blue-700">
//         <Linkedin className="h-6 w-6" />
//       </a>
//       <a href={twitter} className="text-blue-400 hover:text-blue-500">
//         <Twitter className="h-6 w-6" />
//       </a>
//     </div>
//   </header>
// );

const Tag = ({ children, color }) => (
  <span className={`${color} px-2 py-1 rounded text-sm`}>
    {children}
  </span>
);

const MediaGallery = ({ media }) => (
  <div className="mt-4">
    <h4 className="font-semibold mb-2">Media:</h4>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {media.map((item, index) => (
        <div key={index} className="relative aspect-video">
          {item.type === 'image' ? (
            <img src={item.url} alt={item.description} className="object-cover w-full h-full rounded" />
          ) : (
            <video src={item.url} controls className="w-full h-full rounded">
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ))}
    </div>
  </div>
);

const ProjectDetails = ({ project, isExpanded, onToggle }) => {

  return (
    <div className="mb-4 border rounded-lg overflow-hidden">
      <div
        className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200"
        onClick={onToggle}
      >
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="text-sm text-gray-600 flex-grow ml-4">{project.description}</p>
        {isExpanded ? (
          <ChevronUpIcon className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
        )}
      </div>
      {isExpanded && (
        <div className="p-4 bg-white">
          {project.media && project.media.length > 0 && (
            <MediaGallery media={project.media} />
          )}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="font-semibold mb-2">Fields:</h4>
              <div className="flex flex-wrap gap-2">
                {project.fields.map((field) => (
                  <Tag key={field} color="bg-blue-100 text-blue-800">{field}</Tag>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Tag key={tech} color="bg-green-100 text-green-800">{tech}</Tag>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Role:</h4>
            <p>{project.title}</p>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Responsibilities:</h4>
            <ul className="list-disc list-inside">
              {project.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
          {project.links && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Project URL:</h4>
              <ul className="list-disc list-inside">
                {project.links.map((link, index) => (
                  <li key={index}>
                    <a href={link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.codeSource && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Code Source:</h4>
              <ul className="list-disc list-inside">
                {Object.entries(project.codeSource).map(([key, value]) => (
                  <li key={key}>
                    {key}: <a href={value} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{value}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.comment && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Comment:</h4>
              <p className="text-gray-700">{project.comment}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// const ProjectList = () => {
// };

// export default ProjectList;
