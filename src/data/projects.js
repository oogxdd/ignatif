export const projects = [
  {
    name: 'YouBrain',
    startDate: '2024-01-02',
    endDate: '2024-02-02',
    title: 'Founder',
    description: 'Second brain software for your video content',
    fields: ['Frontend', 'Backend', 'AI'],
    // platforms: ['Extension'],
    technologies: [
      'React',
      'Node.js',
      'Nest.js',
      'OpenAI',
      'Claude',
      'Pinecone',
      'Deepgram',
    ],
    bullets: [
      'Developed workflow for users to upload, transcribe, segment, and vectorize media files for knowledge base creation.',
      'Implemented chat interface for users to interact with their personalized knowledge base.',
      'Created citation system to reference exact positions in source media files in chat responses.',
    ],
  },
  {
    name: 'Nisper',
    startDate: '2024-01-02',
    endDate: '2024-02-02',
    title: 'Front-end engineer',
    description:
      'Human-in-the-loop text editor for reviewing and correcting AI-generated transcripts',
    // platforms: ['Extension'],
    fields: ['Frontend'],
    technologies: [
      'React',
      'Next.js',
      'Tiptap',
      'ProseMirror',
      'TailwindCSS',
      'Flowbite',
      'TanStack Query',
      'TanStack Table',
      'React Hook Form',
      'Yup',
    ],
    bullets: [
      'Developed an editor for correcting transcripts while preserving word/phrase level timestamps, featuring autosave and offline mode.',
      'Created dashboard for file upload and folder organization.',
      'Implemented human-in-the-loop workflow for transcript correction and validation.',
      'Built multi-tenancy functionality to support workspace isolation for different users or organizations.',
    ],
  },
  {
    name: 'Teleeng',
    title: 'AI Developer',
    startDate: '2023-12-01',
    endDate: '2023-12-31',
    fields: ['AI', 'Backend'],
    technologies: [
      'Telegram Bot API',
      'Node.js',
      'Pinecone',
      'Hasura',
      'PostgreSQL',
    ],
    description:
      'Q&A chatbot for customer support based on existing knowledge base',
    bullets: [
      'Developed a Telegram chatbot to assist staff in answering customer questions using existing Q&A pairs.',
      'Implemented embedding-based similarity search against knowledge base for question matching.',
      'Created workflow for staff to review, modify, and approve AI-suggested answers.',
      'Designed system to automatically update knowledge base with new approved Q&A pairs.',
    ],
  },
  {
    name: 'Smarttube',
    startDate: '2023-09-02',
    endDate: '2023-12-30',
    title: 'Founder',
    description: 'Chrome extension for "speed-watching" YouTube videos',
    fields: ['Frontend', 'Backend', 'AI'],
    platforms: ['Extension'],
    technologies: ['React', 'Node', 'Deepgram', 'Perplexity', 'Claude'],
    bullets: [
      'Built a pipeline for segmenting videos into chapters and extracting key takeaways from each chapter.',
      'Implemented functionality to highlight and look up "references" in transcripts using Perplexity API.',
      'Developed an intuitive interface allowing users to seamlessly navigate through the video.',
    ],
  },
  {
    name: 'Mori',
    startDate: '2023-04-01',
    endDate: '2023-09-01',
    title: 'Full-stack / AI developer',
    description:
      'Genealogy tree building software with real-time capabilities and AI features',
    fields: ['Frontend', 'Backend', 'AI'],
    platforms: ['Web'],
    technologies: [
      'React',
      'Node',
      'Prisma',
      'OpenAI',
      'Claude',
      'Replicate',
      'Azure',
      'Remotion',
      'Supabase',
      'AWS Lambda',
      'Speechmatics',
      'Photo enhancement',
      'Speech-to-text',
      'OCR',
      'Face recognition',
      'Prompt engineering',
      'Chakra UI',
      'GEDCOM',
    ],
    bullets: [
      'Built media gallery with AI features including photo restoration, OCR, audio transcription and translation.',
      "Developed 'MemoryClips': a tool for transforming GEDCOM files into personalized video stories.",
      'Implemented scalable video rendering using Remotion, AWS Lambda, and S3 services.',
    ],
  },
  {
    name: 'Machcast',
    startDate: '2022-10-13',
    endDate: '2023-01-13',
    title: 'Founding Engineer',
    fields: ['Frontend', 'Backend', 'AI'],
    description:
      'A platform to extract and edit short clips from longer videos using AI',
    technologies: [
      'React',
      'Node',
      'Prisma',
      'Next.js',
      'Hasura',
      'AssemblyAI',
      'OpenAI',
      'Youtube API',
      'ffmpg',
      'Vercel',
      'AWS EC2',
      'S3',
      'RDS',
    ],
    bullets: [
      'Built media pipeline for transforming long videos into short clips.',
      'Developed frontend and video editor interface with various editing capabilities.',
      'Created backend service for video editing using ffmpg and fine-tuned GPT for title generation.',
    ],
  },
  {
    name: 'Trialproofer',
    title: 'Frontend developer',
    startDate: '2022-07-01',
    endDate: '2022-09-01',
    fields: ['Frontend'],
    platforms: ['Web'],
    technologies: [
      'React',
      'Tiptap',
      'ProseMirror',
      'react-beautiful-dnd',
      'styled-components',
    ],
    description:
      'Legal case preparation tool with specialized text editor for lawyers',
    bullets: [
      'Developed specialized text editor for capturing and organizing legal case specifics.',
      'Implemented comprehensive note management system for dynamic legal workflows.',
      'Incorporated domain-specific functionalities for managing various legal entities.',
    ],
  },
  {
    name: 'DM6Labs',
    title: 'Automation Engineer',
    startDate: '2022-03-28',
    endDate: '2022-05-04',
    fields: ['No-code'],
    technologies: [
      'Shopify',
      'Zoho CRM',
      'Zoho Bookings',
      'Zappier',
      'Mailgun',
      'QR Code Generation',
    ],
    description: 'Telemedicine solution for COVID-19 testing and consultation',
    bullets: [
      'Designed and implemented end-to-end no-code automation flow for telemedicine service.',
      'Integrated multiple platforms (Shopify, Zoho CRM, Zoho Bookings) using Zappier.',
      'Provided staff training and instructions for smooth adoption of new workflow.',
    ],
  },
  {
    name: 'Vividaura',
    startDate: '2022-02-02',
    title: 'Front-end developer',
    fields: ['Frontend'],
    technologies: ['React', 'KonvaJS'],
    // description: 'NFT-based collaborative digital moodboard platform.',
    description: 'Collaborative canvas for showcasing your NFTs',
    bullets: [
      'Designed interactive zoomable canvas for creating unique digital moodboards.',
      "Implemented 'land-purchase' system with object placement constraints.",
      'Developed features for dragging, rotating, and resizing various media objects.',
    ],
  },
  {
    name: 'styleguide.ist',
    title: 'Founder',
    startDate: '2021-10-02',
    endDate: '2022-02-01',
    fields: ['Frontend', 'UI/UX'],
    technologies: ['React', 'TailwindCSS', 'ThemeUI', 'Atomic design'],
    description:
      'Generative design tool for creating brand-tailored UI kits and component systems',

    // description:
    //   'Generative design tool for crafting unique UI kits and component systems',
    bullets: [
      'Conceptualized and developed project as solo founder, driving both ideation and implementation.',
      "Built proof-of-concept demonstrating tool's potential to customers and investors.",
      'Implemented foundational components with customizable UI parameters.',
    ],
  },
  {
    name: 'tldr.app',
    title: 'Founder',
    startDate: '2021-09-02',
    endDate: '2021-10-01',
    fields: ['Frontend', 'AI', 'UI/UX'],
    technologies: [
      'Chrome Extension',
      'HuggingFace',
      'LLM',
      'Text summarization',
    ],
    description: 'Chrome extension for on-the-fly text summarization',
    bullets: [
      'Developed unique interaction method for on-the-fly text summarization.',
      'Integrated Huggingface API and DistilBERT model for efficient summarization.',
      'Designed intuitive interface for instant text summarization in browser.',
    ],
  },
  {
    name: 'type-j',
    title: 'Founder',
    startDate: '2021-08-01',
    endDate: '2021-09-01',
    fields: ['Frontend', 'AI', 'UI/UX'],
    technologies: ['Chrome Extension', 'GPT-J', 'LLM', 'Text generation'],
    description:
      "GPT-J powered Chrome extension for text generation to avoid the writer's block",
    bullets: [
      'Invented iterative text generation approach for progressive content creation.',
      'Developed Chrome extension offering context-aware choices at each writing stage.',
      'Implemented GPT-J integration for AI-powered text suggestions.',
    ],
  },
  {
    name: 'Movenation',
    startDate: '2021-02-01',
    endDate: '2021-06-21',
    title: 'Founding Engineer',
    fields: ['Frontend', 'UI/UX'],
    technologies: ['React', 'Next.js', 'TailwindCSS', 'TailwindUI'],
    description:
      'Platform connecting people relocating to new countries with local experts for personalized advice',
    bullets: [
      'Designed and developed test landing page to evaluate potential user interest.',
      'Analyzed conversion rates to make data-driven decisions about project viability.',
    ],
  },
  {
    name: 'Calmpaper',
    startDate: '2020-06-15',
    endDate: '2020-12-17',
    fields: ['Frontend', 'Backend'],
    title: 'Full-stack developer / Founding engineer',
    technologies: ['React', 'Next.js', 'Node', 'Prisma', 'Stripe'],
    description:
      'Platform for writers to progressively publish their books and engage with the community',
    // description:
    //   'Community platform for progressive book publishing and feedback.',
    bullets: [
      'Led development as technical founder, building the platform from scratch within two weeks.',
      'Implemented features for chapter-by-chapter book publishing, comments, and user engagement.',
      'Adapted platform through multiple pivots based on user engagement data and founder vision.',
    ],
  },
  {
    name: 'MyFit',
    startDate: '2020-03-28',
    endDate: '2020-04-28',
    fields: ['Frontend'],
    title: 'Full-stack / Mobile developer',
    technologies: ['React', 'Bravo Studio', 'DatoCMS', 'PWA'],
    description:
      'Mobile and web application for showcasing resistance bands training videos',
    bullets: [
      "Developed and released mobile applications using no-code platform 'Bravo Studio'.",
      'Integrated DatoCMS for efficient content management within the application.',
      'Created a Progressive Web Application (PWA) for seamless web access and additional features.',
    ],
  },
  {
    name: 'antcmd',
    title: 'Front-end developer',
    startDate: '2020-05-01',
    endDate: '2020-06-14',
    fields: ['Frontend'],
    technologies: [
      'Vue',
      'Nuxt.js',
      'Tiptap',
      'ProseMirror',
      'Electron',
      'API Integrations',
    ],
    description: 'Text-based command interface for various applications',
    bullets: [
      'Developed versatile text interface for executing diverse commands within text environment.',
      'Implemented suite of commands for cold email automation, including integrations with various APIs.',
      'Packaged and released the tool as a standalone desktop application using Electron.',
    ],
  },
  {
    name: 'Voicestory',
    title: 'Full-stack developer',
    startDate: '2018-10-01',
    endDate: '2019-06-30',
    fields: ['Frontend', 'Backend'],
    technologies: ['React', 'NodeJS', 'Prisma'],
    description: 'Community chat widget for websites',
    // description:
    //   'Embeddable chat widget for fostering community engagement on websites',
    bullets: [
      'Joined as technical founder to advance development of community-focused chat widget.',
      'Managed a team of three developers while contributing hands-on development work.',
      'Balanced team management with development tasks, facing challenges in feature completion.',
    ],
  },
  {
    name: 'Hostaway',
    title: 'UI/UX Designer',
    startDate: '2018-01-01',
    endDate: '2018-06-01',
    fields: ['UI/UX'],
    technologies: ['Sketch', 'Zeplin', 'Origami Studio', 'Framer'],
    description:
      'Unified property management solution for vacation rental owners',
    bullets: [
      'Redesign of property management solution dashboard and mobile app.',
      'Led comprehensive redesign of the dashboard, focusing on modern design and improved usability.',
      'Redesigned the mobile application interface to enhance user experience.',
      'Collaborated with developers to ensure accurate implementation of designs.',
    ],
  },
  {
    name: 'Chronos',
    title: 'UI/UX Designer / Front-end Developer',
    startDate: '2017-09-01',
    endDate: '2017-12-30',
    fields: ['UI/UX', 'Frontend'],
    technologies: [
      'React',
      'Electron',
      'AtlasKit',
      'Sketch',
      'styled-components',
    ],
    description: 'Comprehensive time-tracking solution for JIRA',
    bullets: [
      'Designed and implemented UI/UX for desktop application with deep JIRA integration.',
      'Created Jira extension interface for worklog management and report generation.',
      'Developed marketing page to showcase product features and value propositions.',
    ],
  },
  {
    name: 'Hostaway',
    startDate: '2016-10-02',
    title: 'Middle Front-end Developer',
    endDate: '2017-03-01',
    fields: ['Frontend'],
    technologies: ['React', 'Redux', 'React Native', 'Bootstrap'],
    description:
      'Unified property management solution for vacation rental owners',
    bullets: [
      'Led development of various dashboard features using React and Redux.',
      'Initiated and drove the development of the mobile application using React Native.',
      'Provided mentorship and guidance to junior developers on the team.',
    ],
  },
  {
    name: 'Zenkraft Deliverable',
    title: 'Junior Front-end Developer',
    startDate: '2016-09-01',
    endDate: '2016-11-01',
    fields: ['Frontend'],
    technologies: ['React', 'Redux', 'SCSS'],
    description: 'Shipping tracking service for Salesforce ecosystem.',
    bullets: [
      'Developed frontend features using React and Redux within the Salesforce framework.',
      'Implemented responsive designs using SCSS for improved user experience.',
      'Worked closely with backend developers to integrate new features seamlessly.',
    ],
  },
  {
    name: 'Hypefactors',
    title: 'Junior Mobile Developer',
    startDate: '2016-07-01',
    endDate: '2016-08-30',
    fields: ['Frontend'],
    technologies: ['React', 'Redux', 'React-Native'],
    description:
      'Mobile app for tracking brand mentions across media channels.',
    bullets: [
      'Implemented React Native interface based on provided design specifications.',
      'Integrated backend APIs to ensure smooth data flow within the application.',
      'Collaborated with backend team to optimize data retrieval and display.',
    ],
  },
  {
    name: 'DBGlass',
    title: 'Junior Developer',
    startDate: '2016-04-01',
    endDate: '2016-06-01',
    fields: ['Frontend', 'Backend'],
    technologies: ['React', 'Redux', 'Electron', 'Bootstrap', 'PostgreSQL'],
    description: 'Desktop application for PostgreSQL database management',
    bullets: [
      "Developed React frontend components for the application's user interface.",
      'Implemented SQL features to enhance database interaction capabilities.',
      'Collaborated with senior developers to ensure code quality and best practices.',
    ],
  },
]
