import React from 'react';

import './Logo.scss';
import logo from '../../../../../assets/images/logo.svg';
import Image from '../../../../Utils/Image/Image.jsx';

export default function Logo(props) {
    return <React.Fragment>
        <Image src={logo} maxHeight={props.maxHeight}/>
        <span className='navbar-brand-name'>home.io</span>
    </React.Fragment>
}