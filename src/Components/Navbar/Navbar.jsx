import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import style from './Navbar.module.css'
import logo from '../../Images/apexLogo.png'

const CustomLink = ({to , title , className="" , toggle}) => {
  const location = useLocation();

  const handelClick = ()=>{
    toggle()
  }

  return(
    <Link to={to} className={`${className} relative end-0 group !hover:text-red-500 ${location.pathname === to ? 'border-b-2 border-red-500' : ''} `} onClick={() => {handelClick()}}>
      {title}
    </Link>
  )
}



const Navbar = () => {


  const [isOpen , setIsOpen] = useState(false)

  const handelClick = ()=>{
    setIsOpen(!isOpen)
  }

  return <>
  <header className= {`${style.header} relative z-10 lg:px-16 md:px-12 sm:px-8  w-full px-32 py-8 font-medium flex items-center justify-between fixed-top`} >

  <button className='hidden lg:flex  flex-col justify-center items-center' onClick={handelClick}>
    <span className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-0.5' : "-translate-y-0.5"}`}></span>
    <span className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
    <span className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1.5' : "translate-y-0.5"}`}></span>
  </button>

  
  <div 
  className='container flex justify-between items-center lg:hidden'> 

  <Link to='/' className='w-[110px] md:w-[120px]   top-1  '>
      <img className='w-100' src={logo} alt="icpc hti logo" />
  </Link>

  {/* links */}
  <nav className='flex justify-center align-center'>
    <CustomLink to='/'  title="Home"  className='mr-3 text-decoration-none text-light'/>
    <CustomLink to="/about" title="About Us" className='mx-3 text-decoration-none text-light'/>
    <CustomLink to="/Team" title="Team subdivision" className='mx-3 text-decoration-none text-light'/>
    <CustomLink to="/Competitions" title="Competitions" className='mx-3 text-decoration-none text-light'/>
    <CustomLink to="/Projects" title="Projects" className='mx-3 text-decoration-none text-light'/>
    <CustomLink to="/Join" title="Join us" className='mx-3 text-decoration-none text-light'/>
    
  </nav>

</div>

{
  isOpen ?
<div 
initial={{scale:0 , opacity:0 , x:"-50%" , y:"-50%"}}
animate={{scale:1 , opacity:1 }}
transition={{duration:1}}
className='z-30 login rounded-lg backdrop-blur-md bg-dark/50 py-[70px] min-w-[70vw] flex flex-col  justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
  <nav className='flex items-center flex-col justify-center'>
    <CustomLink to='/'  title="Home"  className='mx-3 text-decoration-none text-light' toggle={handelClick}/>
    <CustomLink to="/about" title="About" className='mx-3 mt-2 text-decoration-none text-light' toggle={handelClick}/>
    <CustomLink to="/training" title="Training" className='mx-3 mt-2 text-decoration-none text-light' toggle={handelClick}/>
    <CustomLink to="/committees" title="Committees" className='mx-3 mt-2 text-decoration-none text-light' toggle={handelClick}/>
    <CustomLink to="/ecpc" title="ECPC" className='mx-3 mt-2 text-decoration-none text-light' toggle={handelClick}/>
    {/* <CustomLink to="/form" title="Form" className='mx-3 mt-2 text-decoration-none text-light' toggle={handelClick}/> */}


  </nav>
</div>
  : null
}
        <img className='hidden lg:flex w-25' src={logo} alt="" />

  </header>
  </>
}

export default Navbar