import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RouteSobre } from "./routeSobre"
import { RouteHabilidades } from "./routeHabilidades"
import { RouteProjetos } from "./routeProjetos"
import { RouteRedes } from "./routeRedes"
import { HeaderFixed } from "../components/Header/Header"
import { ContainerMain } from "../styles/RoutesStyles"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <HeaderFixed />
            <ContainerMain>
                <Routes>
                    <Route path="/" element={<RouteSobre />} />
                    <Route path="/habilidades" element={<RouteHabilidades />} />
                    <Route path="/projetos" element={<RouteProjetos />} />
                    <Route path="/redes" element={<RouteRedes />} />
                </Routes>
            </ContainerMain>
        </BrowserRouter>
    )
}