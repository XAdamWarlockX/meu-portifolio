import { ContainerSection, H1, ContainerProjetos, Infos, Projeto, Img, H3, P } from "../../styles/ProjetosStyles"
import { projetos } from "./ImagensProjetos"

export const Projetos = () => {
    return (
        <ContainerSection>
            <H1>MEUS PROJETOS</H1>

            <ContainerProjetos>
                <Projeto>
                    <a href="https://github.com/XAdamWarlockX/projeto-poke-api" target="_blank">
                        <Img src={projetos.imagem1} />
                        <H3>Projeto 1</H3>
                        <Infos>
                            <P>Projeto feito usando React e TypeScript.</P>
                            <P>🔗 Ver no GitHub</P>
                        </Infos>
                    </a>
                </Projeto>

                <Projeto>
                    <a href="https://github.com/XAdamWarlockX/projeto-advice-generator" target="_blank">
                        <Img src={projetos.imagem2} alt="Nome do projeto" />
                        <H3>Projeto 2</H3>
                        <Infos>
                            <P>Projeto feito usando HTML, CSS, JavaScript e TypeScript.</P>
                            <P>🔗 Ver no GitHub</P>
                        </Infos>
                    </a>
                </Projeto>

                <Projeto>
                    <a href="https://github.com/XAdamWarlockX/projeto-advice-generator" target="_blank">
                        <Img src={projetos.imagem3} alt="Nome do projeto" />
                        <H3>Projeto 3</H3>
                        <Infos>
                            <P>Projeto feito usando HTML, CSS, JavaScript e TypeScript.</P>
                            <P>🔗 Ver no GitHub</P>
                        </Infos>
                    </a>
                </Projeto>

                <Projeto>
                    <a href="https://github.com/XAdamWarlockX/projeto-formulario-com-validacao" target="_blank">
                        <Img src={projetos.imagem4} alt="Nome do projeto" />
                        <H3>Projeto 4</H3>
                        <Infos>
                            <P>Projeto feito usando HTML, CSS, JavaScript e TypeScript.</P>
                            <P>🔗 Ver no GitHub</P>
                        </Infos>
                    </a>
                </Projeto>

                <Projeto>
                    <a href="https://github.com/XAdamWarlockX/projeto-huddle-landing-page" target="_blank">
                        <Img src={projetos.imagem5} alt="Nome do projeto" />
                        <H3>Projeto 5</H3>
                        <Infos>
                            <P>Projeto feito usando HTML e CSS.</P>
                            <P>🔗 Ver no GitHub</P>
                        </Infos>
                    </a>
                </Projeto>

                <Projeto>
                    <a href="https://github.com/XAdamWarlockX/projeto-calculador-de-idade" target="_blank">
                        <Img src={projetos.imagem6} alt="Nome do projeto" />
                        <H3>Projeto 6</H3>
                        <Infos>
                            <P>Projeto feito usando HTML, CSS, JavaScript e TypeScript.</P>
                            <P>🔗 Ver no GitHub</P>
                        </Infos>
                    </a>
                </Projeto>
            </ContainerProjetos>
        </ContainerSection>
    )
}