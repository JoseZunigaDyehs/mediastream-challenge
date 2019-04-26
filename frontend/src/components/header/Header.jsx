import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <span>MediaStream Challenge</span>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to={`/favs/`}>Favoritas</Link>
      </div>
    </div>
  )
}

export default Header;

