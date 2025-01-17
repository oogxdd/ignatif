// mb include: antcmd, movenation, myfit
export const projects = [
  {
    position: 'Frontend developer',
    company: 'Nisper',
    dateStart: 'Mar 2024',
    dateEnd: 'Present',
    points: [
      // 'Developed an editor for correcting transcripts while preserving word/phrase level timestamps, featuring autosave and offline mode.',
      // 'Created dashboard for file upload and folder organization.',
      // 'Implemented human-in-the-loop workflow for transcript correction and validation.',
      // 'Built multi-tenancy functionality to support workspace isolation for different users or organizations.',

      'Joined as founding frontend engineer and built the entire frontend solution from scratch',
      'Built a TipTap-based transcript editor with timestamp-preserving edits, utterance/speaker controls, media sync, autosave and offline support.',
      'Built multi-tenant system for managing multiple organizations, implemented user roles and billing capabilities',
      'Drove frontend development from initial concept to first customer deployments',
      // maybe also:
      //
      // 1. came to the project as the founding frontend engineer and bootstraped solution (which solution) from scratch
      // 2. implement tiptap-based text-editor for editing transcripts, equipped
      // with features such as preserving timestamps when editing words/phrases,
      // utterances split/merge, speakers change, auto-save and offline support.
      //
      // 3. implemented multi-tenant dashboard with roles and billing
      //
      // 4. lead the project to it's first few customers
    ],
  },
  {
    position: 'Full-stack developer',
    company: 'Mori',
    dateStart: 'Apr 2023',
    dateEnd: 'Oct 2023',
    points: [
      // 'Built media gallery with AI features including photo restoration, OCR, audio transcription and translation.',
      // "Developed 'MemoryClips': a tool for transforming GEDCOM files into personalized video stories.",
      // 'Implemented scalable video rendering using Remotion, AWS Lambda, and S3 services.',

      'Joined as full-stack developer and lead project from alpha stage to the public release, working on features such as media gallery, gedcom parser and media importer and general application improvements(ui/ux)',
      'Equiped media gallery with various AI features such as old photos restoration, documents OCR, audio files transcription and translation',
      'Pioneered sub-product called "MemoryClips" - a tool for making personalized family video stories from a GEDCOM file, utilizing Claude API, Azure Text-to-speech and Google Serper API for structuring narrative and Remotion, AWS Lambda and S3 to enable video-rendering at scale.',
      // 'Pioneered sub-product called "MemoryClips" - a tool for making personalized family video stories from a GEDCOM file, utilizing Claude API, Google Serper, and Azure Text-to-Speech for composing narratives and Remotion, AWS Lambda and S3 for video-rendering at scale.',
    ],
  },
  {
    // https://claude.ai/chat/378bb7a3-acfb-458b-9414-4cb1c4b29350
    position: 'Full-stack developer',
    company: 'Machcast',
    dateStart: 'Sep 2022',
    dateEnd: 'Jan 2023',
    points: [
      'Architected and developed an ML-powered video processing platform that automatically generated optimized short-form content for social media platforms',
      'Built a functional prototype incorporating video segmentation algorithms and video editing functionality.',
      'Led rapid prototype development from concept to demo stage, concluding the project after strategic assessment of competitive landscape',

      // 'Built media pipeline for transforming long videos into short clips.',
      // 'Developed frontend and video editor interface with various editing capabilities.',
      // 'Created backend service for video editing using ffmpg and fine-tuned GPT for title generation.',
    ],
    breakAfter: true,
  },
  {
    position: 'Frontend developer',
    company: 'Trialproofer',
    dateStart: 'May 2022',
    dateEnd: 'Sep 2022',
    points: [
      'Developed specialized text editor for capturing and organizing legal case specifics.',
      // 'Implemented comprehensive note management system for case structuring.',
      'Incorporated domain-specific functionalities for managing various legal entities.',
    ],
    break: true,
  },
  {
    position: 'Automation engineer',
    company: 'DM6Labs',
    dateStart: 'Mar 2022',
    dateEnd: 'May 2022',
    points: [
      'Designed and implemented end-to-end no-code automation flow for Covid-19 testing telemedicine service.',
      // 'Integrated order capture from Shopify with Zoho CRM customer record creation, automated email delivery of consultation scheduling links, QR code generation for test tubes, consultation scheduling through Zoho Bookings, and PCR test result notifications - all orchestrated via Zappier.',
      'Integrated multiple platforms using Zappier - capturing Shopify orders, creating Zoho CRM records, sending scheduling links via email, generating QR codes for test tubes, managing Zoho Bookings consultations, and delivering test results.',

      // 'Integrated multiple platforms (Shopify, Zoho CRM, Zoho Bookings) using Zappier.',
      'Provided staff training and instructions for smooth adoption of the new workflow.',
    ],
  },
  {
    position: 'Founder',
    company: 'Styleguide.ist',
    dateStart: 'Aug 2021',
    dateEnd: 'Feb 2022',
    points: [
      "Developed a parametric design tool that allows to manipulate base visual parameters to tune the components library look specifically for customer's brand styleguide",
      'Built a functional proof-of-concept for a few foundational components',
      'Decided to move away due to inablity to raise funds for further development',

      // Generative UI tool designed to produce UI kits and component systems tailored to customer's brand styles.
      // Conceived and pioneered the project as a solo founder, driving both the conceptualization and technical
      // implementation.
      // Built an initial proof-of-concept to validate the technical feasibility and demonstrate the tool's potential to both
      // potential customers and investors.
      // Introduced a few foundational components such as buttons, inputs, and blog posts, enabling users to adjust
      // components look by customizing specific UI parameters, while preserving the UX (layout).
      // Due to challenges in obtaining investments and necessity of securing a job for financial stability, I decided to
      // shift my focus away from the continued development of this project.
    ],
  },
  {
    position: 'Full-stack developer',
    company: 'Calmpaper',
    dateStart: 'Jun 2020',
    dateEnd: 'Jan 2021',
    points: [
      'Joined as a technical founder and lead the creation of a social media platform for book writers',
      'Incorporated features such as chapter-by-chapter book creation, likes/comments/notifications system, donations, followers system with email notifications on updates',
      // feed?
      'After couple of unsuccesful pivots and inability to find a product-market fit, collectively made a decision to shut down the project',

      // 'Led development as technical founder, building the platform from scratch within two weeks.',
      // 'Implemented features for chapter-by-chapter book publishing, comments, and user engagement.',
      // 'Adapted platform through multiple pivots based on user engagement data and founder vision.',
    ],
  },
  {
    position: 'Full-stack developer',
    company: 'Voicestory',
    dateStart: 'Oct 2018',
    dateEnd: 'May 2019',
    points: [
      'Developed a community chat widget solution',
      'Lead the team of 3 developers',
      'Led the project to initial launch, followed by halting down due to inability to find product-market fit',
      // 'Led the project to initial launch',
      // ', followed by halting due to market-fit challenges',
      // 'Joined as technical founder to advance development of community-focused chat widget.',
      // 'Utilized GetStream API to create a messanging system including group chats, threads, direct messages, notifications and other.',
      // 'Implemented multi-tenancy architecture.',
      // 'The project was halted down due to inability to find a product-market fit.',
    ],
    breakAfter: true,
  },

  {
    position: 'Full-stack developer',
    company: 'Web-pal',
    dateStart: 'Mar 2016',
    dateEnd: 'Jun 2018',
    // dateStart: '2016-04-01',
    // dateEnd: '2018-06-01',
    points: [
      'Advanced from a junior developer position to a middle-level role, eventually taking on leadership duties and guiding my first junior developer.',
      'Engaged in a mix of outsourced client projects (Zenkraft, Hyperfactors, Hostaway and others) and development of internal products (DBGlass, Chronos).',
      // 'Worked collaboratively with a team, contributing to various projects and ensuring client satisfaction.',
    ],
    break: true,
  },

  {
    position: 'Middle Frontend developer',
    company: 'Hostaway',
    dateStart: 'Oct 2016',
    dateEnd: 'Apr 2017',
    points: [
      'Developed various dashboard features utilizing React and Redux.',
      'Initiated and drove development of the mobile application using React Native.',
      'Provided mentorship and guidance to junior developers on the team.',
    ],
  },

  {
    position: 'Junior Frontend developer',
    company: 'Hypefactors',
    dateStart: 'Jun 2016',
    dateEnd: 'Sep 2016',
    points: [
      'Implemented React Native interface based on provided design specifications.',
      'Integrated backend APIs and made a fully functional product.',
      'Published the mobile application to App Store and Google Play.',
    ],
  },
  {
    position: 'Junior Frontend developer',
    company: 'Zenkraft Deliverable',
    dateStart: 'Apr 2016',
    dateEnd: 'Jun 2016',
    points: [
      'Developed frontend features using React and Redux.',
      'Implemented responsive designs using SCSS.',
      'Worked closely with backend developers to integrate new features.',
    ],
  },
]
