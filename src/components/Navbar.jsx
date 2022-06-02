import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>Navbar
      <Link to='/'>take me home! </Link>
      <Link to='/about'>what's react?</Link>
      <Link to='/components'>Components</Link>
      <Link to='/hooks'>hooks</Link>
      <Link to='/state'>state</Link>
      <Link to='/props'>props</Link>
    </div>
  )
}

export default Navbar