// date: 2021
// area: frontend, ai
// stack: chrome plugin, gpt J

// (personal idea)
// description: chrome plugin experiment to generate text

// [screencast]
// [github link]
// [chrome store link]

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const TypeJ = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>Type J</Title>
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
              '1. start typing something',
              '2. press Tab',
              '3. select some desired option (Arrow down/up)',
              '4. press Arrow Right to select bigger chunk',
              '5. select desired option',
              '6. press arrow right again, select desired option',
              '7. press Enter to insert',
            ]}
          />
          <Text>
            Personal project.
            <br />
            Chrome plugin to experiment with text generation using{' '}
            <Link href="https://huggingface.co/EleutherAI/gpt-j-6B" inline>
              GPT-J
            </Link>
          </Text>
          <Link href="https://t.me/+rBEOX8R5flc4Njgy">Generated content</Link>
          <Link href="https://chrome.google.com/webstore/detail/type-j/femdhcgkiiagklmickakfoogeehbjnbh">
            Chrome extension
          </Link>
        </div>
      }
    />
  )
}

export default TypeJ
