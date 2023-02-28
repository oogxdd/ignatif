// date: 2017/2016
// area: frontend
// stack: react, redux

// description: shipping tracking and integrations service. a part of frontend team

// [screenshots]
// [link to website]

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const Zenkraft = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>Zenkraft</Title>
          <div className="flex ml-3">
            <Tag type="frontend">Frontend</Tag>
          </div>
        </div>
      }
      content={
        <div className="flex flex-col mt-8 ml-6 space-y-4">
          <Bullets items={['[png] one or multiple screens of the software']} />
          <Text>Shipping tracking and integrations service.</Text>
          <Link href="https://www.zenkraft.com/">zenkraft.com</Link>
        </div>
      }
    />
  )
}

export default Zenkraft
