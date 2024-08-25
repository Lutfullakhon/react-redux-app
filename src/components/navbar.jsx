import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../constants/logo.png'

const Navbar = () => {
  return (
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container-fluid pt-3 bg-secondary">
      <Link to={'/'}>
        <div className='w-25'>   
            <img src={logo} alt="logo" />
        </div>
      </Link>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link className='me-3 py-2 fw-bold link-light' to={'/login'}>
        Login
        </Link>
        <Link className='me-3 py-2 fw-bold link-light' to={'/register'}>
        Register
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
