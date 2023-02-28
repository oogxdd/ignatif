// date: 2019
// area: frontend, mobile app, backend, PWA
// stack: react, bravo studio, datocms, pwa

// description: app with resistance bands tutorials

// []
// https://m.media-amazon.com/images/I/51VubnNyI2L.jpg

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const MyFit = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>MyFit</Title>
          <div className="flex ml-3">
            <Tag type="mobile">Mobile</Tag>
            <Tag type="integrations">No code</Tag>
            <Tag type="frontend">Frontend</Tag>
          </div>
        </div>
      }
      content={
        <div className="flex flex-col mt-8 ml-6 space-y-4">
          <Bullets
            items={[
              '[gif/mp4] show the capabilities of the app',
              '[png] and maybe some screens',
            ]}
          />
          <Text>Mobile application and PWA with resistant bands tutorials</Text>
          <Link href="https://www.styleguide.ist/">Amazon Store</Link>
          {/*
          <Link href="https://github.com/oogxdd/styleguideist">github</Link>
          */}
        </div>
      }
    />
  )
}

export default MyFit
