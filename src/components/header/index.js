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
  <header className="mb-8 sm:mb-12 text-sand-12 flex flex-col">
    <h1 className="text-lg sm:text-xl font-bold">{name}</h1>
    <h2 className="text-sm sm:text-base mb-2 sm:mb-4 dark:text-sand-12 dark:opacity-90">
      {role}
    </h2>
    <p className="text-sm sm:text-base mb-6 sm:mb-4 dark:text-sand-11">
      {description}
    </p>
    <div className="flex flex-wrap gap-4 sm:gap-2.5">
      <Icon
        href={`mailto:ignatif@gmail.com`}
        icon={
          <EnvelopeClosedIcon className="w-[20px] h-[20px] sm:w-[18px] sm:h-[18px]" />
        }
      />
      <Icon
        href="https://github.com/oogxdd"
        icon={
          <GitHubLogoIcon className="w-[20px] h-[20px] sm:w-[18px] sm:h-[18px]" />
        }
      />
      <Icon
        href="https://www.linkedin.com/in/maxim-ignatev/"
        icon={
          <LinkedInLogoIcon className="w-[20px] h-[20px] sm:w-[18px] sm:h-[18px]" />
        }
      />
      <Icon
        href="https://x.com/oogxdd"
        icon={
          <TwitterLogoIcon className="w-[20px] h-[20px] sm:w-[18px] sm:h-[18px]" />
        }
      />
    </div>
  </header>
)

export default Header
