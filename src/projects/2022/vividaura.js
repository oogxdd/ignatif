// date: 2022
// area: frontend
// stack: react, konva

// description: moodboard-like canvas (designed to be used in nft based project)

// [link to website]
// [screencast]

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const VividAura = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>Vividaura</Title>
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
              '[gif/mp4] video where you drop files onto canvas and structure a moodboard',
            ]}
          />
          <Text>Canvas board to buy land and place NFT object onto it</Text>
          <Link href="https://vividaura.vercel.app/">vividaura.vercel.app</Link>
          <Link href="https://github.com/oogxdd/mood.wtf">github</Link>
        </div>
      }
    />
  )
}

export default VividAura
