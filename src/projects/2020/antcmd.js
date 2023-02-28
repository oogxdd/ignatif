// date: 2020
// area: frontend, desktop app
// stack: react, tiptap, electron, api integrations

// description: text-based interface to execute commands (cold mailing)

// [screencast] (multiple with different commands)
// [github repo]

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const AntCmd = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>antcmd</Title>
          <div className="flex ml-3">
            <Tag type="frontend">Frontend</Tag>
            <Tag type="desktop">Desktop</Tag>
          </div>
        </div>
      }
      content={
        <div className="flex flex-col mt-8 ml-6 space-y-4">
          <Bullets
            items={[
              '[gif/mp4] screencast showing how some various commands are executed(gameplay)',
            ]}
          />
          <Text>
            Text-based interface to execute various commands (like cold mailing)
          </Text>
          <Link href="https://www.styleguide.ist/">Demo</Link>
          <Link href="https://github.com/oogxdd/styleguideist">
            github (todo)
          </Link>
        </div>
      }
    />
  )
}

export default AntCmd
