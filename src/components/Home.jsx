import React from 'react'
import Card from '../components/Card'
import Navbar from './Navbar'
import HomeCSS from './Home.module.css'
import Footer from './Footer'


const Home = () => {
  return (
    <>
      <Navbar />
      <section className={HomeCSS.banner}>
        <div className={HomeCSS.bannerWrap}></div>
      </section>

      <section className={HomeCSS.donationList}>
        <header>
          <h1>Donation Lists</h1>
        </header>
        <div className={HomeCSS.lists}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        
        <a href="/donations"><button className={HomeCSS.btn}>Show More Donations</button></a>
      </section>

      <section className={HomeCSS.donationList}>
        <header>
          <h1>Food Requests Lists</h1>
        </header>
        <div className={HomeCSS.lists}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        
        <a href="/request"><button className={HomeCSS.btn}>Show More Requests</button></a>
      </section>

      <footer>
        <Footer />
      </footer>
      
    </>
  )
}

export default Home