import {
    Form,
    FormContainer,
    Input,
    SendButton,
    StyledLabel,
    RegisterButton,
} from './styled';

function TelaLogin({ changeScreen }) {
    return (
        <FormContainer>
            <h1>LOGIN</h1>

            <Form>
                <StyledLabel>
                    E-mail:
                    <Input />
                </StyledLabel>

                <StyledLabel>
                    Senha:
                    <Input type={'password'} />
                </StyledLabel>

                <SendButton onClick={() => changeScreen(3)}>Entrar</SendButton>

                <RegisterButton onClick={() => changeScreen(2)}>
                    Cadastre-se
                </RegisterButton>
            </Form>
        </FormContainer>
    );
}

export default TelaLogin;
