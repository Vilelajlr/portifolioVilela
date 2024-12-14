import styled from "styled-components";


interface BackgroundHomeProps {
    imageUrl: string;
}

export const BackgroundHome = styled.div<BackgroundHomeProps>`
    background-image: ${(props) => `url(${props.imageUrl})`};
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: brightness(0.2);
`;


export const Interface = styled.div`
    width: 100%;
    height: 100dvh;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.4rem;
`;


export const Button = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    background-color: var(--red-normal);
    color: var(--white-light);
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    z-index: 1;
    margin-top: 5rem;

    &:hover {
        background-color: var(--red-dark);
    }
`;

