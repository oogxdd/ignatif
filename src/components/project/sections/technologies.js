import { Section, Label, Tag } from '@/components/common'

export const Technologies = ({ technologies }) => (
  <Section>
    <Label>Technologies:</Label>
    <div className="flex flex-wrap gap-x-1 gap-y-2">
      {technologies.map((technology) => (
        <Tag key={technology}>{technology}</Tag>
      ))}
    </div>
  </Section>
)
