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

    // Get screen width dynamically
    const width = window.innerWidth

    // Timeline settings
    const fullTimelineStart = new Date(1997, 0, 1)
    const fullTimelineEnd = new Date(2030, 11, 31)
    const focusStart = new Date(2016, 0, 1)
    const focusEnd = new Date(2023, 11, 31)

    const xScale = d3
      .scaleTime()
      .domain([fullTimelineStart, fullTimelineEnd])
      .range([0, width])

    const svgGroup = svg.append('g').attr('class', 'everything')
    const projectGroup = svgGroup.append('g').attr('class', 'projects')
    const xAxisGroup = svgGroup
      .append('g')
      .attr('transform', 'translate(0,100)')

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(d3.timeYear.every(1))
      .tickFormat(d3.timeFormat('%Y'))
    xAxisGroup.call(xAxis).selectAll('text').style('font-size', '16px') // Replace 16px with desired size

    const zoom = d3
      .zoom()
      .scaleExtent([
        width / (xScale(fullTimelineEnd) - xScale(fullTimelineStart)),
        width /
          (xScale(new Date(focusStart.getFullYear() + 1, 0, 1)) -
            xScale(focusStart)),
      ])
      .on('zoom', (event) => {
        const { x, k } = event.transform // Destructure x and k (scale) from the transform

        // Initial transformation, applies to all cases
        let xTranslate = x
        let kScale = k

        // Check if a wheel event triggered the zoom
        if (
          event.sourceEvent &&
          event.sourceEvent.type === 'wheel' &&
          !event.sourceEvent.ctrlKey
        ) {
          // Two-finger horizontal scroll: Pan without zooming
          if (Math.abs(event.sourceEvent.deltaX) > 0) {
            xTranslate = Math.min(0, Math.max(width - width * k, x))
          }
          // Pinch-to-zoom: Vertical zoom
          else if (Math.abs(event.sourceEvent.deltaY) > 0) {
            kScale = k
          }
        }

        // Apply transformation
        projectGroup.attr(
          'transform',
          `translate(${xTranslate},0) scale(${kScale}, 1)`
        )

        // Update the x-axis
        // const new_xScale = event.transform.rescaleX(xScale)
        // if (
        //   new_xScale.domain()[1] - new_xScale.domain()[0] <=
        //   12 * 30 * 24 * 60 * 60 * 1000
        // ) {
        //   // Close enough to see 12 months
        //   xAxis.ticks(d3.timeMonth.every(1)).tickFormat(d3.timeFormat('%m/%Y'))
        // } else {
        //   xAxis.ticks(d3.timeYear.every(1)).tickFormat(d3.timeFormat('%Y'))
        // }

        xAxisGroup.call(xAxis.scale(event.transform.rescaleX(xScale)))
      })

    // Compute initial zoom and translate
    const initialScale = width / (xScale(focusEnd) - xScale(focusStart))
    const initialTranslate = -xScale(focusStart) * initialScale

    const initialTransform = d3.zoomIdentity
      .translate(initialTranslate, 0)
      .scale(initialScale)
    svg.call(zoom.transform, initialTransform)
    svg.call(zoom)

    // Initialize tooltip
    const Tooltip = d3
      .select('body')
      .append('div')
      .style('opacity', 0)
      .attr('class', 'tooltip')
      .style('background-color', 'white')
      .style('position', 'absolute')
      .style('border', 'solid')
      .style('border-width', '2px')
      .style('border-radius', '5px')
      .style('padding', '5px')

    // Mouse event handlers for tooltip

    const mousemove = function (event, d) {
      Tooltip.html('Project Name: ' + d.name)
        .style('left', event.pageX + 'px')
        .style('top', event.pageY + 10 + 'px') // Position below x-axis
    }

    const mouseover = function (event, d) {
      Tooltip.style('opacity', 1)
      d3.select(this)
        .style('stroke', 'black')
        .style('stroke-width', '1')
        .style('opacity', 1)
    }

    const mouseleave = function (d) {
      Tooltip.style('opacity', 0)
      d3.select(this)
        .style('stroke', 'none') // Reset stroke to none
        .style('stroke-width', '0') // Reset stroke width to 0
        .style('opacity', 0.8)
    }

    // Existing project rendering code remains the same
    const projects = projectGroup
      .selectAll('.project')
      .data(dataProjects)
      .enter()
      .append('g')
      .attr('class', 'project')

    projects.each(function (d) {
      const projectGroup = d3.select(this) // This group represents a single project
      const totalWidth =
        xScale(new Date(d.endDate)) - xScale(new Date(d.startDate))

      let offsetHeight = 0
      const totalHeight = 50

      for (const field of d.fields) {
        const height = totalHeight / d.fields.length
        projectGroup
          .append('rect')
          .attr('x', xScale(new Date(d.startDate)))
          .attr('y', 50 + offsetHeight)
          .attr('width', totalWidth)
          .attr('height', height)
          .attr('fill', fieldColors[field])
        offsetHeight += height
      }

      // Attach handlers to the project group instead of individual rectangles
      projectGroup
        .on('mouseover', mouseover)
        .on('mousemove', mousemove)
        .on('mouseout', mouseleave)
    })
  }, [selectedFields, selectedTags, hoveredProject])

  return <svg ref={svgRef} width="100%" height="600"></svg>
}
