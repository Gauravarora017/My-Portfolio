import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import { useRef } from "react"
import emailjs from "emailjs-com"

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wumwrgi', 'template_3cksiqn', form.current, '76Y9zHKw9s_CIuq2q');

    setData({
      fullname: "",
      email: "",
      subject: "",
      message: "",})


      alert(
        "Message Sent"
      )

      
      

  };
  const [data, setData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Gaurav Arora</h1>
                  <p>Full-Stack Web Developer</p>
                  <p>I am available for freelance work. Contact me via call or E-mail.</p> <br />
                  <p>Phone: +91-8938978362</p>
                  <p>Email: arora2000gaurav@gmail.com</p> <br />
                  
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={sendEmail} ref = {form}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                 
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
