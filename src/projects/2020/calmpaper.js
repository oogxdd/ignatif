// date: 2019
// area: frontend, backend
// stack: react, node, prisma

// description: social network for writers

// [screenshots]
// [github code]

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const Calmpaper = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>Calmpaper</Title>
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
              '[png] home screen',
              '[png] book screen',
              //
            ]}
          />
          <Text>Platform for anyone to start writing</Text>
          <Link href="https://github.com/oogxdd/styleguideist">
            github (todo)
          </Link>
        </div>
      }
    />
  )
}

export default Calmpaper
