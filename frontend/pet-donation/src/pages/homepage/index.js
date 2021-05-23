import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import {
    Header,
    HeaderTitle,
    HeaderSubtitle,
    BodyHome,
    Input,
    CardsContainer,
    Card,
    PetTitles,
    PetInfos,
    PetContact
} from '../../components/global_styles'
import {
    petSearch,
} from '../../client/pet_client'

import { getToken } from '../../utils/token_utils'

function Homepage() {
    const [donations, setDonations] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        try {
            const data = await petSearch(search);
            console.log(data)
            setDonations(data);
        } catch (e) {
            alert('Erro ao carregar pets')
        }
    }

    return (
        <>
            <Header>
                <div className='container'>
                    <HeaderTitle>
                        Pet Donation
                </HeaderTitle>
                    <HeaderSubtitle>
                        Faça uma boa ação, adote um novo amigo!
                </HeaderSubtitle>
                    {getToken() !== null ?
                        <>
                            <Link
                                to='/user-page'
                            >
                                Página do Usuário
                            </Link>
                            <Link to='/signout'>Sair</Link>
                        </> : <> <Link to='/signin'>Login</Link>
                            <Link to='/signup'>Cadastre-se</Link></>}



                </div>
            </Header>
            <BodyHome>
                <div className='container'>
                    <Input
                        type='text'
                        className='form-control' placeholder='Pesquisar...'
                        onChange={(event) => {
                            setSearch(event.target.value);
                        }} />
                    <CardsContainer>
                        {donations.length <= 0 ? null :
                            donations.map((pl, index) => (
                                <Card key={`${index}-${pl.petId}`}>
                                    <PetTitles>
                                        NOME
                            </PetTitles>
                                    <PetInfos>
                                        {pl.petName}
                                    </PetInfos>
                                    <PetTitles>
                                        RAÇA
                            </PetTitles>
                                    <PetInfos>
                                        {pl.breed}
                                    </PetInfos>
                                    <PetTitles>
                                        Peso
                            </PetTitles>
                                    <PetInfos>
                                        {pl.weight} Kg
                            </PetInfos>
                                    <PetTitles>
                                        Cidade
                            </PetTitles>
                                    <PetInfos>
                                        {pl.cityName}
                                    </PetInfos>
                                    <PetTitles>
                                        Dono
                            </PetTitles>
                                    <PetInfos>
                                        {pl.userName}
                                    </PetInfos>
                                    <PetContact>
                                        <Link to={`pet/${pl.petId}`}>Entre em contato</Link>
                                    </PetContact>
                                </Card>
                            ))}
                    </CardsContainer>
                </div>
            </BodyHome>
        </>
    );
}

export default Homepage;