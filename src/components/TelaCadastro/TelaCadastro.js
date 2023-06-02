import {
    Form,
    FormContainer,
    Input,
    StyledLabel,
    SendButton,
    BackToLoginButton,
} from './styled';

function TelaCadastro({ changeScreen }) {
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

                <SendButton onClick={() => changeScreen(3)}>
                    Cadastrar
                </SendButton>

                <BackToLoginButton onClick={() => changeScreen(1)}>
                    Já possuo cadastro
                </BackToLoginButton>
            </Form>
        </FormContainer>
    );
}

export default TelaCadastro;
