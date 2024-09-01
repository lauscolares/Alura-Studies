import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tags from "./Tags"
import Imagem from "./Imagem"
import populares from "./Populares/populares.json"

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
    padding: 0;
`

const Galeria = ({ fotos = [], onSelecionarFoto, onFavoritar, setTag }) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                    {fotos.map( foto => 
                        <Imagem 
                            key={foto.id}
                            foto={foto}
                            onExpandir={onSelecionarFoto}
                            onFavoritar={onFavoritar}
                        /> 
                    )}
                    </ImagensContainer>
                </SecaoFluida>
                <Populares 
                    populares={populares}
                    key={populares.id}
                />
            </GaleriaContainer>
        </>
    )
}

export default Galeria