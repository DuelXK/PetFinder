import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { createUser } from '../../client/user_client';
import { stateSearch, citiesSearch } from '../../client/city_client';
import {
    SignPages,
    SignField,
    Input,
    GlobalButton
} from '../../components/global_styles'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState({
        value: '',
        showPassword: false
    });
    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [stateId, setStateId] = useState('');
    const [cityId, setCityId] = useState('');
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const history = useHistory();

    const handleChange = (prop) => (e) => {
        setPassword({ ...password, [prop]: e.target.value })
    }


    useEffect(() => {
        loadStates();
    }, [])

    const loadStates = async () => {
        const data = await stateSearch();
        setStates(data);
        setStateId(data[0].id);
        const dataCities = await citiesSearch(data[0].uf);
        setCities(dataCities);
        setCityId(dataCities[0].id)
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUser(email, password, name, street, number, stateId, cityId);
            history.push('/signin')
        } catch (e) {
            console.log(e);
            alert('ocorreu um erro ao criar usuário')
        }
    }

    return (
        <SignPages>
            <div className='container'>
                <SignField>
                    <form onSubmit={handleRegister}>
                        <Input
                            type='email'
                            className='form-control'
                            placeholder='Email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            type='password'
                            placeholder='Senha'
                            required
                            className='form-control'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Input
                            type='text'
                            placeholder='Nome Completo'
                            required
                            className='form-control'
                            value={name.value}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <select value={stateId} onChange={async (e) => {
                            setStateId(e.target.value);
                            const findState = states.find((st) => st.id === parseInt(e.target.value));
                            if (findState !== undefined) {
                                const data = await citiesSearch(findState.uf);
                                setCities(data)
                            }
                        }
                        }>
                            {states.map((st, index) =>
                                <option key={`${index}-${st.id}`} value={st.id}>{st.name}</option>
                            )}
                        </select>
                        <select value={cityId} onChange={(e) => setCityId(e.target.value)} disabled={cities.length <= 0}>
                            {cities.map((city, index) =>
                                <option key={`${index}-${city.id}`} value={city.id}>{city.name}</option>
                            )}
                        </select>
                        <Input
                            type='text'
                            placeholder='Endereço'
                            required
                            className='form-control'
                            value={street.value}
                            onChange={(e) => setStreet(e.target.value)}
                        />
                        <Input
                            type='text'
                            placeholder='Número'
                            required
                            className='form-control'
                            value={number.value}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                        <GlobalButton
                            type='submit'
                        >
                            Cadastrar
                        </GlobalButton>
                    </form>
                </SignField>
            </div>
        </SignPages>
    )
}

export default SignUp;