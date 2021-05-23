import api from '../services/api';

import {
    setToken
} from '../utils/token_utils';

export const startSession = async (email, password) => {
    try {
        const {
            data
        } = await api.post('/api/v1/session', {
            email,
            password
        })
        setToken(data.id)
    } catch (e) {
        const err = 'error in load session user'
        throw err
    }
}
