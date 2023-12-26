import React from 'react'
import Button from './Button';
import styles from "./CSS_FILES/ContactForm.module.css"
import { useState } from 'react';
import contactImage from "../Images/Service.svg"
import { MdChat } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


const ContactForm = () => {
    const [info,setinfo]=useState({
        "name":"",
        "email":"",
        "message":"",
})


    const handleSubmit=(event)=>{
        event.preventDefault()

        setinfo((prevInfo)=>({
            ...prevInfo,
            [event.target[0].name]:event.target[0].value,
            [event.target[1].name]:event.target[1].value,
            [event.target[2].name]:event.target[2].value,
            
        }))



    }
  return (
    <>
    <div className={styles.main_container}>
        <div className={styles.form_div}>
            <div className={styles.upper_buttons}>
                <Button is_primary={true} icon={<MdChat fontSize={'20px'}  />} text={"VIA SUPPORT CHAT"} ></Button>
                <Button is_primary={true} icon={<IoCall fontSize={'20px'}  />} text={"VIA CALL"} ></Button>
            </div>
            <Button is_primary={false}  icon={<MdEmail fontSize={'20px'}  />} text={"VIA EMAIL"} />


            <form onSubmit={handleSubmit}>
                <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="" />

                </div>

                <div className={styles.form_control}>
                <label htmlFor="email">E-Mail</label>
                <input type="text" name="email" id="" />

                </div>
                <div className={styles.form_control}>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id=""  rows="9"></textarea>
                </div>

                <div className={styles.end_button}>
                    <Button is_primary={true} text={"SUBMIT"}></Button>
                </div>
                {info.name+" "+info.email+" "+info.message}

            </form>






        </div>
        <div className={styles.image_div}>
            <img src={contactImage} alt="" />

        </div>



    </div>
      
    </>
  )
}

export default ContactForm
