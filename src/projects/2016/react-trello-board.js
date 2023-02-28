// date: 2016
// area: frontend
// stack: react, redux, react-dnd

// description: A Trello like board based on React, Redux, React-dnd

// [screencast]
// [link to github repo]
// [link to landing page]
//
// http://react-trello-board.web-pal.com/
// https://github.com/web-pal/react-trello-board

import { useState } from 'react'
import { Section, Title, Link, Text, Image, Tag, Bullets } from '@/components'

const ReactTrelloBoard = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Section
      opened={opened}
      label={
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>react-trello-board</Title>
          <div className="flex ml-3">
            <Tag type="frontend">Frontend</Tag>
          </div>
        </div>
      }
      content={
        <div className="flex flex-col mt-8 ml-6 space-y-4">
          <Bullets items={['[gif] dragging cards on a board']} />
          <Text>A Trello like board based on React, Redux, React-dnd</Text>
          <Link href="http://react-trello-board.web-pal.com/">
            react-trello-board.web-pal.com
          </Link>
          <Link href="https://github.com/web-pal/react-trello-board">
            github
          </Link>
        </div>
      }
    />
  )
}

export default ReactTrelloBoard
