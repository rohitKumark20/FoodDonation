import React from 'react'
import Navbar from '../Navbar'
import donCss from './Donation.module.css'
import Card from '../Card'

const Donor = () => {
  return (
    <div>
      <Navbar />
      <div className={donCss.wrapper}>
        <section className={donCss.header}>
          <div className={donCss.message}>
            <h1>"Thank you for choosing to make a difference through your donation."</h1>
            <p>That's wonderful to hear that you're ready to donate! Your decision to give back and make a positive impact is truly inspiring. Your generosity will not only benefit those in need but also contribute to creating a better world.</p>
          </div>
        </section>


        <section className={donCss.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>

        <section className={donCss.motivation}>
          <div>
            <h1>"With your support, you've brought the gift of a smile to someone who needed it most."</h1>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Donor