import { useState } from "react"
import { Header, H1, Nav, Ul, Li, Curriculo, LinkCurriculo } from "../../styles/HeaderStyles"
import { Link } from "react-router-dom"
// import styled from "styled-components"

export const HeaderFixed = () => {
    const [display, setDisplay] = useState<string>("none")

    const alterarMenu = (): void => {
        setDisplay(display === "none" ? "block" : "none")
    }

    return (
        <Header>
            <H1 onClick={alterarMenu}>AW</H1>
            
            <Nav display={display}>
                <Ul>
                    <Link onClick={alterarMenu} to="/"><Li>Sobre</Li></Link>
                    <Link onClick={alterarMenu} to="/habilidades"><Li>Habilidades</Li></Link>
                    <Link onClick={alterarMenu} to="/projetos"><Li>Projetos</Li></Link>
                    <Link onClick={alterarMenu} to="/redes"><Li>Minhas Redes</Li></Link>
                </Ul>
                <LinkCurriculo target="_blank" to="https://drive.google.com/file/d/1vVzwaMKm19SDE6F7ccWLAoLQG70Y8MTi/view?usp=sharing">
                        <Curriculo>Currículo</Curriculo>
                </LinkCurriculo>
            </Nav>
        </Header>
    )
}