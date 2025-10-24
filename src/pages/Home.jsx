import React from 'react'
import { About, Banner, Contact, FAQ, Pricing, Services, Testimonials } from '../components'

const Home = () => {
  return (
    <div className='pages'>
    <Banner />
    <About />
    <Services />
    <Pricing />
    <Testimonials />
    <FAQ />
    <Contact />
    </div>
  )
}

export default Home
