import React from 'react';

import './Logo.scss';
import logo from '../../../../assets/images/logo.svg';
import Image from '../../../Image/Image.jsx';

export default function Logo() {
    return <React.Fragment>
        <Image src={logo} maxHeight='5vh'/>
        <span className='navbar-brand-name'>home.io</span>
    </React.Fragment>
}