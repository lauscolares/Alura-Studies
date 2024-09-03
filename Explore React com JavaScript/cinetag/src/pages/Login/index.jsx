import Formulario from "../../componentes/Formulario";
import Input from "../../componentes/Input";

export default function Login() {
    return (
        <Formulario formTitle={"Faça seu login!"} buttonLabel={"Entrar"}>
            <Input
                id={"email-usuário"}
                label={"Email ou usuário:"}
                onChange={() => { }}
                placeholder={"Digite seu email ou usuário"}
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
        </Formulario>
    )
}