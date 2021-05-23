import api from '../services/api';


export const stateSearch = async () => {
    try {
        const {
            data
        } = await api.get(`/api/v1/city`)
        return data
    } catch (e) {
        const err = 'error in load states structure'
        throw err
    }
}

export const citiesSearch = async (uf) => {
    try {
        const {
            data
        } = await api.get(`/api/v1/city/${uf}`)
        return data
    } catch (e) {
        const err = 'error in load cities structure'
        throw err
    }
}