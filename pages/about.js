import React from 'react'
import Jumbo from '../components/Jumbo'
import Bottom from '../components/layout/bottom'
import Container from '../components/layout/Container'
import Top from '../components/layout/top'
const About = () => (
  <Container>
    <Top />

    <Jumbo>
      <div>I am a maker.</div>
    </Jumbo>

    <Bottom />
  </Container>
)
export default About
