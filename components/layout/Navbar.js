import EndLinks from '../EndLinks'
import StartLinks from '../StartLinks'
import Link from '../Link'
import Icon from '../Icon'
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoGithub,
  IoMdKey,
  IoLogoLinkedin
} from 'react-icons/io'

import LinkContainer from '../LinkContainer'
import Title from '../Title';
const Navbar = () => (
  <LinkContainer>
    <StartLinks>
      <Title>Joshua Martinez</Title>
    </StartLinks>
    <EndLinks>
      <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link>
    </EndLinks>
  </LinkContainer>
)
export default Navbar
