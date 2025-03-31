import { ContainerSection, H1, ContainerRedes, Card, I, P } from "../../styles/RedesStyles"

export const Redes = () => {
    return (
        <ContainerSection>
            <H1>MINHAS REDES</H1>

            <ContainerRedes>
                    <Card style={{backgroundColor: "#D21613"}} href="mailto:adam.warlock.pf@gmail.com" target="_blank">
                        <I className="fa-regular fa-envelope"></I>
                        <P>E-mail</P>
                    </Card>

                    <Card style={{backgroundColor: "#0077B5"}} href="https://www.linkedin.com/in/adam-warlock" target="_blank">
                        <I className="fa-brands fa-linkedin-in"></I>
                        <P>Linkedin</P>
                    </Card>
                    
                    <Card style={{backgroundColor: "#25D366"}} href="https://wa.me/5584987583804" target="_blank" >
                        <I className="fa-brands fa-whatsapp"></I>
                        <P>WhatsApp</P>
                    </Card>

                    <Card style={{backgroundColor: "#010409"}} href="https://github.com/XAdamWarlockX" target="_blank">
                        <I className="fa-brands fa-github"></I>
                        <P>GitHub</P>
                    </Card>

                    <Card style={{backgroundColor: "#D9005A"}} href="https://instagram.com/adam.damasceno" target="_blank">
                        <I className="fa-brands fa-instagram"></I>
                        <P>Instagram</P>
                    </Card>
            </ContainerRedes>
        </ContainerSection>
    )
}