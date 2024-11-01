import React from 'react'
import HomeImg from '../../Images/heroImg.jpeg'
import heroCar from '../../Images/carImage.png'
import style from './Hero.module.css'
import { Link } from 'react-router-dom'

const Hero = () => {

  return (
    <div className="hero relative overflow-hidden  ">
        <div className='overlay absolute bgWaves w-100 h-[100%] '></div>
        <img className='w-full  vh-100 object-cover' src={HomeImg} alt='' />
        <h2 className='absolute top-[20%] left-[15%] sizeBackText font md:!text-[130px] sm:!text-[100px] xs:!text-[70px] md:left-[10%] md:top-[30%] xs:top-[35%]'>EVENT 24</h2>
        <div className="container absolute top-[40%] left-[10%]">
            <div className="row">
                <div className="col-md-7">
                    <h1 className='text-light !text-8xl md:!text-8xl sm:!text-[55px] xs:!text-7xl fw-bold mb-4 font'>Welcome to Apex</h1>
                    <p className='text-light/60 text-[17px] xs:text-[15px] w-75'>
                        Lorem ipsum dolor sit amet consectetur.
                         Donec sit diam nunc purus non sagittis lorem praesent
                         Donec sit diam nunc purus non 
                          ultrices.
                    </p>
                    <div className="buttonG flex mt-4">
                        <Link className={`${style.signInBtn}`}>SignIn</Link>
                        <Link className={`${style.signUpBtn}`}>SignUp</Link>
                    </div>
                </div>
                <div className="col-md-5 block md:hidden">
                    <img src={heroCar} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero