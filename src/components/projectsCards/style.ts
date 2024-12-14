import styled from "styled-components";



export const ProjectsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;


export const Card = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid var(--borderCardProject);
    padding: 130px;


    @media (max-width: 1280px) {
        position: relative;
        padding: 20px;
    }

    
`;


export const Infos = styled.div`
    margin-left: 80px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1280px) {
        margin-left: 40px;
        gap: 10px;
        
    }

`;


export const DivId = styled.div`
    font-size: 5rem;
    color: var(--white-light);
    font-weight: bold;
    margin-bottom: 10px;
    opacity: 0.5;
    display: flex;
    align-items: center;
    gap: 30px;


    @media (max-width: 1280px) {
        font-size: 2rem;
        gap: 10px;
        margin-left: 50px;
    }


`;

export const DivImage = styled.div`
    width: 480px;


    @media (max-width: 1280px) {
        width: 100%;
        
    }

`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;

    @media (max-width: 1280px) {
        filter: brightness(0.3);
    }

`;

export const Title = styled.h2`
    font-size: 4rem;
    margin-top: 10px;
    color:var(--white-light);
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;


    @media (max-width: 1280px) {
        font-size: 2rem;
        margin-top: 0;
    }

`;

export const Description = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    color: var(--white-light);
    margin-top: 10px;

    @media (max-width: 1280px) {
        font-size: 0.8rem;
        width: 300px;
    }

`;

export const ContainerLinkLanguages = styled.div`
    align-items: center;
    display: flex;
    gap: 50px;

   

`;


export const Link = styled.a`
    font-size: 1.5rem;
    color: var(--white-light);
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    width: 150px;
    text-align: center;
    padding: 10px 15px;
    background-color: var(--red-light);
    border-radius: 8px;


    &:hover {
        background-color: var(--red-dark);
    }


    @media (max-width: 1280px) {
        font-size: 1rem;
        width: 100px;
    }

`;

export const ContainerLanguages = styled.div`

    display: flex;
    flex-direction: column;
    gap: 10px;

`;

export const Languages = styled.div`

    display: flex;
    gap: 10px;

    @media (max-width: 1280px) {
        gap: 5px;
    }

`;

export const LanguageUtility = styled.p`
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: var(--white-light);

    @media (max-width: 1280px) {
        font-size: 0.8rem;
    }

`;


export const ContainerInfos = styled.div`
    width: 700px;

    @media (max-width: 1280px) {
        position: absolute;
        width: 400px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
        z-index: 1;
    }

`;