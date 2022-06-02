import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

function Main() {
  return (
    <motion.div
      initial={{ y: -100}}
      animate={{ y: 100 }}
      transition={{ delay: .5, stiffness: 25 }}
    >
      <h1>Welcome to React</h1>
      <Link to='/about'>
            <motion.button
              animate={{ scale: 1.5 }}
            >learn more</motion.button>
          </Link>
    </motion.div>
  )
}

export default Main

//different animations have different values
//duration has a default of tween
//stiffness has a defualt for spring