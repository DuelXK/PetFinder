import styled from 'styled-components';
import {
    black,
    white,
    header,
    petTitles,
    contactButton,
    SignBg,
    bgcolor1,
    yellow,
    red
} from '../../constants/color'

export const Header = styled.div`
    background-color: ${header};
    height: 5rem;
    width: 100vw;
    a {
        margin: 0 20px;
    }
`;

export const HeaderTitle = styled.div`
    margin: 0 auto;
    font-size: 2rem;
    color: ${black};
`;

export const HeaderSubtitle = styled.div`
    margin: 0 auto;
    font-size: 1rem;
    color: ${black};
`;

export const BodyHome = styled.div`
    margin: 20px auto;
`;

export const Input = styled.input`
    width: 100%;
    height: 35px;
    border-radius: 5px;
    display: flex;
    margin-bottom: 20px;
`;

export const AddButton = styled.div`
    width: 30%;
    height: 30px;
    display: flex;
    border: none;
    outline: none;
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    align-content: flex-start;
`;

export const Card = styled.div`
    -webkit-box-shadow: 2px 2px 8px 1px rgba(0,0,0,0.5); 
    box-shadow: 2px 2px 8px 1px rgba(0,0,0,0.5);
    padding: 10px;
    flex: 1 0 21%;
    margin: 5px;
    flex-grow: 1;
    flex-shrink: 1;
    border-radius: 5px;
    flex-flow: column wrap;
    max-width: 25%;
    width: 25%;
`;

export const PetUniqueContainer = styled.div`
    width: 100%;
    `;

export const CardUnique = styled.div`
    width: 100%;
    display: block;
`;

export const PetTitles = styled.div`
    text-align: center;
    font-size: 0.7rem;
    font-weight: 700;
    color: ${petTitles};
`;

export const PetTitlesUnique = styled.div`
    font-size: 1rem;
    font-weight: 700;
    color: ${petTitles};
    text-align: center;
    `;

export const PetInfos = styled.div`
    text-align: center;
    font-weight: 500;
`;

export const PetInfosUnique = styled.div`
`;


export const PetContact = styled.div`
    background-color: ${contactButton};
    color: ${white};
    margin-top: 10px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
        background-color: ${petTitles};
    }
`;

export const PetContactUnique = styled.div`
    background-color: ${contactButton};
    color: ${white};
    margin-top: 10px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 0 auto;
    width: 25%;
    &:hover{
        cursor: pointer;
        background-color: ${petTitles};
    }
`;

export const SignPages = styled.div`
    background-color: ${SignBg};
    height: 100vh;
    display: flex;
    align-items: center;
`;

export const SignField = styled.div`
    width: 250px;
    margin: auto;
    background-color: ${bgcolor1};
    padding: 30px;
    border-radius: 10px;
`;

export const GlobalButton = styled.button`
    background-color: ${contactButton};
    width: 100%;
    height: 30px;
    color: ${white};
    border-radius: 5px;
    outline: none;
    border: none;
    border-bottom: 5px solid #658231;
    &:hover{
        background-color: ${contactButton};
        cursor: pointer;
        border-bottom: none;
    }
`;

export const UserPets = styled.div`
    height: 100px;
    width: 100vw;
    background-color: ${header};
    margin-bottom: 20px;
`;

export const ActionButtons = styled.div`
    display: flex;
    text-align: center;
`;

export const ButtonEdit = styled.div`
    width: 50%;
    .pets-resultsField {
        svg{
                border-radius: 50%;
                transition: 500ms;
                &:hover{
                    background-color: ${yellow};
                    transition: 500ms;
                    padding: 2px;
                
            }
        }
    }
`;

export const ButtonDelete = styled.div`
    width: 50%;
    .pets-resultsField {
        svg{
                border-radius: 50%;
                transition: 500ms;
                &:hover{
                    background-color: ${red};
                    transition: 500ms;
                    padding: 2px;
                
            }
        }
    }
`;