import { useState } from 'react'
import { Title } from '@/components'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

export default () => {
  const [opened, setOpened] = useState(false)

  return (
    <div className="flex flex-col px-12 pt-20 space-y-8 min-h-screen w-screen bg-gray-50">
      <div className="flex flex-col">
        <ArrowLeftIcon className="h-8 w-8 absolute top-7 opacity-50" />
        <div className="flex flex-row items-end">
          <Title onClick={() => setOpened(!opened)}>Soundfuck</Title>
        </div>
        {opened && (
          <>
            <span>info here</span>
          </>
        )}
      </div>
    </div>
  )
}
