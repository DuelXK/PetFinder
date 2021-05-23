import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

import {
    userPets,
    petSearchCreation,
    petSearchUpdate,
    petSearchDelete
} from '../../client/pet_client';

import {
    stateSearch,
    citiesSearch
} from '../../client/city_client';

import { getToken } from '../../utils/token_utils';

import {
    HeaderTitle,
    HeaderSubtitle,
    UserPets,
    CardsContainer,
    Card,
    Input,
    PetTitles,
    PetInfos,
    ActionButtons,
    GlobalButton,
    ButtonEdit,
    ButtonDelete
} from '../../components/global_styles'
import { Modal } from 'react-bootstrap';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function UserPage() {
    const history = useHistory();
    const [pets, setPets] = useState([]);
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [weight, setWeight] = useState('');
    const [idCity, setIdCity] = useState('');
    const [idUserInfo, setIdUserInfo] = useState('');
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [cities, setCities] = useState([]);

    const handleShow = () => setShow(true);

    const handleClose = () => {
        setName('');
        setBreed('');
        setWeight('');
        setIdCity('');
        setIdUserInfo('');
        setShow(false);
        setShowEdit(false);
    }


    useEffect(() => {
        loadPets();
        loadStates();
    }, []);

    const loadStates = async () => {
        const data = await stateSearch();
        setStates(data);
        const dataCity = await citiesSearch(data[0].uf);
        setCities(dataCity);
        setSelectedState(data[0].uf)
        setIdCity(dataCity[0].id)
    }

    const loadPets = async () => {
        try {
            const data = await userPets(getToken());
            setPets(data);
        } catch (e) {
            alert(e);
            history.push('/')
        }
    }

    const editStruc = async () => {
        const strucUpdate = await petSearchUpdate(
            id,
            name,
            breed,
            weight,
            idCity,
            idUserInfo
        );
        const auxStructure = pets.map((pet) => {
            if (pet.petId !== id) return pet;
            return strucUpdate;
        })
        setPets(auxStructure);
        handleClose();
    };

    const removeStruc = async (id) => {
        try {
            const strucDelete = await petSearchDelete(id);
            const filteredStruc = pets.filter(
                (pets) => pets.petId !== id
            );
            setPets(filteredStruc);
        } catch (e) {
            alert('Não foi possivel remover o pet')
        }
        handleClose();
    };

    const addStructure = async () => {
        const strucCreate = await petSearchCreation(
            name,
            breed,
            weight,
            idCity,
            idUserInfo
        );
        const auxStructure = pets;
        auxStructure.push(strucCreate)
        setPets(auxStructure);
        handleClose();
    };

    return (
        <>
            <UserPets>
                <div className='container'>
                    <HeaderTitle>
                        Pet Donation
                </HeaderTitle>
                    <HeaderSubtitle>
                        Faça uma boa ação, adote um novo amigo!
                </HeaderSubtitle>
                    <Link to='/'>Home</Link>
                    <Link to='/signout'>Sair</Link>
                </div>
            </UserPets>
            <div className='container'>
                <GlobalButton
                    variant="primary"
                    onClick={handleShow}
                >
                    Adicionar Novo Pet
                </GlobalButton>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        Adicione um pet
                    </Modal.Header>
                    <Modal.Body>
                        <Input
                            type='text'
                            className='form-control'
                            placeholder='Nome do Pet'
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                        />
                        <Input
                            type='text'
                            className='form-control'
                            placeholder='Raça do Pet'
                            value={breed}
                            onChange={(e) =>
                                setBreed(e.target.value)
                            }
                        />
                        <Input
                            type='text'
                            className='form-control'
                            placeholder='Peso do Pet'
                            value={weight}
                            onChange={(e) =>
                                setWeight(e.target.value)
                            }
                        />
                        <select value={selectedState} onChange={async (e) => {
                            setSelectedState(e.target.value)
                            const data = await citiesSearch(e.target.value);
                            setCities(data)
                        }}>
                            {states.map((st, index) =>
                                <option key={`${index}-${st.id}`} value={st.uf}>{st.name}</option>
                            )}
                        </select>
                        <select value={idCity} onChange={(e) => setIdCity(e.target.value)} disabled={cities.length <= 0}>
                            {cities.map((city, index) =>
                                <option key={`${index}-${city.id}`} value={city.id}>{city.name}</option>
                            )}
                        </select>

                    </Modal.Body>
                    <Modal.Footer>
                        <GlobalButton
                            variant="secondary"
                            onClick={handleClose}
                        >
                            Fechar
                        </GlobalButton>
                        <GlobalButton
                            // type="submit"
                            variant="primary"
                            onClick={(e) => {
                                addStructure(e);
                            }}
                        >
                            Salvar
                        </GlobalButton>
                    </Modal.Footer>
                </Modal>
                <Modal show={showEdit} onHide={handleClose}>
                    <Modal.Header>
                        Editar o pet
                    </Modal.Header>
                    <Modal.Body>
                        <Input
                            type='text'
                            className='form-control'
                            placeholder='Nome do Pet'
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                        />
                        <Input
                            type='text'
                            className='form-control'
                            placeholder='Raça do Pet'
                            value={breed}
                            onChange={(e) =>
                                setBreed(e.target.value)
                            }
                        />
                        <Input
                            type='number'
                            className='form-control'
                            placeholder='Nome do Pet'
                            value={weight}
                            onChange={(e) =>
                                setWeight(e.target.value)
                            }
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <GlobalButton
                            variant="secondary"
                            onClick={handleClose}
                        >
                            Fechar
                        </GlobalButton>
                        <GlobalButton
                            // type="submit"
                            variant="primary"
                            onClick={() => {
                                editStruc();
                            }}
                        >
                            Salvar
                        </GlobalButton>
                    </Modal.Footer>
                </Modal>
                <CardsContainer>
                    {pets.length <= 0 ? null :
                        pets.map((pl) => (
                            <Card>
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
                                <ActionButtons>
                                    <ButtonEdit
                                        className="pets-editBtn"
                                        onClick={(e) => {
                                            setId(pl.petId);
                                            setName(pl.petName);
                                            setBreed(pl.breed);
                                            setWeight(pl.weight)
                                            setIdCity(pl.id_city);
                                            setIdUserInfo(getToken());
                                            setShowEdit(true);
                                        }
                                        }
                                    >
                                        <div className="pets-resultsField">
                                            <EditIcon />
                                        </div>
                                    </ButtonEdit>
                                    <ButtonDelete
                                        className="pets-deleteBtn"
                                        onClick={(e) => {
                                            removeStruc(pl.petId)
                                        }
                                        }
                                    >
                                        <div className="pets-resultsField">
                                            <DeleteIcon />
                                        </div>
                                    </ButtonDelete>
                                </ActionButtons>
                            </Card>
                        ))}
                </CardsContainer>
            </div>
        </>
    );
}

export default UserPage;