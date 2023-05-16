import React from 'react'
import Card from '../components/Card'
import Navbar from './Navbar'
import HomeCSS from './Home.module.css'


const Home = () => {
  return (
    <>
      <Navbar />
      <section className={HomeCSS.banner}>
        <div className={HomeCSS.bannerWrap}>Rohit</div>
      </section>

      <section className={HomeCSS.donate}>
        <div className={HomeCSS.donateHead}>
          <h1>Donate Your Food Here!</h1>
          <button>Donate</button>
        </div>
        <div className={HomeCSS.donateWrap}>
          <div className={HomeCSS.left}>Hey Rohit
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
          <div className={HomeCSS.right}>WhatsUp man
            <div className={HomeCSS.Name}>
              <div>Name of Organization</div>
              <input type="text" placeholder='abc Organization' />
            </div>

            <div className={HomeCSS.Qunatity}>
              <div>Quanity of Food</div>
              <input type="text" placeholder='40kg approx' />
            </div>

            <div className={HomeCSS.Quality}>
              <div>Quality</div>
              <input type="text" placeholder='Cooked 4hrs ago' />
            </div>

            <div className={HomeCSS.Variety}>
              <div>Type of Food</div>
              <input type="text" placeholder='abc Organization' />
            </div>

            <div className={HomeCSS.Location}>
              <div>Location</div>
              <input type="text" placeholder='abc Organization' />
            </div>

            <button>Submit</button>

          </div>
        </div>
      </section>
    </>
  )
}

export default Home