import React from 'react'
import styles from "./CSS_FILES/Button.module.css"

const Button = (props) => {
  return (
    <>
    <button className={props.is_primary?styles.primary_btn:styles.secondary_btn} >
        {props.icon}
        {props.text}
    </button>

      
    </>
  )
}

export default Button
