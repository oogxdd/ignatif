// https://github.com/web-pal/DBGlass
// http://dbglass.web-pal.com/
//
// date: 2016
// area: frontend, desktop application
// stack: react, electron, postgres

// description: GUI client for viewing and editing database

// [link to github repo]
// [link to landing page]
// [screenshot]

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const DBGlass = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>DBGlass</Title>
          <div className="flex ml-3">
            <Tag type="frontend">Frontend</Tag>
            <Tag type="backend">Backend</Tag>
            <Tag type="desktop">Desktop</Tag>
          </div>
        </div>
      }
      content={
        <div className="flex flex-col mt-8 ml-6 space-y-4">
          <Bullets items={['[png] screenshot of the software']} />
          <Text>GUI client for working with databases</Text>
          <Link href="http://dbglass.web-pal.com/">dbglass.web-pal.com</Link>
          <Link href="https://github.com/web-pal/DBGlass">github</Link>
        </div>
      }
    />
  )
}

export default DBGlass
