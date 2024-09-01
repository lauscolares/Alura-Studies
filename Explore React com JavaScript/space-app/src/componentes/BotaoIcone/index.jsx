import { useState } from "react";

const BotaoIcone = ({ icone, onClick }) => {


    return (
        <button onClick={onClick}>
            <img src={icone} />
        </button>
    );
}

export default BotaoIcone;