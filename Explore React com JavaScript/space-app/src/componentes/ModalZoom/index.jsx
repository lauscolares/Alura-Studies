import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import BotaoIcone from "../BotaoIcone";
import fechar from "/icones/fechar.png";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const DialogStyled = styled.dialog`
    position: absolute;
    top: 10%;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
        background-color: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
        position: relative;
        top: 24px;
        right: 44px;
        }
    }
`

const ModalZoom = ({ foto, onClose, onFavoritar }) => {

    return (
        <>
            {foto && <>
                <Overlay>
                    <DialogStyled open={!!foto} onClose={onClose}>
                        <Imagem
                            foto={foto}
                            isExpandido={true}
                            onFavoritar={onFavoritar}
                        />
                        <form method="dialog">
                            <BotaoIcone 
                                icone={fechar} 
                            />
                        </form>
                    </DialogStyled>
                </Overlay>
            </>}
        </>
    );
}

export default ModalZoom;