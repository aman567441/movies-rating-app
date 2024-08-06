import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/"><img className='imdb-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/863px-IMDB_Logo_2016.svg.png'></img></Link></li>
          <li><Link to="/movies/popular">Popular Movies </Link></li>
          <li><Link to="/movies/top_rated">Top-rated Movies</Link></li>
          <li><Link to="/movies/upcoming">Upcomming</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
