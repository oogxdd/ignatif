// date: 2019
// area: frontend, backend
// stack: react, nodejs, prisma

// description: community chat widget for websites (mix of intercom and forums)

// [screencast]
// [github repo]

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const Voicestory = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>Voicestory</Title>
          <div className="flex ml-3">
            <Tag type="frontend">Frontend</Tag>
            <Tag type="backend">Backend</Tag>
          </div>
        </div>
      }
      content={
        <div className="flex flex-col mt-8 ml-6 space-y-4">
          <Bullets items={['[gif/mp4] maybe flow', '[png] or maybe screens']} />
          <Text>
            Community chat widget for websites <br />
            (mix of intercom and forums)
          </Text>
          <Link href="https://github.com/oogxdd/styleguideist">
            code (todo)
          </Link>
        </div>
      }
    />
  )
}

export default Voicestory
