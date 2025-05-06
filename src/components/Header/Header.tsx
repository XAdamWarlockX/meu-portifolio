import { useState } from "react"
import { Header, H1, Nav, Ul, Li, Curriculo, LinkCurriculo } from "../../styles/HeaderStyles"
import { Link } from "react-router-dom"

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
                <LinkCurriculo target="_blank" to="https://docs.google.com/document/d/1K7lhIVKm2O3aIATx_Z4EMxsQm7Jo8qtt/edit?usp=sharing&ouid=117845453756042676056&rtpof=true&sd=true">
                        <Curriculo>Currículo</Curriculo>
                </LinkCurriculo>
            </Nav>
        </Header>
    )
}
