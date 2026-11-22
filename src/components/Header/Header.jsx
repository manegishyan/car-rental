import { useState } from 'react';
import './Header.css';

import logo from '../../assets/images/logo/logo.svg';
import bg from '../../assets/images/bg/headerBg.png';

import { Navbar } from './Navbar'


export const Header = () => {
    
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleOpenMenu = () => setMenuIsOpen((prev) => !prev);

  return (
    

    <header className='header-section'>

        <div className="header__container">

            <button className='header-menu__btn' onClick={toggleOpenMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>



            <div className="header-logo">
                <img src={logo} alt="" />
            </div>

            <Navbar menuIsOpen={menuIsOpen} />

            <div className="header-btn">
                <a className='signin-btn'>Sign in</a>
                <a className='signup-btn'>Sign up</a>
            </div>
        </div>

    </header>
  )
}
