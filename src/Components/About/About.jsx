import React from 'react'
import aboutImage from "../../Images/heroImg.jpeg"
import style from './About.module.css'


const About = () => {





  return <>

    <section className={`${style.aboutSection}  flex `}>

      <div className={`${style.aboutContainer}   flex`}>

        {/* aboutDescription=================================================> */}
        <div className={`${style.aboutDesciption}   w-1/2`}>

          <h2 className='m-0'>About APEX</h2>

          <p className='m-0  '>
            We are an electric vehicle team that started in
            2018 from students of the Higher Technological
            Institute, 10th of Ramadan. We participate in
            many competitions inside and outside Egypt
            We are an electric vehicle team that started in
            2018 from students of the Higher Technological
            Institute, 10th of Ramadan. We participate in
            many competitions inside and outside Egypt
          </p>

          <button className='m-0'>Learn More</button>

        </div>

        {/* aboutImageContainer================================================> */}
        <div className={`${style.aboutImageContainer}   flex justify-end w-1/2 `}>


          <div className={`${style.aboutImage} w-11/12`}>
            <img src={aboutImage} alt="apex racing team" />
          </div>


        </div>


      </div>

      {/* backgroundColor=======================================================> */}
      <div className={style.glow1}></div>
      <div className={style.glow2}></div>

    </section>


  </>
}

export default About
