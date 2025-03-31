import styled, { keyframes } from "styled-components"

export const ContainerSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 50px;
`

export const H1 = styled.h1`
    font-size: 40px;

    @media (max-width: 430px){
        font-size: 30px;
    }
`

export const ContainerProjetos = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
`

export const Infos = styled.div`
    padding: 20px 20px;    
    background-color: #101010;
    position: absolute;
    height: 310px;
    top: 0;
    opacity: 0;    
    transition: all .3s ease;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`

export const Animacao = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30px);
  }
`

export const Projeto = styled.div`     
    border-radius: 5px;
    position: relative;
    width: 250px;
    height: 350px;

    &:hover {
       animation: ${Animacao} 0.3s ease-in-out both;

       ${Infos}{
        opacity: 0.8;
    }
`

export const Img = styled.img`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const H3 = styled.h3`
    font-size: 25px;
    font-weight: 500;    
    position: absolute;      
    opacity: 0.7;
    background-color: #101010;
    width: 230px;
    padding-left: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    bottom: 0;
`

export const P = styled.p`
    font-weight: 500;
    font-size: 16px;

    &:nth-child(2){
        margin-top: 10px;
    }
`