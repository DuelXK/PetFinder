import api from '../services/api';

import {
    getToken
} from '../utils/token_utils'

export const petShow = async (id) => {
    try {
        const {
            data
        } = await api.get(`/api/v1/pet-donation/${id}`, {
            headers: {
                authorization: `bearer ${getToken()}`
            }
        })
        return data
    } catch (e) {
        const err = 'error in load all pet structure'
        throw err
    }
}

export const petSearch = async (city) => {
    try {
        const {
            data
        } = await api.get(`/api/v1/pet-donation?city=${city}`)
        return data
    } catch (e) {
        console.log(e)
        throw 'error in load all pet structure'
    }
}

export const petSearchCreation = async (
    name,
    breed,
    weight,
    idCity,
    idUserInfo
) => {
    try {
        const {
            data
        } = await api.post('/api/v1/pet-donation/', {
            name,
            breed,
            weight,
            idCity,
            idUserInfo
        }, {
            headers: {
                authorization: `bearer ${getToken()}`
            }
        })
        return data
    } catch (e) {
        const err = 'error in load pet structure'
        throw err
    }
}

export const petSearchUpdate = async (
    id,
    name,
    breed,
    weight,
    idCity,
    idUserInfo
) => {
    try {
        const {
            data
        } = await api.put(`/api/v1/pet-donation/${id}`, {
            name,
            breed,
            weight,
            idCity,
            idUserInfo
        }, {
            headers: {
                authorization: `bearer ${getToken()}`
            }
        })
        return data
    } catch (e) {
        const err = 'error in load pet structure'
        throw err
    }
}

export const petSearchDelete = async (
    id
) => {
    try {
        const {
            data
        } = await api.delete(`/api/v1/pet-donation/${id}`, {
            headers: {
                authorization: `bearer ${getToken()}`
            }
        })
        return data
    } catch (e) {
        const err = 'error in load pet structure'
        throw err
    }
}

export const userPets = async (userId) => {
    try {
        const {
            data
        } = await api.get(`/api/v1/pet-donation?userid=${userId}`)
        return data
    } catch (e) {
        throw 'fail to load user pets';
    }
}