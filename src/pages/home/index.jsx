import React from 'react'
import Hero from './Hero'
import Services from './Services'
import YtVideo from './YtVideo'
import Projects from '../../components/Projects'
import Tour from './Tour'
import Logos from './Logos'

const Home = () => {
  return (
    <main>
      <Hero/>
      <div className="flex justify-center">
        <Services/>
      </div>
      <YtVideo/>
      <Tour/>
      <Projects/>
      <Logos/>
    </main>
  )
}

export default Home