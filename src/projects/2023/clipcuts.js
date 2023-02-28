// date: oct 2022 - current
// area: frontend, backend, ai
// stack: react, node.js, hasura, remotion, ffmpg, gpt-3

// description: tool to transform long content into short snippets to distribute on social media

// [link to the demo (and maybe actual project)]

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const Clipcuts = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>Clipcuts</Title>
          <div className="flex ml-3">
            <Tag type="frontend">Frontend</Tag>
            <Tag type="backend">Backend</Tag>
            <Tag type="ai">AI</Tag>
          </div>
        </div>
      }
      content={
        <div className="flex flex-col mt-8 ml-6 space-y-4">
          <Bullets
            items={[
              '[png] landing page screenshot',
              '[png] extracted clips page',
              '[gif] player page (trim, crop, add caption and export)',
            ]}
          />
          <Text className="max-w-4xl">
            Tool to extract short snippets from long videos to then distribute
            <br />
            on TikTok / Instagram Reels / Youtube Shorts
          </Text>
          <Link href="https://www.clipcuts.co/demo">Demo</Link>
          <Link href="https://www.clipcuts.co/">clipcuts.co</Link>
        </div>
      }
    />
  )
}

export default Clipcuts
