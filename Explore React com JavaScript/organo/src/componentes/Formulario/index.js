import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import { useState } from 'react';
import React from 'react';
import './Formulario.css';

const Formulario = (props) => {

    const times = ['Programação', 'Front-End', 'Data Science',
        'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão']

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
            <CampoTexto aoAlterado={valor=>setNome(valor)}
                        valor={nome}
                        obrigatorio={true}
                        label='Nome'
                        placeholder="Digite seu nome"
            />
            <CampoTexto aoAlterado={valor=>setCargo(valor)}
                        valor={cargo}
                        label='Cargo'
                        placeholder="Digite seu cargo"            
            />
            <CampoTexto aoAlterado={valor=>setImagem(valor)}
                        valor={imagem}
                        label='Imagem'
                        placeholder="Informe o endereço da imagem"
            />
            <ListaSuspensa
                        itens={times} 
                        label="Time"
                        valor={time}
                        aoAlterado={valor=>setTime(valor)}
            />
            <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;