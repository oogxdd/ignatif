// date: 2016
// area: mobile
// stack: react-native

// description: mobile application to track mentions on your brand across multiple streams

// [link to website]
//
// https://apkpure.com/jp/hypefactors-deprecated/com.hypefactors.app
// https://image.winudf.com/v2/image/Y29tLmh5cGVmYWN0b3JzLmFwcF9zY3JlZW5fMV8xNTM4MjU3MjQxXzA3Mg/screen-1.jpg?fakeurl=1&type=.jpg

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const Hypefactors = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>Hypefactors</Title>
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
              '[png] app screen 1',
              '[png] app screen 2',
              '[png] app screen 3',
            ]}
          />
          <Text>
            Mobile application to track mentions on your brand across multiple
            streams
          </Text>
          <Link href="https://hypefactors.com/">hypefactors.com</Link>
        </div>
      }
    />
  )
}

export default Hypefactors
