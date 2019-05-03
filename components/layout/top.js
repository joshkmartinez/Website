import Link from '../Link'
import { Flex, Box } from 'rebass'
const Holder = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      text-align: center;
      font-family: Roboto;
    `}</style>
  </div>
)
const Top = () => (
  <Holder>
    <Flex>
      <Box p={3} width={1 / 2} /*g="whitesmoke"*/>
        Joshua Martinez
      </Box>
      <Box p={3} width={1 / 2} /*bg="grey"*/>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
      </Box>
    </Flex>
  </Holder>
)

export default Top
