import React,{useState} from 'react'
import CardCSS from './Card.module.css'
import Modal from './Modal/Modal'
import food  from '../images/food.jpg'

const Card = () => {
  const [modal, setModal] = useState(false);

  const closeModal = () => setModal(false);

  return (
    <div className={CardCSS.cardContainer}>
        <div className={CardCSS.info}>
          <img className = {CardCSS.imgSection} src={food} alt="food" />
          <h3 className={CardCSS.orgName}>Abc Organization pvt. ltd.</h3>
          <div className={CardCSS.quantity}>
            <h3 className={CardCSS.headName}>Quantity</h3>
            <div>200kg</div>
          </div>
          <div>fresh cooked 2hrs ago</div>

          <div className={CardCSS.location}>
            <h3 className={CardCSS.headName}>Location</h3>
            <div>11/2,Kareems,plaza chowk, Ranchi,345021</div>
          </div>

          <hr />

          <div className={CardCSS.details} onClick={()=>setModal(true)}>
            Know More ➡️
          </div>

          {modal && <Modal closeModal = {closeModal}/>}
          
        </div>
    </div>
  )
}

export default Card