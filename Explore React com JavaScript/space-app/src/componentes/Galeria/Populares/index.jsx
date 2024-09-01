import styled from "styled-components"
import Titulo from "../../Titulo"

const ColunaPopulares = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding-left: 24px;
    & > img {
        width: 212px;
        border-radius: 20px;
    }
    & > button {
        background-color: transparent;
        color: #FFFFFF;
        border: 2px solid #C98CF1;
        border-radius: 10px;
        padding: 14px 30px;
        font-size: 16px;
        width: 100%;
        cursor: pointer;
    }
`

const Populares = ({ populares = [] }) => {
    return (
        <>
        <ColunaPopulares>
            <Titulo>Populares</Titulo>
            {populares.map((popular) => (
                <img src={popular.path} alt={popular.id} key={popular.id}/>
            ) )}
            <button>Ver mais</button>
        </ColunaPopulares>
    </>
    )
}

export default Populares