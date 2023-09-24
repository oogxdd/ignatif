import React, { useState, useRef, useEffect } from 'react'
import { projects as dataProjects, fieldColors } from '@/data'

const ProjectsTimeline = () => {
  const timelineRef = useRef(null)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [zoomLevel, setZoomLevel] = useState(1)

  const handleZoom = (e) => {
    e.preventDefault()
    if (e.deltaY < 0) {
      setZoomLevel((prevZoom) => Math.min(5, prevZoom * 1.1))
    } else {
      setZoomLevel((prevZoom) => Math.max(0.5, prevZoom / 1.1))
    }
  }

  useEffect(() => {
    timelineRef.current.addEventListener('wheel', handleZoom)
    return () => timelineRef.current.removeEventListener('wheel', handleZoom)
  }, [])

  return (
    <div className="timeline-container" ref={timelineRef}>
      <div className="timeline" style={{ transform: `scaleX(${zoomLevel})` }}>
        {dataProjects.map((project, index) => (
          <div
            key={index}
            className="project"
            style={{
              left: `${new Date(project.startDate).getTime() / 31536000000}px`,
              width: `${
                (new Date(project.endDate).getTime() -
                  new Date(project.startDate).getTime()) /
                31536000000
              }px`,
            }}
            onMouseEnter={() => setHoveredProject(project.name)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {project.fields.map((field, fIndex) => (
              <div
                key={fIndex}
                className="field"
                style={{
                  height: `${100 / project.fields.length}%`,
                  backgroundColor: fieldColors[field],
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
      {hoveredProject && (
        <div className="tooltip">Project: {hoveredProject}</div>
      )}
    </div>
  )
}

export default ProjectsTimeline
