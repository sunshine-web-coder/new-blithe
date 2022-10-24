import React from 'react'
import PrimaryLayout from '../../layouts/PrimaryLayout';
import Download from '../../sections/Download';
import Hero from '../../sections/Hero';
import Integration from '../../sections/Integration';
import Features from '../../sections/Features';
import Roadmap from '../../sections/Roadmap';
import Payment from '../../sections/payment';

const Home = () => {
  return (
    <PrimaryLayout>
      <Hero />
      <Features />
      <Download />
      <Integration />
      <Payment />
      <Roadmap />
    </PrimaryLayout>
  )
}

export default Home