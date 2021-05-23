
import React, { useEffect } from 'react';
import { useHistory, Route } from 'react-router';
import { getToken } from '../../utils/token_utils';

const PrivateRoute = (props) => {
    const history = useHistory();

    useEffect(() => {
        const logged = getToken();
        // if (!logged) {
        //     localStorage.removeItem('token');
        //     history.push('/');
        // }
    }, []);

    return (
        <>
            <Route {...props} />
        </>
    );
};

export default PrivateRoute;