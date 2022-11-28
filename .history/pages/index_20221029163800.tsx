import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { AboutUs, Blog, Certified, Footer, Hero, Reasons, Services, Stats, Steps, Testimonials } from '../components'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>DryCleaners</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Steps />
      <Services />
      <Reasons/>
      <Stats />
      <AboutUs />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home
