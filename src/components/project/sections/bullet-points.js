import { Section, Label } from '@/components/common'

export const BulletPoints = ({ bullets }) => (
  <Section>
    <Label>What I've done:</Label>
    <ul className="list-disc list-outside ml-4 sm:list-inside sm:ml-0 space-y-4 sm:space-y-1.5 text-sand-12 text-[15px] sm:text-base">
      {bullets.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </Section>
)
