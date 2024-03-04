import React from 'react'
import { Link } from 'react-router-dom'
import IMDB from "../imdb.png"

export default function Header() {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div className='container'>
                <Link to='/movies' className='navbar-brand'>
                <img src={IMDB} alt='Icon' style={{ width: '50px', marginLeft:"-30%"}} />
                {/* Adjust width and styling as needed */}
                 </Link>

                    <div className='ml-auto'>
                      <ul className='navbar-nav'>
                        <li className='nav-item'>
                        <Link to="/addMovie" className="btn btn-primary mb-2">Add Movie</Link>
                        </li>li
                        <li className='nav-item'>
                        <Link to='/login' className='nav-link'>
                          Login
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/register' className='nav-link'>
                          Register
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/contact' className='nav-link'>
                          Logout
                        </Link>
                        </li>
                      </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}
