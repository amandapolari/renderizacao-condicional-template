import styled, { createGlobalStyle } from 'styled-components';
import TelaLogin from './components/TelaLogin/TelaLogin';
import TelaCadastro from './components/TelaCadastro/TelaCadastro';
import TelaPrincipal from './components/TelaPrincipal/TelaPrincipal.js';
import { useState } from 'react';

const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: lightslategray;
  }
`;
const MainContainer = styled.main`
    height: 100vh;
`;

function App() {
    // DEFININDO ESTADOS:
    const [showScreen, setShowScreen] = useState(1);

    // FUNÇÃO QUE VAI MUDAR O ESTADO:
    const changeScreen = (referenceValue) => {
        setShowScreen(referenceValue);
    };

    // USANDO SWITCH CASE:
    switch (showScreen) {
        case 1:
            return (
                <MainContainer>
                    <GlobalStyled />
                    <TelaLogin changeScreen={changeScreen} />
                </MainContainer>
            );
        case 2:
            return (
                <MainContainer>
                    <GlobalStyled />
                    <TelaCadastro changeScreen={changeScreen} />
                </MainContainer>
            );
        case 3:
            return (
                <MainContainer>
                    <GlobalStyled />
                    <TelaPrincipal changeScreen={changeScreen} />
                </MainContainer>
            );
        default:
            return 'Página não encontrada';
    }

    // USANDO IF/ELSE:
    // if (showScreen === 1) {
    //     return (
    //         <MainContainer>
    //             <GlobalStyled />
    //             <TelaLogin />
    //         </MainContainer>
    //     );
    // } else if (showScreen === 2) {
    //     return (
    //         <MainContainer>
    //             <GlobalStyled />
    //             <TelaCadastro />
    //         </MainContainer>
    //     );
    // } else if (showScreen === 3) {
    //     return (
    //         <MainContainer>
    //             <GlobalStyled />
    //             <TelaPrincipal />
    //         </MainContainer>
    //     );
    // } else {
    //     return 'Página não encontrada';
    // }

    // USANDO TERNÁRIO:
    // return (
    //     <>
    //         {showScreen === 1 ? (
    //             <MainContainer>
    //                 <GlobalStyled />
    //                 <TelaLogin />
    //             </MainContainer>
    //         ) : (
    //             ''
    //         )}
    //         {showScreen === 2 ? (
    //             <MainContainer>
    //                 <GlobalStyled />
    //                 <TelaCadastro />
    //             </MainContainer>
    //         ) : (
    //             ''
    //         )}
    //         {showScreen === 3 ? (
    //             <MainContainer>
    //                 <GlobalStyled />
    //                 <TelaPrincipal />
    //             </MainContainer>
    //         ) : (
    //             'Página não encontrada'
    //         )}
    //     </>
    // );
}

export default App;
