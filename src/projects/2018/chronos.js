// date: 2018
// area: design
// stack:

// description:
//
// - landing design
// - atlassian jira plugin
// - desktop timetracking application

// [https://chronos.web-pal.com/ ]

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const Chronos = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>Chronos</Title>
          <div className="flex ml-3">
            <Tag type="design">Design</Tag>
          </div>
        </div>
      }
      content={
        <div className="flex flex-col mt-8 ml-6 space-y-4">
          <Bullets items={['[png] landing', '[png/gif/mp4] desktop app']} />
          <Text>Timetracking toolset for Atlassian ecosystem</Text>

          <Bullets
            items={[
              '-- (actual bullets) --',
              'landing design',
              'atlassian jira plugin',
              'desktop timetracking application',
            ]}
          />
          <Link href="https://chronos.web-pal.com/">chronos.web-pal.com</Link>
          <Link href="https://chronos.web-pal.com/">behance?</Link>
        </div>
      }
    />
  )
}

export default Chronos
