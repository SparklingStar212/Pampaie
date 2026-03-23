import React from 'react'
import CBNLogo from '../assets/cbn-logo.png'
import NDICLogo from '../assets/ndic-logo.png'
import Hero from '../assets/hero.png'
import GooglePlay from '../assets/googlePlay.png'
import AppleStore from '../assets/appleStore.png'
import Banner from '../assets/Banner.png'
import '../App.css'
import './LandingPage.css'
import Card from '../components/Card'
import TransactionImage from '../assets/transactions.png'
import TextFirstSection from '../components/TextFirstSection'
import ImageFirstSection from '../components/ImageFirstSection'
import Friends from '../assets/friends.jpg'
import Family from '../assets/famlily.jpg'
import PalmPayCard from '../assets/palmpay-card.png'
import Mallam from '../assets/mallam.jpg'
import Man from '../assets/man.jpg'
import Market from '../assets/market.jpg'
import TrustSection from '../components/TrustSection'
import Testimonials from '../components/Testimonials'
import DownloadSection from '../components/DownloadSection'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <>
      <section className='section-one'>
        <div className='text-content'>
          <h1>The Smarter Way to Bank is Here</h1>
          <p>Tools to help you pay, earn, save and grow - all in one app</p>
          <div className='download-buttons'>
            <img src={GooglePlay} alt="Google Play" />
            <img src={AppleStore} alt="Apple Store" />
          </div>
          <div className='license-info'>
            <div className='cbn-license'>
              <small>Licensed by the CBN</small>
              <img src={CBNLogo} alt="CBN Logo" />
            </div>
            <div className='ndic-license'>
              <small>Deposits insured by</small>
              <img src={NDICLogo} alt="NDIC Logo" />
            </div>
          </div>
        </div>
        <div className='image-content'>
          <img src={Hero} alt="Hero" className="hero-img" />
        </div>
      </section>

      <div className='banner'>
        <img src={Banner} alt="Banner" />
      </div>

      <section className='section-two'>
        <div className='section-two-top'>
          <h1>Built For People Going Places</h1>
          <p>Earn more, save smarter, and level up your life</p>
        </div>
        <div className='section-two-bottom'>
          <div className='section-two-text'>
            <Card cardTitle={"Unlimited Free Transfers"}
              cardText={"Fast, free & reliable transfers to other PalmPay users and banks"} />
            <Card cardTitle={"Up to 20% Savings Interest"}
              cardText={"Earn interest daily, withdraw anytime"} />
            <Card cardTitle={"Cashback on bills & more"}
              cardText={"Get rewarded for your everyday spending"} />
          </div>
          <div className='section-two-img'>
            <img src={TransactionImage} alt="" />
          </div>
        </div>
      </section>
      <TextFirstSection 
        title="Stop paying to send money"
        description={<>PalmPay gives you <span>unlimited free bank transfers</span> - no daily limits, no hidden fees.</>}
        rectangleText="99.95% success rate within 10 seconds!"
        image={Friends}
        bgColor="rgb(240, 240, 255)"
      />
      <ImageFirstSection 
        title="Pay bills with ease"
        description="Airtime, data, TV, electricity and more - we've got you covered. Earn cashback and discounts on your everyday payments."
        rectangleText="Enjoy instant bill payments!"
        image={Family}
        bgColor="white"
      />
      <TextFirstSection 
        title="Take control of your money"
        description="The PalmPay card is everything you need to spend, save and manage your money. Order a physical card or get a virtual one instantly."
        rectangleText="Request your card today!"
        image={PalmPayCard}
        bgColor="rgb(240, 240, 255)"
      />
      <ImageFirstSection 
        title="Save for your goals"
        description="Earn up to 20% annual interest on your savings. Build wealth with flexible plans that let you save daily, weekly or monthly."
        rectangleText="Start saving and earning!"
        image={Mallam}
        bgColor="white"
      />
      <TextFirstSection 
        title="Get cash in a flash"
        description="Need extra funds? Get instant loans of up to ₦500,000 without collateral. Borrow now and pay back flexibly."
        rectangleText="Apply in minutes!"
        image={Man}
        bgColor="rgb(240, 240, 255)"
      />
      <ImageFirstSection 
        title="Grow your business"
        description="Accept payments instantly with our POS terminals. Enjoy competitive fees and reliable network uptime for your business transactions."
        rectangleText="Get a POS terminal today!"
        image={Market}
        bgColor="white"
      />
      <TrustSection />
      <Testimonials />
      <DownloadSection />
      <Footer />
    </>
  )
}

export default LandingPage