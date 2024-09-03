import Formulario from "../../componentes/Formulario"
import Input from "../../componentes/Input"

export default function Cadastro() {
    return (
        <Formulario buttonLabel="Cadastrar" formTitle="Faça seu cadastro!" >
            <Input
                id={"nome-completo"}
                label={"Nome Completo:"}
                onChange={() => { }}
                placeholder={"Digite seu nome completo"}
                required={true}
            />
            <Input
                inputType={"email"}
                id={"email"}
                label={"Email:"}
                onChange={() => { }}
                placeholder={"Digite seu email"}
                required={true}
            />
            <Input
                id={"usuário"}
                label={"Nome de usuário:"}
                onChange={() => { }}
                placeholder={"Digite seu usuário"}
                required={true}
            />
            <Input
                inputType={"date"}
                id={"data-nascimento"}
                label={"Data de nascimento:"}
                onChange={() => { }}
                placeholder={"Digite sua data de nascimento"}
                required={true}
            />
            <Input
                inputType={"password"}
                id={"senha"}
                label={"Senha:"}
                onChange={() => { }}
                placeholder={"Insira sua senha"}
                required={true}
            />
            <Input
                inputType={"password"}
                id={"confirma-senha"}
                label={"Confirme sua enha:"}
                onChange={() => { }}
                placeholder={"Insira novamente sua senha"}
                required={true}
            />
        </Formulario>
    )
}