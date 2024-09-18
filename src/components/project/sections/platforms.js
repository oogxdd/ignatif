import { Section, Label, Tag } from '@/components/common'

export const Platforms = ({ platforms }) => {
  if (!platforms || platforms.length === 0) return null

  return (
    <Section>
      <Label>Platforms:</Label>
      <div className="flex flex-wrap gap-x-1">
        {platforms.map((platform) => (
          <Tag key={platform}>{platform}</Tag>
        ))}
      </div>
    </Section>
  )
}
