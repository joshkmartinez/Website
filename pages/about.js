import React from 'react'
import Jumbo from '../components/Jumbo'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Animation from '../components/layout/Animation'
const About = () => (
  <React.Fragment>
    <Jumbo>
      <Navbar />
      <div>I made the thing do something.</div>
      <Footer />
    </Jumbo>
  </React.Fragment>
)
export default About
