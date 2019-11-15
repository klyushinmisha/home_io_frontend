import React from 'react';

import Navbar from './Navbar/Navbar.jsx';
import Greeting from './Greeting/Greeting.jsx';
import Sdk from './Sdk/Sdk.jsx';
import StartUsing from './StartUsing/StartUsing.jsx';

export default function Landing() {
    return <div>
        <Navbar/>
        <Greeting/>
        <Sdk/>
        <StartUsing/>
    </div>
}