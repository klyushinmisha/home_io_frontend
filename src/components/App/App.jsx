import React from 'react';
import './App.css';
import UserContext from '../../contexts/userContext';
import Landing from './Landing/Landing';

function App() {
    return <UserContext.Provider>
        <Landing/>
    </UserContext.Provider>
}

export default App;
