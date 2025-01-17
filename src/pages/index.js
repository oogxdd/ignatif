import React from 'react'
import { Github, Mail, Phone, MapPin } from 'lucide-react'
import { projects } from '@/data/projects2'

const personalInfo = {
  name: 'Maxim Ignatev',
  email: 'ignatif@gmail.com',
  phone: '+995 55 77 104 23',
  location: 'Tbilisi, Georgia',
  github: 'oogxdd',
  linkedin: 'maxim-ignatev',
}

const Resume = () => {
  const workExperience = [
    ...projects,
    // {
    //   position: 'Founding Frontend Engineer',
    //   company: 'Nisper',
    //   dateStart: '2024',
    //   dateEnd: 'Present',
    //   points: [
    //     'Built a TipTap-based transcript editor with timestamp-preserving edits, utterance/speaker controls, media sync, offline support, and real-time autosave',
    //     'Implemented multi-tenant dashboard with workspace isolation, user roles, and billing integration',
    //     'Designed transcript workflow system enabling automatic/manual transcription management, review stages, and project organization',
    //   ],
    // },
  ]

  const skills = {
    frontend: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Radix',
      'shadcn/ui',
      'Redux',
      'TanStack Query',
      'Apollo',
      'Framer Motion',
      'React Native',
      'Electron',
    ],
    backend: ['Node.js', 'Express', 'Nest.js', 'Prisma', 'TypeORM', 'GraphQL'],
    devops: [
      'AWS EC2',
      'S3',
      'RDS',
      'Route53',
      'Lambda',
      'Vercel',
      'fly.io',
      'GCP',
      'Firebase',
    ],
    ai: [
      'OpenAI API',
      'Anthropic',
      'LangChain',
      'LangGraph',
      'CrewAI',
      // 'Luma',
      // 'Recraft',
      // 'Vertex',
      // 'LLama',
      'XState',
    ],
    capabilities: [
      'Conversational Chatbots',
      'RAG Systems',
      'AI Agents',
      'Complex Multi-step Prompt Workflows',
      'Audio Transcription Models',
      'Voice Chatbots',
      'Text-to-Image/Video Generation',
    ],
  }

  return (
    <div className="w-full min-h-screen mx-auto bg-gradient-to-b from-white to-gray-50 shadow-lg">
      {/* Top Section with elegant background */}
      <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="p-8">
            <div className="mb-4">
              <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
                {personalInfo.name}
              </h1>
            </div>
            <AAA />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Left Column */}
        <div className="flex-1 border-r border-gray-200 p-6">
          {/* Summary Section */}
          <section>
            <h2 className="text-lg font-bold mb-3 text-gray-800 tracking-tight flex items-center">
              Summary
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Full-stack developer with 8+ years of experience, with strong
              focus on frontend development and a passion for crafting
              exceptional user experiences. Proven track record of delivering
              high-quality solutions.
            </p>
          </section>

          {/* Section Divider */}
          <SectionDivider />

          {/* Work Experience Section */}
          <section>
            <h2 className="text-lg font-bold mb-3 text-gray-800 tracking-tight flex items-center">
              Work Experience
            </h2>
            <div className="space-y-4">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className={`
                    pb-2 group
                    ${job.break ? 'break-before-[always] pt-2' : ''}
                    ${job.breakAfter ? 'break-after-[always]' : ''}
                    break-inside-[avoid]
                  `}
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <div className="text-sm">
                      <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {job.position}
                      </span>
                      <span className="text-gray-500"> at </span>
                      <span className="text-gray-800">{job.company}</span>
                    </div>
                    <span className="text-xs font-medium text-gray-500 tabular-nums">
                      {`${job.dateStart} - ${job.dateEnd}`}
                    </span>
                  </div>
                  <ul className="list-disc list-outside  pl-5 text-gray-700 text-sm space-y-1 marker:text-gray-400">
                    {job.points.map((point, idx) => (
                      <li key={idx} className="leading-normal pl-1">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 italic mt-2">
              Note: Not all experiences is listed here. Some freelance and side
              projects are not included
              {/*
                Note: Not all experiences are listed here. Some small-to-medium
                freelance and side projects were not included
                */}
            </p>
          </section>

          {/* Section Divider */}
          <SectionDivider />

          {/* Education Section */}
          <section>
            <h2 className="text-lg font-bold mb-3 text-gray-800 tracking-tight flex items-center">
              Education
            </h2>
            <div className="pb-2">
              <div className="flex justify-between items-baseline mb-1">
                <div className="text-sm">
                  <span className="font-semibold text-gray-800">
                    Computer Science
                  </span>
                  <span className="text-gray-500"> at </span>
                  <span className="text-gray-800">
                    Moscow Aviation University
                  </span>
                </div>
                <span className="text-xs font-medium text-gray-500 tabular-nums">
                  2015 - 2016
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Studied Computer Science with focus on fundamental programming
                concepts and mathematics. Made a conscious decision to pursue
                practical software development experience.
              </p>
            </div>
          </section>

          {/* Section Divider */}
          <SectionDivider />

          {/* Certifications Section */}
          <section>
            <h2 className="text-lg font-bold mb-3 text-gray-800 tracking-tight flex items-center">
              Additional Education
            </h2>
            <div className="space-y-3">
              <div className="text-sm text-gray-700">
                <span className="font-medium">Self-driven learning: </span>
                Continuously expanding knowledge through online courses,
                technical documentation, and hands-on projects. Active
                participant in developer communities and open-source
                contributions.
              </div>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="w-64 p-6 bg-gradient-to-b___from-gray-50/50___to-transparent bg-gray-50/50 h-full min-h-[calc(300vh-172px)] _min-h-[calc(100vh-172px)]">
          <section>
            <h2 className="text-lg font-bold mb-3 text-gray-800 tracking-tight">
              Skills
            </h2>

            {/* Frontend Skills */}
            <div className="mb-3">
              <h3 className="font-semibold mb-2 text-sm text-gray-700 tracking-tight">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skills.frontend.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 bg-blue-50/80 text-blue-700 rounded-md text-xs font-mono border border-blue-100 hover:bg-blue-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <SubsectionDivider />

            {/* Backend Skills */}
            <div className="mb-3">
              <h3 className="font-semibold mb-2 text-sm text-gray-700 tracking-tight">
                Backend
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skills.backend.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 bg-green-50/80 text-green-700 rounded-md text-xs font-mono border border-green-100 hover:bg-green-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <SubsectionDivider />

            {/* DevOps Skills */}
            <div className="mb-3">
              <h3 className="font-semibold mb-2 text-sm text-gray-700 tracking-tight">
                DevOps
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skills.devops.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 bg-orange-50/80 text-orange-700 rounded-md text-xs font-mono border border-orange-100 hover:bg-orange-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <SubsectionDivider />

            {/* AI Skills */}
            <div className="mb-3">
              <h3 className="font-semibold mb-2 text-sm text-gray-700 tracking-tight">
                AI
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skills.ai.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 bg-purple-50/80 text-purple-700 rounded-md text-xs font-mono border border-purple-100 hover:bg-purple-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Subsection Divider */}
            <SubsectionDivider />

            {/* Soft Skills */}
            <div className="mb-3 break-before-[always] pt-6">
              <h3 className="font-semibold mb-2 text-sm text-gray-700 tracking-tight">
                Soft Skills
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Strong communication and team collaboration</li>
                <li>• Project planning and estimation</li>
                <li>• Mentoring and knowledge sharing</li>
                <li>• Problem-solving and analytical thinking</li>
                <li>• Attention to detail and UI/UX sensibility</li>
              </ul>
            </div>

            {/* Subsection Divider */}
            <SubsectionDivider />

            {/* Key Capabilities */}
            <div className="mb-3">
              <h3 className="font-semibold mb-2 text-sm text-gray-700 tracking-tight">
                Key Capabilities
              </h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p>
                  • AI-powered application development with LLM, computer
                  vision, and speech integration
                </p>
                <p>
                  • Full-cycle B2B/B2C product development from concept to
                  launch
                </p>
                <p>
                  • Rapid prototyping for both technical and market validation
                </p>
                <p>
                  • Scalable frontend architectures and full-stack development
                </p>
                <p>
                  • Multi-tenant architecture and third-party system integration
                </p>
                {/*
                <p>• Custom text editor solutions for diverse business needs</p>
                */}
                <p>• Custom text editor solutions</p>
                <p>• Cloud-based video and media processing solutions</p>
                <p>• Cross-platform development for web, mobile, and desktop</p>
              </div>
              {/*
              <div className="text-sm text-gray-600 space-y-2">
                <p>
                  • Full-cycle application development from concept to
                  deployment
                </p>
                <p>
                  • UI/UX design implementation with focus on responsive and
                  accessible interfaces
                </p>
                <p>
                  • Design system development and component library maintenance
                </p>
                <p>• Performance optimization and technical debt management</p>
                <p>
                  • Cross-functional team collaboration and technical leadership
                </p>
              </div>
              */}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

const SubsectionDivider = () => {
  // return null
  return (
    // <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-3 -mx-6" />
    <div className="h-px bg-gray-100 my-3 -mx-1" />
  )
}

const SectionDivider = () => {
  return (
    // <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4 -mx-6" />
    <div className="h-px bg-gray-200 my-4 -mx-6" />
  )
}

const AAA = () => (
  <div className="grid grid-cols-[auto_auto_auto] gap-x-12 gap-y-2 text-sm text-gray-600 w-max">
    {/* First row - exactly as before */}
    <div className="flex items-center gap-2 w-max">
      <Mail className="w-4 h-4" />
      <span>{personalInfo.email}</span>
    </div>
    <div className="flex items-center gap-2 w-max">
      <Phone className="w-4 h-4" />
      <span>{personalInfo.phone}</span>
    </div>
    <div className="flex items-center gap-2 w-max">
      <MapPin className="w-4 h-4" />
      <span>{personalInfo.location}</span>
    </div>

    {/* Second row - GitHub */}
    <a
      href={`https://github.com/${personalInfo.github}`}
      className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors w-max"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github className="w-4 h-4" />
      <span>@{personalInfo.github}</span>
    </a>

    {/* Second row - LinkedIn */}
    <a
      href={`https://linkedin.com/in/${personalInfo.linkedin}`}
      className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors w-max"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
      </svg>
      <span>@{personalInfo.linkedin}</span>
    </a>
  </div>
)

const BBB = () => (
  <>
    <div className="flex flex-wrap gap-x-12 gap-y-2 text-sm text-gray-600 mb-3">
      <div className="flex items-center gap-2">
        <Mail className="w-4 h-4" />
        <span>{personalInfo.email}</span>
      </div>
      <div className="flex items-center gap-2">
        <Phone className="w-4 h-4" />
        <span>{personalInfo.phone}</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4" />
        <span>{personalInfo.location}</span>
      </div>
    </div>
    <div className="flex gap-6 text-sm text-gray-600">
      <a
        href={`https://github.com/${personalInfo.github}`}
        className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-4 h-4" />
        <span>@{personalInfo.github}</span>
      </a>
      <a
        href={`https://linkedin.com/in/${personalInfo.linkedin}`}
        className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
        <span>@{personalInfo.linkedin}</span>
      </a>
    </div>
  </>
)

export default Resume
