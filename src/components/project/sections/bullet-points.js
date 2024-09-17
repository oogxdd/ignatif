import { Section, Label } from '@/components/common'

export const BulletPoints = ({ bullets }) => (
  <Section>
    <Label>What I've done:</Label>
    <ul className="list-disc list-inside space-y-1.5 text-sand-12">
      {bullets.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </Section>
)
