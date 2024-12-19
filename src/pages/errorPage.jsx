//import React from "react";

import styled from "styled-components"

const ErrorPage = () => {
    return (
        <Div>
            <h1>Ops! Algo deu errado.</h1>
            <p>A página que você está procurando não foi encontrada.</p>
            <img src="./src/assets/images/erro_404.png" alt="Imagem de erro 404" />
            <a href="/">Voltar para a página inicial</a>
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export { ErrorPage }