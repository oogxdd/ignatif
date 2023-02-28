// date: 2019
// area: design
// stack:

// description: proposed landing page design

// [design screen]
// [website]
//
//
//
//
// output: decided to proceed with the other candidature

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const HostawayDesignLanding = () => {
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
          <Bullets items={['[png] full page design']} />
          <Text>
            Landing page design proposal for property <br />
            management software
          </Text>
          <Link href="https://hostaway.vercel.app/">hostaway.vercel.app</Link>
        </div>
      }
    />
  )
}

export default HostawayDesignLanding
