import styled from "styled-components";



export const MainAbout = styled.main`
    width: 100%;
    min-height: 100dvh;
    background-color: var(--primary-dark);

    @media (max-width: 768px) {
        min-height: 100vh;
        padding: 5rem 0;
    }

   
`;

export const ContainerInterface = styled.div`
    width: 100%;
    max-width: 1440px;
    min-height: 100dvh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 150px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 50px;
       

    }
    
`;

export const ContainerImage = styled.div`
    width: 300px;
    height: 300px;

    @media (max-width: 768px) {
        width: 200px;
        height: 200px;
    }

`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    backdrop-filter: blur(16px);
`;


export const ContainerText = styled.div`
    width: 700px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;

    @media (max-width: 768px) {
        width: 300px;
        padding: 0;
    }

`;

export const TitleSection = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: var(--white-light);
    text-align: center;
`;

export const TextSection = styled.p`

    font-size: 1rem;
    color: var(--white-light);
    text-align: justify;
    line-height: 1.5rem;
`;

export const SpanTextSection = styled.span`
    font-weight: bold;
`;

export const ContainerRedesSociais = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 15px;


    @media (max-width: 768px) {
        flex-direction: row;
    }

`;

export const ContainerButton = styled.div`
    margin-top: 2rem;
`;

export const Button = styled.button`
    width: 200px;
    height: 50px;
    background-color: var(--red-normal);
    color: var(--white-light);
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: var(--red-dark);
    }
`;