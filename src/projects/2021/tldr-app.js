// date: 2021
// area: frontend, ai
// stack: chrome plugin, huggingface

// (personal idea)
// description: chrome plugin to summarize any piece on text on the web

// [screencast]
// [github link]
// [chrome store link]

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const TldrApp = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>tldr.app</Title>
          <div className="flex ml-3">
            <Tag type="frontend">Frontend</Tag>
            <Tag type="ai">AI</Tag>
          </div>
        </div>
      }
      content={
        <div className="flex flex-col mt-8 ml-6 space-y-4">
          <Bullets
            items={[
              '[gif/mp4]',
              '1. select',
              '2. press Enter-Enter',
              '3. receive summarization',
            ]}
          />
          <Text>
            Personal project.
            <br />
            Chrome plugin to summarize any piece of text on the web.
          </Text>
          <Link href="https://chrome.google.com/webstore/detail/type-j/femdhcgkiiagklmickakfoogeehbjnbh">
            Chrome extension
          </Link>
        </div>
      }
    />
  )
}

export default TldrApp
