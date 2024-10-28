import React from 'react'
import HomeImg from '../../Images/heroImg.jpeg'
import heroCar from '../../Images/carImage.png'
import style from './Hero.module.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero relative ">
        <div className='overlay absolute bgWaves w-100 h-[100%] sm:h-[91.5%] xs:h-[98%]'></div>
        <img className='w-full  vh-100 object-cover' src={HomeImg} alt='' />
        <h2 className='absolute top-[20%] left-[15%] sizeBackText font md:!text-9xl md:top-[30%]'>EVENT 24</h2>
        <div className="container absolute top-[40%] left-[10%]">
            <div className="row">
                <div className="col-md-7 ">
                    <h2 className='text-light !text-8xl md:!text-7xl sm:!text-6xl xs:!text-4xl fw-bold mb-4 font'>Welcome to Apex</h2>
                    <p className='text-light/60 w-75'>
                        Lorem ipsum dolor sit amet consectetur.
                         Donec sit diam nunc purus non sagittis lorem praesent
                         Donec sit diam nunc purus non 
                          ultrices.
                    </p>
                    <div className="buttonG flex">
                        <Link className={`${style.signInBtn}  `}>SignIn</Link>
                        <Link className={`${style.signUpBtn}  `}>SignUp</Link>
                    </div>
                </div>
                <div className="col-md-5 block md:hidden">
                    <img className='' src={heroCar} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero