import { useState, useEffect } from 'react'
import { projects } from '@/data/projects'
import Header from '@/components/header'
import Project from '@/components/project'
import { DateLabel } from '@/components/common'
import { Sun as SunIcon, Moon as MoonIcon } from 'lucide-react'

export default function ResumePage() {
  return (
    <div className="min-h-screen w-screen bg-sand-1 _bg-violet-3 relative">
      <div className="p-4 py-8 sm:p-8 md:p-16 md:py-12 max-w-5xl mx-auto">
        <Header
          name="Maxim Ignatev"
          role="Fullstack / AI Engineer"
          description="Passionate about creating innovative solutions using cutting-edge technologies."
          email="john@example.com"
          github="https://github.com/johndoe"
          linkedin="https://linkedin.com/in/johndoe"
          twitter="https://twitter.com/johndoe"
        />
        <ProjectsList />
        <Footer />
      </div>
    </div>
  )
}

const ProjectsList = () => {
  const [expandedProject, setExpandedProject] = useState(null)

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  const groupAndSortProjects = (projects) => {
    const grouped = projects.reduce((acc, project) => {
      const year = new Date(project.startDate).getFullYear()
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(project)
      return acc
    }, {})

    // Sort projects within each year
    Object.keys(grouped).forEach((year) => {
      grouped[year].sort(
        (a, b) => new Date(b.startDate) - new Date(a.startDate)
      )
    })

    return grouped
  }

  const groupedProjects = groupAndSortProjects(projects)

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        {Object.entries(groupedProjects)
          .sort((a, b) => b[0] - a[0])
          .map(([year, yearProjects]) => (
            <div key={year} className="flex flex-col mb-6">
              <DateLabel>{year}</DateLabel>
              <div className="flex flex-col gap-y-0.5 sm:gap-y-2 mt-2">
                {yearProjects.map((project) => (
                  <Project
                    key={project.name}
                    project={project}
                    isExpanded={expandedProject === project.name}
                    onToggle={() => toggleProject(project.name)}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="border-t border-sand-6 pt-6 mt-8">
      <div className="flex w-full justify-center sm:hidden text-sm text-sand-8">
        <a href={`mailto:ignatif@gmail.com`}>ignatif@gmail.com</a>
      </div>
      <p className="hidden sm:block text-sm text-sand-9">
        © Maxim Ignatev, 2024
      </p>
    </footer>
  )
}
