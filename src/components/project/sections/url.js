import { Section, Label, Link } from '@/components/common'

export const Url = ({ url }) => {
  if (!url) return null

  return (
    <Section>
      <Label>Url:</Label>
      <Link href="">LINK HERE</Link>
    </Section>
  )
}
