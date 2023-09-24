import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { projects as dataProjects, fieldColors } from '@/data'

export default function ProjectsTimeline({
  selectedFields = [],
  selectedTags = [],
  hoveredProject = null,
  setHoveredProject = () => {},
}) {
  const svgRef = useRef(null)

  useEffect(() => {
    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const width = 2000

    const xScale = d3
      .scaleTime()
      .domain([new Date(1997, 0, 1), new Date(2023, 11, 31)])
      .range([0, width])

    const svgGroup = svg.append('g').attr('class', 'everything')

    const xAxisGroup = svgGroup
      .append('g')
      .attr('transform', `translate(0,100)`)
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(d3.timeYear.every(1))
      .tickFormat(d3.timeFormat('%Y'))
    xAxisGroup.call(xAxis)

    const minZoom =
      xScale(new Date(2023, 11, 31)) - xScale(new Date(2023, 8, 31)) // 3 months
    const maxZoom =
      xScale(new Date(2023, 11, 31)) - xScale(new Date(1997, 0, 1)) // 1997-2023

    const zoom = d3
      .zoom()
      .scaleExtent([minZoom / width, maxZoom / width])
      .on('zoom', function (event) {
        let newTransform = event.transform

        if (event.sourceEvent && event.sourceEvent.ctrlKey) {
          // This is a pinch zoom
          const scale = Math.min(
            maxZoom / width,
            Math.max(minZoom / width, event.transform.k)
          )
          newTransform = d3.zoomIdentity
            .translate(event.transform.x, 0)
            .scale(scale)
        }

        svgGroup.attr(
          'transform',
          `translate(${newTransform.x},0) scale(${newTransform.k}, 1)`
        )
      })

    const initialTransform = d3.zoomIdentity
      .translate(
        -xScale(new Date(1997, 0, 1)) *
          (width /
            (xScale(new Date(2023, 11, 31)) - xScale(new Date(2016, 0, 1)))),
        0
      )
      .scale(
        width / (xScale(new Date(2023, 11, 31)) - xScale(new Date(2016, 0, 1)))
      )

    svg.call(zoom.transform, initialTransform)
    svg.call(zoom)

    const projects = svgGroup
      .selectAll('.project')
      .data(dataProjects)
      .enter()
      .append('g')
      .attr('class', 'project')

    projects.each(function (d) {
      const self = d3.select(this)
      const totalWidth =
        xScale(new Date(d.endDate)) - xScale(new Date(d.startDate))
      let offsetHeight = 0
      const totalHeight = 50

      for (const field of d.fields) {
        const height = totalHeight / d.fields.length
        self
          .append('rect')
          .attr('x', xScale(new Date(d.startDate)))
          .attr('y', 50 + offsetHeight)
          .attr('width', totalWidth)
          .attr('height', height)
          .attr('fill', fieldColors[field])
          .on('mouseover', () => setHoveredProject(d.name))
          .on('mouseout', () => setHoveredProject(null))

        offsetHeight += height
      }
    })
  }, [selectedFields, selectedTags, hoveredProject])

  return <svg ref={svgRef} width="100%" height="200"></svg>
}
