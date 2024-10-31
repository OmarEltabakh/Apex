import React from 'react'

import style from "./AboutPageSection2.module.css"

const AboutPageSection2 = () => {



  return <>

    <section className={`${style.aboutPageSection2} flex `}>

      <div className={`${style.container} specialContainer   `}>

        <div  className=' m-auto '>
          <video className=' w-full'
            src="path/to/video.mp4"

            controls
            autoPlay
            loop
            muted
            poster="path/to/poster.jpg"
            preload="auto">



          </video>
        </div>

      </div>


      {/* backgroundColor=======================================================> */}
      <div className={style.glow2}></div>
      <div className={style.glow1}></div>


    </section>
  </>
}

export default AboutPageSection2
