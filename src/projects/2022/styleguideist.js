// date:
// area: frontend, ux
// stack: react, immer

// (personal idea)
// description: generative ui tool (idea that most of the software have more or less same ux but just UI parameters differ)

// []

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const Styleguideist = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>Styleguide.ist</Title>
          <div className="flex ml-3">
            <Tag type="frontend">Frontend</Tag>
            <Tag type="design">UX</Tag>
          </div>
        </div>
      }
      content={
        <div className="flex flex-col mt-8 ml-6 space-y-4">
          {/*
          <Image src="/img/styleguideist-main.png" />
          */}
          <Bullets
            items={[
              '[gif/mp4] how i change the layout of the same component to completely different look',
            ]}
          />
          <Text>
            Personal project.
            <br />
            Generative design tool to produce UI for the common layouts
          </Text>
          <Link href="https://www.styleguide.ist/">styleguide.ist</Link>
        </div>
      }
    />
  )
}

export default Styleguideist
