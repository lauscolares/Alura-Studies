import { useContext } from "react";
import { CardContext } from "../context/CardContext";

export const useCardContext = () => {
    const { favorito, setFavorito, posts, setPosts } = useContext(CardContext);

    function handleFavorito(id) {
        setFavorito((prevFavoritos) => ({
            ...prevFavoritos,
            [id]: !prevFavoritos[id],
        }));
    }



    return{
        favorito,
        handleFavorito,
        posts,
        setPosts
    }
}