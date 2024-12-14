import styled from "styled-components";


export const MainContact = styled.main`
  min-height: 100vh;
  background-color: var(--primary-dark);

    @media (max-width: 768px) {
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


export const Infos = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    width: 50%;
    max-width: 500px;


    @media (max-width: 768px) {
        width: 100%;
    }

`;

export const ContainerTitle = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
`;


export const Title = styled.h1`
    font-weight: bold;
    font-size: 2.5rem;
    color: var(--white-light);
    font-family: 'Open Sans', sans-serif;
`;

export const Text = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: var(--white-light);
    text-align: justify;
    line-height: 1.5rem;
`;

export const SubTitle = styled.h2`

    font-size: 1.5rem;
    color: var(--white-light);
    font-family: 'Open Sans', sans-serif;
`;

export const ContainerSociais = styled.div`
    display: flex;
    gap: 1rem;
`;


export const Form = styled.form`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 768px) {
        padding: 0 1rem;
    }
`;



export const ContainerInput = styled.div`
  position: relative;
  width: 100%;
  
  input:focus~label,
  input:valid~label {
    top: 0;
    background-color: var(--primary-dark);
  }

  textarea:focus~label,
  textarea:valid~label {
    top: 0;
    background-color: var(--primary-dark);
  }

  input:valid,
  textarea:valid {
    background-color: var(--primary-dark);
  }

`;  

export const Label = styled.label`
    color: var(--white-light);
    padding: 0 5px;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 1em;
    pointer-events: none;
    transition: all 0.3s;
`;

export const Input = styled.input`
  color: var(--white-light);
  border: 2px solid var(--white-light);
  background: transparent;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  padding: 0 1rem;
  outline: none;
`;


export const TextArea = styled.textarea`

    color: var(--white-light);
    border: 2px solid var(--white-light);
    background: transparent;
    border-radius: 5px;
    width: 100%;
    height: 250px;
    padding: 1rem;
    outline: none;
    resize: none;
`;

export const Counter = styled.span`
    color: var(--white-light);
    font-size: 0.8rem;
    position: absolute;
    bottom: 20px;
    right: 15px;
`;

export const Button = styled.button`
    width: 100%;
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


