import {
    Form,
    FormContainer,
    Input,
    StyledLabel,
    SendButton,
    BackToLoginButton,
} from './styled';

function TelaCadastro({ changeScreen }) {
    const cadastrar = () => {
        // validação de cadastro ainda será visto mais pra frente no curso
        alert(
            'Cadastro realizado com sucesso, mas falta fazer a prática 3 e remover esse alerta'
        );
    };

    return (
        <FormContainer>
            <h1>Cadastro </h1>

            <Form>
                <StyledLabel htmlFor="titulo">
                    Nome:
                    <Input id="titulo" />
                </StyledLabel>

                <StyledLabel htmlFor="foto">
                    E-mail:
                    <Input id="foto" />
                </StyledLabel>

                <StyledLabel htmlFor="descricao">
                    Senha:
                    <Input id="descricao" />
                </StyledLabel>

                <StyledLabel htmlFor="descricao">
                    Confirmação da senha:
                    <Input id="descricao" />
                </StyledLabel>

                <SendButton onClick={cadastrar}>Cadastrar</SendButton>

                <BackToLoginButton onClick={() => changeScreen(1)}>
                    Já possuo cadastro
                </BackToLoginButton>
            </Form>
        </FormContainer>
    );
}

export default TelaCadastro;
