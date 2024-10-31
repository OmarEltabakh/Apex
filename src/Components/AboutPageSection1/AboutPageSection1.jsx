import React from 'react'
import style from "./AboutPageSection1.module.css"
// import aboutSectionImage from "../../Images/aboutImage/AboutImage.png"
import aboutSectionImage from "../../Images/heroImg.jpeg"


const AboutPageSection1 = () => {







    return <>

        <section className={`${style.AboutPageSection1} flex `}>

            {/* <==================================================container==================================================> */}
            <div className={`${style.container} flex specialContainer`}>

                {/* desciption==============================================> */}
                <div className={`${style.description}  w-1/2  `}>

                    <h2 className='m-0'>Who We Are !</h2>
                    <p className='m-0'>
                        Lorem ipsum dolor sit amet consectetur. Arcu et praesent et orci elit venenatis velit amet. Ut ac diam vitae blandit posuere. In integer ut non nisl faucibus purus mi id. Elit habitant.
                    </p>

                </div>

                {/* teamImage==============================================> */}
                <div className={`${style.teamImage}  w-1/2 flex justify-center `}>

                    <div className='w-11/12'>
                        <img className='w-100' src={aboutSectionImage} alt="apex racing team" />
                    </div>

                </div>

            </div>

        </section>



    </>
}

export default AboutPageSection1
