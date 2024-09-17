import { Section, Label, Tag } from '@/components/common'

export const Fields = ({ fields }) => (
  <Section>
    <Label>Fields:</Label>
    <div className="flex flex-wrap gap-x-1">
      {fields.map((field) => (
        <Tag key={field}>{field}</Tag>
      ))}
    </div>
  </Section>
)
