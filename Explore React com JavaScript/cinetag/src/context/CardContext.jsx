import { createContext, useState } from "react";
import postsData from "../json/db.json";

export const CardContext = createContext();
CardContext.displayName = "Card";

export const CardProvider = ({ children }) => {
    const [favorito, setFavorito] = useState(false);
    const [posts, setPosts] = useState(postsData);

    return (
        <CardContext.Provider
            value={{
                favorito,
                setFavorito,
                posts,
                setPosts
            }}
        >
            {children}
        </CardContext.Provider>
    );
}