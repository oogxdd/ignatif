// date: 2017
// area: frontend
// stack: react, redux

// description: property rental channels aggregator.
// - calendar
// - messaging
// - channel integrations
// - booking website

// [screenshots]
// [link to website]

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const HostawayDevelopment = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>Hostaway</Title>
          <div className="flex ml-3">
            <Tag type="frontend">Frontend</Tag>
            <Tag type="mobile">Mobile</Tag>
          </div>
        </div>
      }
      content={
        <div className="flex flex-col mt-8 ml-6 space-y-4">
          <Bullets
            items={[
              '[png] screen 1 (calendar)',
              '[png] screen 2 (messaging)',
              '[png] screen 3 (channels)',
              '[png] screen 4 (booking website)',
            ]}
          />
          <Text>Property rental channels aggregator dashboard</Text>
          <Bullets
            items={[
              '-- (actual bullets) --',
              'calendar',
              'messaging',
              'channel integrations',
              'booking website',
            ]}
          />
          <Link href="https://www.hostaway.com/">hostaway.com</Link>
        </div>
      }
    />
  )
}

export default HostawayDevelopment
