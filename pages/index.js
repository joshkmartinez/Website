import React from 'react'
import Head from 'next/head'
import { Box, Flex, Card } from 'rebass'
import 'antd/dist/antd.min.css'
//import injectSheet from 'react-jss'
import '../styles/sheet.css'

const Index = () => (
  <React.Fragment>
    <Head>
      <title>Joshua Martinez</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
    </Head>
    <Flex alignItems="center" justifyContent="center">
      <Box p={3} width={0.5 / 3} />
      <Box p={3} width={2 / 3}>
        <Flex alignItems="center" justifyContent="center">
          <Card
            width={[1 / 3, 1 / 2, 1]}
            p={3}
            m={3}
            borderRadius={9}
            boxShadow="0 3px 16px rgba(0, 0, 0, 0.25)"
          >
            <Flex alignItems="center" justifyContent="center">
              <Box width={1}>
                <Flex alignItems="center" justifyContent="center">
                  <div className="glitch large" data-text="Joshua">
                    Joshua Martinez
                  </div>
                </Flex>
              </Box>
            </Flex>
          </Card>
        </Flex>
      </Box>
      <Box p={3} width={0.5 / 3} />
    </Flex>
  </React.Fragment>
)

export default Index
