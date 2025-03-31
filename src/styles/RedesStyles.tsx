import styled from "styled-components"

export const ContainerSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;

    @media (max-width: 800px){
        width: 400px;
        gap: 80px;
    }
`

export const H1 = styled.h1`
    font-size: 40px;
`

export const ContainerRedes = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 800px;
    gap: 50px;
    padding-bottom: 50px;

    @media (max-width: 1025px){
        width: 500px;
    }

    @media (max-width: 800px){
        width: 400px;
    }
`

export const Card = styled.a`
    display: flex;
    align-items: center;
    gap: 20px;
    width: 160px;
    background-color: #000;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 5px 5px 3px #000;
    transition: 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`

export const I = styled.i`
    font-size: 30px;
`

export const P = styled.p`
    font-size: 24px;
`