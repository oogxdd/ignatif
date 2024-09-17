import { Icon } from '@/components/common'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons'

const Header = ({
  name,
  role,
  description,
  email,
  github,
  linkedin,
  twitter,
}) => (
  <header className="mb-12 text-sand-12">
    <h1 className="text-xl font-bold">{name}</h1>
    <h2 className="text-base mb-4 dark:text-sand-12 dark:opacity-90">{role}</h2>
    <p className="mb-4 dark:text-sand-11">{description}</p>
    <div className="flex space-x-2.5">
      <Icon
        href={`mailto:${email}`}
        icon={<EnvelopeClosedIcon className="w-[18px] h-[18px]" />}
      />
      <Icon
        href={github}
        icon={<GitHubLogoIcon className="w-[18px] h-[18px]" />}
      />
      <Icon
        href={linkedin}
        icon={<LinkedInLogoIcon className="w-[18px] h-[18px]" />}
      />
      <Icon
        href={twitter}
        icon={<TwitterLogoIcon className="w-[18px] h-[18px]" />}
      />
    </div>
  </header>
)

export default Header
