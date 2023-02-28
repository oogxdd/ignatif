// date: jul 2022 - sep 2022
// area: frontend
// area: react, tiptap

// description: editor section of a tool for investigators/lawyers to follow on a particular law case

// [screencast showing the functionality of the project]

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

export default () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>Trialproofer</Title>
          <div className="flex ml-3">
            <Tag type="frontend">Frontend</Tag>
          </div>
        </div>
      }
      content={
        <div className="flex flex-col mt-8 ml-6 space-y-4">
          <Bullets
            items={[
              '[gif/mp4] screencast showing the possibilities of the editor',
            ]}
          />
          <Text>
            Text editor for the lawyers / attorneys / private investigators
            <br />
            to manage their legal cases
            {/* Text editor for the trial lawyers to manage their legal cases */}
          </Text>
          <Link href="https://trialproofer.ie/">trialproofer.ie</Link>
        </div>
      }
    />
  )
}
