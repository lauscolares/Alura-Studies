import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import "./FavoritoBotao.css";
import { useCardContext } from "../../../hooks/useCardContext";

const FavoritoBotao = ({ id }) => {
    const { favorito, handleFavorito } = useCardContext();

    return (
        <button className="favorito" onClick={() => handleFavorito(id)}>
            {favorito[id] ? <MdFavorite /> : <MdFavoriteBorder />}
        </button>
    );
}

export default FavoritoBotao;