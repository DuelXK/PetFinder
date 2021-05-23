import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
    SignPages,
    SignField,
    Input,
    GlobalButton
} from '../../components/global_styles'
import {
    startSession
} from '../../client/userSession_client';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState({
        value: '',
        showPassword: false
    });
    const history = useHistory();

    const handleChange = (prop) => (e) => {
        setPassword({ ...password, [prop]: e.target.value })
    }

    useEffect(() => {

    }, [])

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await startSession(email, password.value);
            if (res === 'incorrect email or password') {
                return alert('Email ou senha incorretos')
            }
            history.push('/user-page')
        } catch (error) {
            alert('Email ou senha incorretos');
        }
    }

    return (
        <SignPages>
            <div className='container'>
                <SignField>
                    <form onSubmit={handleLogin}>
                        <Input
                            type='text'
                            required
                            className='form-control'
                            placeholder='Digite seu e-mail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            type={password.showPassword ? 'text' : 'password'}
                            required
                            placeholder='Digite sua senha'
                            className='form-control'
                            value={password.value}
                            onChange={handleChange('value')}
                        />
                        <GlobalButton
                            type='submit'
                        >
                            Entrar
                        </GlobalButton>
                    </form>
                    <div>
                        <span>Não tem conta? </span> <Link to="/signup">Crie já</Link>
                    </div>
                </SignField>
            </div>
        </SignPages>
    )
}

export default SignIn;