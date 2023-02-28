// date:
// area:
// stack:

// (personal idea)
// description:

// []

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

export default () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>Soundfuck</Title>
          <div className="flex ml-3">
            <Tag type="frontend">Frontend</Tag>
            <Tag type="backend">Backend</Tag>
          </div>
        </div>
      }
      content={
        <div className="flex flex-col mt-8 ml-6 space-y-4">
          <Bullets
            items={[
              'fix the website',
              'maybe include these audio tracks itself here',
            ]}
          />
          <Text>Crowdfunding for music snippets</Text>
          <Link href="https://soundfuck.com/">soundfuck.com</Link>
        </div>
      }
    />
  )
}
