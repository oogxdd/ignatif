import { Section, Label, Paragraph } from '@/components/common'

export const Note = ({ note }) => (
  <Section>
    <Label>Note:</Label>
    <Paragraph>{note}</Paragraph>
  </Section>
)
