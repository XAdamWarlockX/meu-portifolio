import styled from "styled-components"

export const ContainerSection = styled.section`
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 1025px){
        flex-wrap: wrap;
        gap: 20px;
        padding-bottom: 50px;
    }
`

export const InfosSobre = styled.div`
    display: flex;
    flex-direction: column;
`

export const H1 = styled.h1`
    font-size: 40px;
    transition: 0.3s ease-in-out;
    
    &:hover {
        font-size: 45px;
    }
    
    @media (max-width: 400px){
        &:hover {
            font-size: 42px;
        }
    }
`

export const H3 = styled.h3`
    font-size: 32px;
    transition: 0.3s ease-in-out;
    
    &:hover {
        font-size: 35px;
    }
`

export const P = styled.p`
    font-size: 18px;
`

export const Img = styled.img`
    height: 400px;
    width: 400px;
    align-self: center;
    border-radius: 50%;
    border: 5px solid #101010;

    @media (max-width: 400px){
        height: 300px;
        width: 300px;
    }
`