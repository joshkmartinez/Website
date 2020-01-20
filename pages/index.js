import React from 'react'
import Jumbo from '../components/Jumbo'
import Animation from '../components/layout/Animation'
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
        <Top />

        <Jumbo>
          <Animation />
        </Jumbo>

        <Bottom />
      </Container>
    )
  }
}

export default App
