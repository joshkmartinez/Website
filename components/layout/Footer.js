import FooterContainer from '../FooterContainer'
import Link from '../Link'
import Icon from '../Icon'
import StartLinks from '../StartLinks'
import EndLinks from '../EndLinks'
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoGithub,
  IoMdKey,
  IoLogoLinkedin
} from 'react-icons/io'
const Footer = () => (
    <FooterContainer>
      <StartLinks>
        <Link href="https://twitter.com/joshkmartinez">
          <Icon Icon={IoLogoTwitter} />
        </Link>
        <Link href="https://github.com/joshkmartinez">
          <Icon Icon={IoLogoGithub} />
        </Link>
        <Link href="https://instagram.com/joshkmartinez">
          <Icon Icon={IoLogoInstagram} />
        </Link>
        <Link href="https://instagram.com/joshkmartinez">
          <Icon Icon={IoMdKey} />
        </Link>
        <Link href="https://instagram.com/joshkmartinez">
          <Icon Icon={IoLogoLinkedin} />
        </Link>
      </StartLinks>
      <EndLinks>
        <div />
      </EndLinks>
    </FooterContainer>
)

export default Footer
