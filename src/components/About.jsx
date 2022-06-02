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
        * React is fast, handles updates
        * **modular** - create components that are reusable
        * **scalable** - good for large programs that display lot of changing data
        * **flexible**
        * react allows use to create re-usable and reactive components 
        * uses a declarative approach
          * define the desired target states and let react figure out the actual javasript DOM instructions
          * clear instructions for react to render

        ### What does it use?
        * uses the virtual DOM
          * a blueprint of the DOM
          * when Reach changes elements or updates, it renders it in the VDOM
          * only re-renders the **element that is changed**
          * makes it faster
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