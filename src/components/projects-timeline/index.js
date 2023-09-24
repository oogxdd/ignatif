import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import {
  projects as dataProjects,
  fieldColors,
  //
} from '@/data'

export default function ProjectsTimeline({
  selectedFields = [],
  selectedTags = [],
  hoveredProject = null,
  setHoveredProject = () => {},
}) {
  const svgRef = useRef(null)

  useEffect(() => {
    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove() // Clear existing SVG elements

    const xScale = d3
      .scaleTime()
      .domain([new Date(1997, 0, 1), new Date()])
      .range([0, 2000])

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(d3.timeYear.every(1))
      .tickFormat(d3.timeFormat('%Y'))

    svg.append('g').attr('transform', 'translate(0,100)').call(xAxis)

    const projects = svg
      .selectAll('.project')
      .data(dataProjects)
      .enter()
      .append('g')
      .attr('class', 'project')

    projects.each(function (d) {
      const self = d3.select(this)
      const totalWidth =
        xScale(new Date(d.endDate)) - xScale(new Date(d.startDate))
      let offset = 0
      const totalHeight = 50
      let offsetHeight = 0

      // Check if the project should be highlighted or grayed out
      const isActive = true
      // const isActive =
      // selectedFields.some((field) => d.fields.includes(field)) ||
      // selectedTags.some((tag) => d.tags.includes(tag))

      const activeColor = isActive ? 1 : 0.5

      for (const field of d.fields) {
        const height = totalHeight / d.fields.length
        self
          .append('rect')
          .attr('x', xScale(new Date(d.startDate)))
          .attr('y', 50 + offsetHeight) // Modified this line to include the vertical offset
          .attr('width', totalWidth)
          .attr('height', height) // Modified this line to use the new height variable
          .attr('fill', isActive ? fieldColors[field] : 'gray') // Modified to use isActive
          .on('mouseover', () => setHoveredProject(d.name))
          .on('mouseout', () => setHoveredProject(null))

        offsetHeight += height
      }
    })
  }, [selectedFields, selectedTags, hoveredProject])

  return <svg ref={svgRef} width="2000" height="200"></svg>
}
