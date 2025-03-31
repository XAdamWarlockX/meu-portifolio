import styled from "styled-components"

export const ContainerSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;

    @media (max-width: 1025px){
        // height: 100vh;
        gap: 50px;
    }
`

export const H1 = styled.h1`
    font-size: 40px;
`

export const ContainerHabilidades = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const CardImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 180px;
    transition: 0.3s ease-in-out;

    &:hover{
        transform: scale(1.2);
    }
`

export const Img = styled.img`
    height: 100px;
    width: 100px;
`

export const H3 = styled.h3`
    font-size: 30px;
    font-weight: 500;
`