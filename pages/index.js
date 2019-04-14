import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import {
  Grommet,
  Box,
  Heading,
  Button,
  Text,
  Markdown,
  Paragraph
} from 'grommet'
import 'isomorphic-fetch'
const theme = {
  global: {
    colors: {
      brand: '#123456'
    },
    font: {
      family: 'Helvetica'
    }
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { easterEgg: false }
  }

  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Joshua Martinez</title>
        </Head>
        <Grommet theme={theme}>
          <Box
            animation="fadeIn"
            align="center"
            margin="large"
            alignContent="center"
          >
            <Heading margin="small" textAlign="center">
              Joshua Martinez
            </Heading>

            <Box
              direction="row-responsive"
              pad="medium"
              align="center"
              alignContent="center"
              animation="zoomIn"
              basis="full"
            >
              <Button
                label="Learn more"
                color="brand"
                margin="medium"
                hoverIndicator
                primary
                onClick={() => window.scrollTo(0, window.innerHeight)}
              />
              <Button
                label="Github"
                color="brand"
                margin="medium"
                hoverIndicator
                primary
                href="https://github.com/joshkmartinez"
              />
            </Box>
          </Box>
        </Grommet>
      </React.Fragment>
    )
  }
}

export default App
