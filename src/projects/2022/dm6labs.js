//
//
// date: 2022
// area: integrations (backend)
// stack: zoho, zappier, shopify

// description: made an automation flow to receive orders from shopify, send links to a journey and book the slot (and QR code)

// [maybe screencast]

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const Dm6Labs = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>Dm6labs</Title>
          <div className="flex ml-3">
            <Tag type="integrations">No code</Tag>
          </div>
        </div>
      }
      content={
        <div className="flex flex-col mt-8 ml-6 space-y-4">
          <Bullets items={['[gif/mp4] maybe gif/video with all the flows ']} />
          <Text>
            Shopify-Zoho integration for Covid test kits and appointments
          </Text>
          <Link href="https://www.dm6labs.com/">dm6labs.com</Link>

          {/*
https://booknow.dm6labs.com/teletest/
            */}
        </div>
      }
    />
  )
}

export default Dm6Labs
