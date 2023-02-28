import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const BeatAndFlow = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>Beat'n'flow</Title>
          <div className="flex ml-3">
            <Tag type="frontend">Frontend</Tag>
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
              'audo track and manipulate it?',
              '- link to deployed version',
            ]}
          />
          <Text>
            Personal project.
            <br />
            Experiment app to rap on top of beats and manipulate FX
          </Text>
          <Text>
            Idea was that you can produce a rap track on top of existing beat
            instantly by just opening app, selecting the beat and rapping on top
          </Text>
          {/*
          <Link href="https://www.styleguide.ist/">styleguide.ist</Link>
          */}
        </div>
      }
    />
  )
}

export default BeatAndFlow
