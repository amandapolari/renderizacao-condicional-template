import { Div, Titulo } from './styled';

function TelaPrincipal({ changeScreen }) {
    return (
        <Div>
            <Titulo>Tela Principal</Titulo>
            <p>Boas-vindas à aplicação!</p>
            <button onClick={() => changeScreen(1)}>Deslogar</button>
        </Div>
    );
}

export default TelaPrincipal;
