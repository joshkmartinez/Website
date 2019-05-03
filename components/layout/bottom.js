import Link from '../Link'
import Icon from '../Icon'
import { Box, Card, Image, Heading, Text, Flex } from 'rebass'
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoGithub,
  IoMdKey,
  IoLogoLinkedin
} from 'react-icons/io'
const MenuHolder = ({ children, className }) => (
  <nav className={className}>
    {children}
    <style jsx>{`
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 21px 21vw;
      display: flex;
      flex-direction: row;
      text-align: left;
    `}</style>
  </nav>
)

const Bottom = () => (
  <Flex>
    <Box p={3} width={1 / 2} /*bg="whitesmoke"*/>
      <Link href="https://twitter.com/joshkmartinez">
        <Icon Icon={IoLogoTwitter} />
      </Link>
      <Link href="https://github.com/joshkmartinez">
        <Icon Icon={IoLogoGithub} />
      </Link>
      <Link href="https://instagram.com/joshkmartinez">
        <Icon Icon={IoLogoInstagram} />
      </Link>
      <Link href="https://keybase.io/joshkmartinez">
        <Icon Icon={IoMdKey} />
      </Link>
      <Link href="https://linkedin.com/in/joshkmartinez">
        <Icon Icon={IoLogoLinkedin} />
      </Link>
    </Box>
    <Box p={3} width={1 / 2} /*bg="grey"*/>
      <div />
    </Box>
  </Flex>
)

export default Bottom
