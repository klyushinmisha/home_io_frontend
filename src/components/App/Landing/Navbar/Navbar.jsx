import React, { useState, useEffect } from 'react';

import './Navbar.scss';
import Logo from './Logo/Logo.jsx';
import LoginNav from './LoginNav/LoginNav';

export default function Navbar() {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        let prevPos = window.scrollY;
        const handleScroll = () => {
            setIsHidden(window.scrollY > prevPos);
            prevPos = window.scrollY;
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [setIsHidden]);

    let classes = [
        'navbar',
        'sticky-top',
        'navbar-dark',
        'navbar-expand-lg',
        'bg-light'
    ];
    if (isHidden) {
        classes.push('hidden');
    }

    return <nav className={classes.join(' ')}>
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