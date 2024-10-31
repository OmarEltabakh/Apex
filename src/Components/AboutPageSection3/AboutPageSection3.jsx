import React from 'react'
import style from "./AboutPageSection3.module.css"
const AboutPageSection3 = () => {


  let content = [
    {
      title: "Our Vision",
      description: "Lorem ipsum dolor sit amet consectetur. Arcu et praesent et orci elit venenatis velit amet. Ut ac diam vitae blandit posuere. In integer ut non nisl faucibus purus mi id. Elit habitant."
    },
    {
      title: "Our Mission",
      description: "Lorem ipsum dolor sit amet consectetur. Arcu et praesent et orci elit venenatis velit amet. Ut ac diam vitae blandit posuere. In integer ut non nisl faucibus purus mi id. Elit habitant."

    },
    {
      title: "Our Goles",
      description: "Lorem ipsum dolor sit amet consectetur. Arcu et praesent et orci elit venenatis velit amet. Ut ac diam vitae blandit posuere. In integer ut non nisl faucibus purus mi id. Elit habitant."
    }

  ]


  return <>


    <section className={`${style.aboutPageSection3}`}>

      {/* <==================================================container==================================================> */}
      <div className={`${style.container} specialContainer `}>

        <div className={`${style.content}`}>


          {content.map((item, index) =>
            <div key={index}>

              <div className={`${style.line} mx-auto ${item.title === "Our Vision" && "mt-0"}`} />

              {/* contentContainer==========================================================> */}
              <div className={`${style.contentContainer}  flex `}>

                <div className={`${style.titleContainer} w-1/2    flex items-center `}>
                  <h4 className='m-0  '>{item.title}</h4>
                </div>

                <div className={`${style.desciptionContainer} w-1/2    `}>
                  <p className='m-0 w-11/12 '>{item.description}</p>
                </div>

              </div>

            </div>
          )}

        </div>



      </div>


    </section>



  </>
}

export default AboutPageSection3
