import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";



const Contact = () => {
 
  const formRef = useRef();
  
  const [form, setForm] = useState ({
    name: "",
    email: "",
    message: '',
  });
  
  const [loading, setloading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    emailjs.send('service_rb8o70v', 
    'template_zsczxdn',

    {
      from_name: form.name,
      to_name: "Francis",
      from_email: form.email,
      to_email: "gachungafrank@gmail.com",
      message: form.message,
    }
    ,'5QHdJsroCKr_DVcpt')

      .then(() => {

        setloading(false);
        alert('Thank you for reaching out! I will get back to you as soon as possible.')
        
        setForm({
          name: "",
          email: "",
          message: "",
        })

      }, 
      (error) => {
        setloading(false);
        alert("Something went wrong. Please try again")
        console.log(error.text);
      });
  };

 return(
  <div 
  className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`} 
  >
    <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
           <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Name
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Kindly enter your name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />            
           </label>
           
           <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Email
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />            
           </label>
           
           <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Message
            </span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Feel free to message me"
              className='bg-tertiary py-4 px-6 
              placeholder:text-secondary 
              text-white rounded-lg 
              outline-none border-none font-medium'
            />            
           </label>

           <button 
           type="submit"
           className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
           >
            {loading ? 'Sending message...' : 'Send'}            
           </button>

            
        </form>

        
    </motion.div>

    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
    >
        <EarthCanvas />
    </motion.div>
  </div>
 )
}
export default SectionWrapper (Contact, "contact");