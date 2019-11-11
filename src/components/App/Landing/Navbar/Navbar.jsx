import React from 'react';

import './Navbar.scss';
import Logo from './Logo/Logo.jsx';
import LoginNav from './LoginNav/LoginNav';

export default function Navbar() {
    return <nav className='navbar navbar-dark navbar-expand-lg bg-light'>
        <a className='navbar-brand' href='/'>
            <Logo maxHeight='5vh'/>
        </a>
        <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
            </ul>
            <LoginNav/>
        </div>
    </nav>
}