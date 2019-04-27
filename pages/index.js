import React from 'react'
import Jumbo from '../components/Jumbo'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Animation from '../components/layout/Animation'
import Snow from '../components/animations/Snow'
import Button from '../components/Button'
import Wave from '../components/animations/Wave'
import Top from '../components/layout/top'
import Bottom from '../components/layout/bottom'
import Container from '../components/layout/Container'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { easterEgg: false }
  }

  componentDidMount() {}
  render() {
    return (
      <Container>
        {/*<Navbar />*/}

        <Top />

        <Jumbo>
          <Animation />
        </Jumbo>

        {/*<Button />*/}
        {/*<Footer />*/}

        <Bottom />

        {/*<StickyFooter
          bottomThreshold={50}
          normalStyles={{
            backgroundColor: '#999999',
            padding: '2rem'
          }}
          stickyStyles={{
            backgroundColor: 'rgba(255,255,255,.8)',
            padding: '2rem'
          }}
        >
          <Footer />
        </StickyFooter>*/}
      </Container>
    )
  }
}

export default App
