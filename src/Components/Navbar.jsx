import React from 'react'
import logo from "../Images/CodingLogo.png"
import styles from "./CSS_FILES/Navbar.module.css"

const Navbar = () => {
  return (
    <>

    <div className='container'>
        <div className={styles.nav_div}>

        <img src={logo} alt="" />
        <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">CONTACT</a></li>
        </ul>

        </div>

    </div>
      
    </>
  )
}

export default Navbar
