import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';


function About() {
  return (
    <motion.div
      initial={{ x: '100vw'}}
      transition={{ type:'spring', delay: 1.5}}
      animate={{ x: 0}}
    >
      <motion.h2 animate={{ x: 100}}> what is react?</motion.h2>
      <p>

          <Link to='/components'>
            <motion.button
              animate={{ scale: 1.5 }}
            >Components</motion.button>
          </Link>
      </p>
    </motion.div>
    
  )
}

export default About

//call in motion.htmlElement and then you can use the different props
//pass in an object, which are the different properties