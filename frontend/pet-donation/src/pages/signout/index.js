import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Logout() {
    const history = useHistory();

    useEffect(() => {
        if (history.location.pathname === '/signout') makeLogout();
    }, []);

    const makeLogout = () => {
        localStorage.removeItem('token');
        history.push('/');
    };

    return <h2></h2>;
}

export default Logout;