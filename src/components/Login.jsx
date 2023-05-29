import React from 'react'
import { Link } from 'react-router-dom'
import LoginCSS from './Login.module.css'

const Login = () => {
    return (
        <>
            <div className={LoginCSS.container}>

                <section className={LoginCSS.navigator}>
                    <img src="" alt="" />
                    <div className={LoginCSS.navList}>   
                        <ul>
                            <Link to='/'><li>Home</li></Link>
                            <Link to='/'><li>FAQs</li></Link>
                            <Link to='/'><li>Donate</li></Link>
                        </ul>
                    </div>
                    <div className={LoginCSS.right}>
                        <Link to='/register'><button className={LoginCSS.btn}>SignUp</button></Link>
                    </div>
                </section>

                <div className={LoginCSS.wrapper}>
                    <div className={LoginCSS.header}>
                        <h1>Login Here</h1>
                        <p>Welcome Back! please put you credentials below to start using the website.</p>
                    </div>

                    <div className={LoginCSS.credentials}>
                        <div className={LoginCSS.email}>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text" id='email' placeholder='hello@example.com' />
                            </div>
                        </div>

                        <div className={LoginCSS.password}>
                            <div>
                                <label htmlFor="pass">Password</label>
                                <input type="password" id='pass' placeholder='Enter your Password here' />

                            </div>
                        </div>
                    </div>

                    <div className={LoginCSS.forgot}>
                        <Link to='#' className={LoginCSS.passLink}>Forgot password?</Link>
                    </div>

                    <hr />

                    <div className={LoginCSS.login}>
                        <button className={LoginCSS.btn}>Log in</button>
                    </div>

                    <div className={LoginCSS.signUp}>
                        <p>Don't you have an account? <Link to="/register" className={LoginCSS.signLink}>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login