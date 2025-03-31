import { ContainerSection, InfosSobre, H1, H3, P, Img } from "../../styles/SobreStyles"
import fotoPerfil from "../../assets/images/minha-foto-4x4.png"

export const Sobre = () => {
    return (
        <ContainerSection>
            <InfosSobre>
                <H1>Adam Warlock</H1>
                <H3>Desenvolvedor Web Front-end</H3>

                <P><strong>Olá! Me chamo Adam Warlock e sou um desenvolvedor web frontend em formação!</strong> Gosto MUITO da área de tecnologia, e tenho certeza que posso contribuir em qualquer time com as minhas habilidades.</P>

                <P>Estou sempre me desafiando com novos projetos e participando de comunidades de programação para buscar feedback de outros desenvolvedores e desenvolvedoras. Além de tentar ajudar essas pessoas com o que eu já aprendi. 😎</P>

                <P>Ah, gosto de jogos, filmes, séries, animes e outras nerdices. 💙</P>
            </InfosSobre>

            <Img src={fotoPerfil} alt="foto do perfil do Ricardo" />
        </ContainerSection>
    )
}