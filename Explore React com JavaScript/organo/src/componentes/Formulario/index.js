import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import { useState } from 'react';
import React from 'react';
import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corPrimariaTime, setCorPrimariaTime] = useState('')
    const [corSecundariaTime, setCorSecundariaTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
            <Campo aoAlterado={valor=>setNome(valor)}
                        valor={nome}
                        obrigatorio={true}
                        label='Nome'
                        placeholder="Digite seu nome"
            />
            <Campo aoAlterado={valor=>setCargo(valor)}
                        valor={cargo}
                        label='Cargo'
                        placeholder="Digite seu cargo"            
            />
            <Campo aoAlterado={valor=>setImagem(valor)}
                        valor={imagem}
                        label='Imagem'
                        placeholder="Informe o endereço da imagem"
            />
            <ListaSuspensa
                        itens={props.times} 
                        label="Time"
                        valor={time}
                        aoAlterado={valor=>setTime(valor)}
            />
            <Botao>Criar Card</Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarTime({nome: nomeTime, corPrimaria: corPrimariaTime, corSecundaria: corSecundariaTime})
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
            <Campo aoAlterado={valor=>setNomeTime(valor)}
                        valor={nomeTime}
                        obrigatorio
                        label='Nome'
                        placeholder="Digite o nome do time"
            />
            <Campo aoAlterado={valor=>setCorPrimariaTime(valor)}
                        valor={corPrimariaTime}
                        label='Cor Primária (fundo)'
                        placeholder="Informe a cor primária do time" 
                        type='color'           
            />
            <Campo aoAlterado={valor=>setCorSecundariaTime(valor)}
                        valor={corSecundariaTime}
                        label='Cor Secundária (destaques)'
                        placeholder="Informe a cor secundária do time" 
                        type='color'           
            />
            <Botao>Criar Time</Botao>
            </form>
        </section>
    )
}

export default Formulario;