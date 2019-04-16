import React from 'react'
import Jumbo from '../components/Jumbo'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Animation from '../components/layout/Animation'
import StickyFooter from 'react-sticky-footer'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { easterEgg: false }
  }

  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <Jumbo>
          <Navbar />
          <Animation />
          <Footer />
        </Jumbo>
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
      </React.Fragment>
    )
  }
}

export default App
