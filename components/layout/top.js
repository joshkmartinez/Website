import Link from '../Link'
import { Flex, Box, Text } from 'rebass'
import Holder from './CenterHolder'
const Top = () => (
  <Holder>
    <Flex>
      <Box p={3} width={1 / 2} /*bg="whitesmoke"*/>
        <Link /*this will redirect to home*/>
          <Text fontWeight={900}>Joshua Martinez</Text>
        </Link>
      </Box>
      <Box p={3} width={1 / 2} /*bg="grey"*/>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/resume">Résumé</Link>
      </Box>
    </Flex>
  </Holder>
)

export default Top
