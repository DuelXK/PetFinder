import api from '../services/api';

export const createUser = async (email, password, name, street, number, idState, idCity) => {
    try {
        const {
            data
        } = api.post('/api/v1/user', {
            email,
            password,
            name,
            street,
            number,
            idState,
            idCity
        });
        return data;
    } catch (e) {
        const err = 'fail to create user'
        throw err
    }
}