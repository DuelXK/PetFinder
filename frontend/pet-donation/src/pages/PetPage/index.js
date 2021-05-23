import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'

import {
    Header,
    HeaderTitle,
    HeaderSubtitle,
    BodyHome,
    PetUniqueContainer,
    CardUnique,
    PetTitlesUnique,
    PetContactUnique
} from '../../components/global_styles'
import {
    petShow,
} from '../../client/pet_client'

function PetPage() {
    const [petUnique, setPetUnique] = useState();
    const { id } = useParams();

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        try {
            const data = await petShow(id);
            setPetUnique(data);
        } catch (e) {
            alert('Erro ao carregar pet')
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
                </div>
            </Header>
            <BodyHome>
                <div className='container'>
                    <PetUniqueContainer>
                        {petUnique === undefined ? null : (
                            <CardUnique>
                                <PetTitlesUnique>
                                    NOME: {petUnique.petName}
                                </PetTitlesUnique>
                                <PetTitlesUnique>
                                    RAÇA: {petUnique.breed}
                                </PetTitlesUnique>
                                <PetTitlesUnique>
                                    Peso: {petUnique.weight} kg
                                </PetTitlesUnique>
                                <PetTitlesUnique>
                                    Cidade: {petUnique.cityName}
                                </PetTitlesUnique>
                                <PetTitlesUnique>
                                    Dono: {petUnique.userName}
                                </PetTitlesUnique>
                                <PetContactUnique>
                                    <a href={`mailto:${petUnique.email}?subject=Adocação ${petUnique.petName}`}>Enviar E-mail</a>
                                </PetContactUnique>
                            </CardUnique>
                        )}
                    </PetUniqueContainer>
                </div>
            </BodyHome>
        </>
    )
}

export default PetPage;