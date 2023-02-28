// date: 2018
// area: design
// stack:

// description: dashboard new version design

// [screenshots]

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const HostawayDesignDashboard = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>Hostaway</Title>
          <div className="flex ml-3">
            <Tag type="design">Design</Tag>
          </div>
        </div>
      }
      content={
        <div className="flex flex-col mt-8 ml-6 space-y-4">
          <Bullets items={['[png] one screen with dashboard and mobile app']} />
          <Text>Dashboard redesign for a property management software</Text>
        </div>
      }
    />
  )
}

export default HostawayDesignDashboard
