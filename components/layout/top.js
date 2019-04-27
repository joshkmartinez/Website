import Link from '../Link'
import { Flex, Box } from 'rebass'
const Top = () => (
  <Flex>
    <Box p={3} width={1 / 2} bg="whitesmoke">
      Joshua Martinez
    </Box>
    <Box p={3} width={1 / 2} bg="grey">
      <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link>
    </Box>
  </Flex>
)

export default Top
