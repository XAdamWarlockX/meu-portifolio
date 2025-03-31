import { ContainerSection, H1, ContainerHabilidades, CardImg, Img, H3 } from "../../styles/HabilidadesStyles"

export const Habilidades = () => {

    return (
        <ContainerSection>
            <H1>HABILIDADES</H1>

            <ContainerHabilidades>
                <CardImg>
                    <div>
                        <Img src="https://img.icons8.com/color/144/html-5--v1.png" alt="Html 5"/>
                    </div>
                    <H3>HTML5</H3>
                </CardImg>

                <CardImg>
                    <div>
                        <Img src="https://img.icons8.com/color/144/css3.png" alt="Css 3"/>
                    </div>
                    <H3>CSS3</H3>
                </CardImg>

                <CardImg>
                    <div>
                    <Img src="https://img.icons8.com/color/144/javascript--v1.png" alt="JavaScript"/>
                    </div>
                    <H3>JavaScript</H3>
                </CardImg>

                <CardImg>
                    <div>
                        <Img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="React"/>
                    </div>
                    <H3>React</H3>
                </CardImg>

                <CardImg>
                    <div>
                        <Img src="https://img.icons8.com/fluency/144/typescript--v2.png" alt="TypeScript"/>
                    </div>
                    <H3>TypeScript</H3>
                </CardImg>

                <CardImg>
                    <div>
                        <Img src="https://img.icons8.com/color/240/git.png" alt="Git"/>
                    </div>
                    <H3>Git</H3>
                </CardImg>

                <CardImg>
                    <div>
                        <Img style={{ borderRadius: "20px"}} src="https://i.pinimg.com/736x/a2/9d/c3/a29dc3691124638b000809a7696281d5.jpg" alt="GitHub"/>
                    </div>
                    <H3>GitHub</H3>
                </CardImg>

                <CardImg>
                    <div>
                        <Img src="https://img.icons8.com/color/144/figma--v1.png" alt="Figma"/>
                    </div>
                    <H3>Figma</H3>
                </CardImg>
            </ContainerHabilidades>
        </ContainerSection>
    )
}