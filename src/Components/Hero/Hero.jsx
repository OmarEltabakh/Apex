import React from 'react'
import heroCar from '../../Images/carImage.png'
import style from './Hero.module.css'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

const Hero = () => {

    var settings = {
        className: "center",
        centerMode: true,
        dots: false,
        autoplay:true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        cssEase: "linear",
      };

  return (
    <div className={style.hero}>
        <div className='overlay absolute bgWaves w-100 h-[100%] '></div>
        <div className="z-30 container ">
            <h2 className={style.fontBack}>EVENT 24</h2>
            <div className="row justify-between align-items-center">
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
                <div className="col-md-5 ">
                    <Slider {...settings}>
                        <div>
                            <img src={heroCar} alt="" />
                        </div>
                        <div>
                            <img src={heroCar} alt="" />
                        </div>
                        <div>
                            <img src={heroCar} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero