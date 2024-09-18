import { Section, Label, Paragraph } from '@/components/common'
import { formatDate } from '@/utils'

export const Dates = ({ start, end }) => {
  if (!start) return null

  return (
    <Section>
      <Label>Dates:</Label>
      <Paragraph className="">{`${formatDate(start)} - ${end ? formatDate(end) : 'Current'}`}</Paragraph>
    </Section>
  )
}
