import styled from "styled-components";
import expandir from "/icones/expandir.png"
import favoritoAtivo from "/icones/favorito-ativo.png"
import favoritoInativo from "/icones/favorito.png"
import BotaoIcone from "../../BotaoIcone";
import { useState } from "react";

const FigureStyled = styled.figure`
    display: flex;
    flex-direction: column;
    width: ${props => props.$expandida ? '90%' : '448px'};
    max-width: 100%;
    margin: 0;
    & > img {
        max-width: 100%;
        height: ${props => props.$expandida ? '90%' : '256px'};
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    };
    figcaption{
        background-color: #001634;
        color: white;
        padding: 12px;
        border-radius: 0 0 20px 20px;
        box-sizing: border-box;
        h3{
            font-family: 'GandhiSansBold';
            font-size: 20px;
        };
        h4{
            flex-grow: 1;
            font-size: 16px;
        };
        h3, h4{
            margin: 0;
        };
        button{
            background-color: transparent;
            border: none;
            padding: 0;
            cursor: pointer;
        };
    };
`
const RodapeStyled = styled.footer`
            display: flex;
            justify-content: space-between;
            align-items: center;
`

const BotaoContainer = styled.div`
    display: flex;
    gap: 24px;
`

const Imagem = ({ foto, onExpandir, isExpandido, onFavoritar }) => {

    const handleExpandir = () => {
        onExpandir(foto);
    };

    const handleFavoritar = () => {
        onFavoritar(foto);
    }

    return (
        <FigureStyled $expandida={isExpandido}>
            <img src={foto.path} alt={foto.alt} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <RodapeStyled>
                    <h4>{foto.fonte}</h4>
                    <BotaoContainer>
                        <BotaoIcone
                            icone={foto.favorita ? favoritoAtivo : favoritoInativo}
                            onClick={handleFavoritar}
                        />
                        {!isExpandido && <BotaoIcone
                            icone={expandir}
                            onClick={handleExpandir}
                        />}
                    </BotaoContainer>
                </RodapeStyled>
            </figcaption>
        </FigureStyled>
    );
}

export default Imagem;