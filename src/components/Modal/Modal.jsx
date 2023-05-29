import React from 'react'
import mod from './Modal.module.css'
import shishu from '../../images/shishui.jpg'

const Modal = ({ closeModal }) => {

  


    return (
        <div>
            <div className={mod.main}>
                <div className={mod.container}>
                    <span onClick={closeModal}>x</span>
                    <div className={mod.top}>
                        <div className={mod.modalContent}>
                            <div className={mod.left}>
                                <img src={shishu} alt="" />
                                <div className={mod.orgName}>
                                    <h3>Abc Organization</h3>
                                </div>

                                <div className={mod.dateTime}>
                                    27th May, 11:00 A.M
                                </div>

                                <div className={mod.qualinity}>
                                    <div>200kg</div>
                                    <div>Fresh, cooked 2hrs ago</div>
                                </div>
                                <div className={mod.location}>
                                    11/2,Kareems,plaza chowk, ranchi,834521
                                </div>
                            </div>
                            <div className={mod.right}>
                                <div className={mod.info}>
                                    <div>
                                        <h3>Name of the Organization</h3>
                                        <p>Crown Plaza</p>
                                    </div>

                                    <div className={mod.contactDetails}>
                                        <h3>Phone No.</h3>
                                        <p>8343728234</p>

                                        <h3>Email</h3>
                                        <p>abc@example.com</p>
                                    </div>

                                    <div className={mod.description}>
                                        <h3>Description</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero omnis laudantium veniam eaque nemo obcaecati! Libero provident, hic qui impedit autem fuga quo recusandae nesciunt quisquam doloribus sint in dolor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={mod.bottom} onClick={closeModal}>
                        <h3>Donate</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal