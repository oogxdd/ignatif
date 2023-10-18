import { useState, useEffect } from 'react'
import { fields, tags, projects } from '@/data'
// import Field from '@/components/field'
// import Tag from '@/components/tag'
import ProjectsTimeline from '@/components/projects/timeline'
// import ProjectsTimeline from '@/components/projects-timeline/react'

const TimelinePage = () => {
  // when selected
  const [selectedFields, setSelectedFields] = useState([])
  const [selectedTags, setSelectedTags] = useState([])

  // when hover over project:
  // highlight all related fields and tags
  const [hoveredProject, setHoveredProject] = useState(null)

  // when hover over field:
  // highlight related projects and tags
  const [hoveredField, setHoveredField] = useState(null)

  // when hover over tag:
  // highlight related field(s) and projects
  const [hoveredTag, setHoveredTag] = useState(null)

  useEffect(() => {
    // ...existing event listeners

    const preventTwoFingerSwipe = (e) => {
      if (e.ctrlKey) {
        // Usually, two-finger swipe sets the ctrlKey property to true
        e.preventDefault()
      }
    }

    window.addEventListener('wheel', preventTwoFingerSwipe, { passive: false })

    return () => {
      // ...existing event removers
      window.removeEventListener('wheel', preventTwoFingerSwipe)
    }
  }, [])

  useEffect(() => {
    const preventDefaultBehavior = (e) => {
      e.preventDefault()
    }

    window.addEventListener('touchmove', preventDefaultBehavior, {
      passive: false,
    })
    window.addEventListener('touchstart', preventDefaultBehavior, {
      passive: false,
    })

    return () => {
      window.removeEventListener('touchmove', preventDefaultBehavior)
      window.removeEventListener('touchstart', preventDefaultBehavior)
    }
  }, [])

  return (
    <div className="flex flex-col justify-between items-start h-full min-h-screen w-full p-16">
      <div className="self-end text-xl text-start leading-7">
        hi
        <br />
        my name is Maxim
        <br />
        i got plenty of experience
        <br />
        <a
          href="mailto:ignatif@gmail.com"
          target="_blank"
          className="text-blue-600"
        >
          discuss something with me
        </a>
      </div>
      <div className="self-center w-screen">
        <ProjectsTimeline />
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col">
          <Label>Fields</Label>
          <div className="flex flex-wrap space-x-4">
            {fields.map((field) => (
              <Field field={field} key={field} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <Label>Technologies</Label>
          <div className="flex flex-wrap gap-x-3 gap-y-3">
            {tags.map((tag) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const Label = () => null
// const Label = ({ children }) => (
//   <h2 className="text-xl text-gray-600 ml-0 mb-2 font-medium">{children}</h2>
// )

const Field = ({
  field,
  selected = false,
  onSelect = () => {},
  onHover = () => {},
}) => (
  <div
    className={`px-5 py-3 rounded-full border text-2xl font-medium ${
      selected ? 'bg-gray-200' : 'text-gray-900'
    } border-gray-300 tracking-wide hover:cursor-pointer hover:border-gray-500`}
    onClick={() => onSelect(field)}
    onMouseOver={() => onHover(field)}
  >
    {field}
  </div>
)

const Tag = ({
  tag,
  selected = false,
  onSelect = () => {},
  onHover = () => {},
}) => (
  <div
    className={`px-3 py-1.5 rounded-full border text-lg font-medium ${
      selected ? 'bg-gray-200' : 'text-gray-900'
    } border-gray-300 tracking-wide hover:cursor-pointer hover:border-gray-500`}
    onClick={() => onSelect(tag)}
    onMouseOver={() => onHover(tag)}
  >
    {tag}
  </div>
)

export default TimelinePage
