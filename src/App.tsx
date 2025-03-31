import { useEffect, useState } from "react";
import { AppRoutes } from "./pages/routes"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Spiner, Circulo1, Circulo2, Circulo3 } from "./styles/AppStyles"

const Loading = () => {
  return (
    <Spiner>
      <Circulo1/>
      <Circulo2/>
      <Circulo3/>
    </Spiner>
  )
};

function App() {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() =>{
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    loading ? <Loading /> :
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  )
}

export default App
