// date: 2018
// area: design
// stack:

// description:
//
// - mobile app design proposal

// [neatbud vimeo]
// [link to website]
// [other assets]

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const DeliverMD = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>DeliverMD</Title>
          <div className="flex ml-3">
            <Tag type="design">Design</Tag>
          </div>
        </div>
      }
      content={
        <div className="flex flex-col mt-8 ml-6 space-y-4">
          <Bullets
            items={[
              '[mp4] screencast showing the possibilities of the editor',
              '[png] other screens of an actual app 1',
              '[png] other screens of an actual app 2',
              '[mp4] flow i designed (from video of card opening)',
            ]}
          />
          <Text>Design for a weed delivery service</Text>
          <Link href="https://www.styleguide.ist/">website</Link>
          <Link href="https://www.styleguide.ist/">mobile app</Link>
        </div>
      }
    />
  )
}

export default DeliverMD
