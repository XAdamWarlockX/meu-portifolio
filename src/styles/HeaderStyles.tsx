import styled from "styled-components"
import { Link } from "react-router-dom"

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    color: #fff;
    height: 100%;
    width: 170px;
    z-index: 2;

    @media (max-width: 1025px){
        justify-content: start;
        position: absolute;
    }
`

export const H1 = styled.h1`
    font-size: 40px;
    transition: 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    width: 170px;
    background-color:#001d86;
    font-weight: 800;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover{
        background-color: #001359;
    }

    @media (max-width: 1025px){
        height: 100px; 
    }
`

export const Nav = styled.nav<{ display: string }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    width: 170px;
    background-color: #101010;
    padding-bottom: 15px;
    transition: 0.3s ease-in-out;
    
    @media (max-width: 1025px){
        display: ${(prop) => prop.display};
        padding: 15px 0px;
        height: auto;
    }
`

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    padding-top: 15px;

    @media (max-width: 1025px){
        flex-direction: row;
        flex-wrap: wrap;
        padding-top: 0px;
        padding: 0px 10px;
    }
`

export const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    width: 135px;
    border-radius: 15px;
    transition: 0.3s ease-in-out;

    &:hover{
        background-color: #001d86;
        transform: scale(1.1);
    }
`

export const Curriculo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    width: 135px;
    font-size: 18px;
    border-radius: 15px;
    transition: all 0.3s ease;

    &:hover{
        background-color: #001d86;
        transform: scale(1.1);
    }  
`

export const LinkCurriculo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
`