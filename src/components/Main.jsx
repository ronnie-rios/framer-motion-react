import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

function Main() {
  return (
    <motion.div
    className='display-flex justify-center items-center bg-black'
    >
    <div className='grid grid-cols-2 gap-4 h-full' p-3>
      <div className='flex flex-col items-start justify-center'>
        <h1 className='text-white mb-3rem text-2xl p-4'>Welcome to React</h1>
        <p className='text-white mb-3rem text-6xl p-4'>let's explore all its features</p>
          <Link to='/about'>
            <motion.button
              animate={{ }}
              className='outline-none rounded text-white p-1.3 hover:outline-white'
            >learn more</motion.button>
          </Link>
        </div>
      </div> 
    </motion.div>
  )
}

export default Main

//different animations have different values
//duration has a default of tween
//stiffness has a defualt for spring