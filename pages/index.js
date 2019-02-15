import Head from 'next/head'
import { Button } from 'antd'
import { Box, Card, Image, Heading, Text, Flex } from 'rebass'
import 'antd/dist/antd.min.css'
//import injectSheet from 'react-jss'
import '../styles/sheet.css'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
const Index = () => (
  <div>
    <Head>
      <title>Joshua Martinez</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
    </Head>
    <Flex>
      <Box p={3} width={1 / 6} color="white" bg="blue">
        1
      </Box>
      <Box p={3} width={4 / 6} color="magenta" bg="black">
        <Paper elevation={9}>
          <div className="glitch large" data-text="Joshua">
            Joshua Martinez
          </div>

          <Typography component="p">This is the Description</Typography>
        </Paper>
      </Box>
      <Box p={3} width={1 / 6} color="white" bg="magenta">
        Box
      </Box>
    </Flex>
  </div>
)

export default Index
