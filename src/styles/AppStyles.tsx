import styled, { keyframes } from "styled-components";

export const Spiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100vh;
  transition: 0.3s ease-in-out;
`

export const DelayCirculos = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
`

export const EstilosCirculos = styled.div`
  width: 18px;
  height: 18px;
  background-color: #101010;
  border-radius: 100%;
  display: inline-block;
  animation: ${DelayCirculos} 1.4s infinite ease-in-out both;
`

export const Circulo1 = styled(EstilosCirculos)`
  animation-delay: -0.25s;
`

export const Circulo2 = styled(EstilosCirculos)`
  animation-delay: -0.15s;
`

export const Circulo3 = styled(EstilosCirculos)`
  animation-delay: -0.05s;
`