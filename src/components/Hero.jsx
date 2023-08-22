import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full 
    h-screen mx-auto m-2`}>
      <div
        className={`${styles.paddingX} 
        absolute inset-0 top-[120px]  
        max-w-7xl mx-auto  
        flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center 
        items-center mt-5'>
          <div className='w-6 h-6 rounded-full bg-[#915EFF]' />
          <div className='w-2 sm:h-80 h-60 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <br className='sm:block hidden' /><span className="text-[#CCFF5E]">
            Francis</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am an aerospace engineer, skilled in 
              <br className='sm:block hidden' /> 3D modeling, 
              web development, 
              <br className='sm:block hidden' /> SQL databases , 
              and machine learning, 
              <br className='sm:block hidden' />crafting the future. 
              
          </p>
        </div>
      </div>

      <ComputersCanvas/>
      
      
      
      <div className="absolute xs:bottom-1
      bottom-3 w-full flex justify-center
      items-center">
         <a href="#about">
          <div className="w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2">
            <motion.dev 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
            style={{ justifyContent: "flex-end" }}/>
            
          </div>  
        </a> 

      </div>
    </section>
  )
}

export default Hero