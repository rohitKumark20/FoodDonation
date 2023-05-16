import React from 'react'
import registerCSS from './Register.module.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <div className={registerCSS.container}>

        <section className={registerCSS.navigator}>
          <img src="" alt="" />
          <div className={registerCSS.navList}>
            <ul>
              <Link to='/'><li>Home</li></Link>
              <li>FAQs</li>
              <li>Donate</li>
            </ul>
          </div>
          <div className={registerCSS.right}>
            <Link to='/login'><button className={registerCSS.btn}>Login</button></Link>
          </div>
        </section>



        <div className={registerCSS.registerWrapper}>
          <div className={registerCSS.credentials}>

            <h1>Regiser Here</h1>

            <p>Fill the credentials to get yourself registered</p>
            <div className={registerCSS.Form}>
              <div className={registerCSS.firstName}>
                <input type="text" placeholder='First Name' />
              </div>

              <div className={registerCSS.lastName}>
                <input type="text" placeholder='Last Name' />
              </div>

              <div className={registerCSS.yourEmail}>
                <input type="text" placeholder='Email' />
              </div>

              <div className={registerCSS.Phone}>
                <input type="tel" placeholder='Phone No' />
              </div>

              <div className={registerCSS.createPass}>
                <input type="Password" placeholder='Create password (Atleast 8 characters)' />
              </div>

              <div className={registerCSS.confirmPass}>
                <input type="Password" placeholder='Confirm password' />
              </div>
            </div>

            <div className={registerCSS.register}>
              <button className={registerCSS.btn}>Register</button>
            </div>

            <div className={registerCSS.Login}>
              <p>Already have an account?<Link to="/login" className={registerCSS.linkLogin}> Log in</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register