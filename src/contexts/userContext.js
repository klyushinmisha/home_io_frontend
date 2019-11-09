import React from 'react';

const UserContext = React.createContext({
    username: null,
    email: null,
    avatar_url: null,
    login: (userData) => {
        this.username = userData.username;
        this.email = userData.email;
        this.avatar_url = userData.avatar_url;
    }
});

export default UserContext;