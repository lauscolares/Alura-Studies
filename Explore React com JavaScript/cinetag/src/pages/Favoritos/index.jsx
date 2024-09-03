import bannerFav from "../../assets/imagens/banner-favoritos.png";
import Banner from "../../componentes/Banner";
import PostCard from "../../componentes/PostCard";
import { useCardContext } from "../../hooks/useCardContext";
import "./Favoritos.css";

export default function Favoritos() {
    const { favorito, posts } = useCardContext();
    const postsFavoritos = posts.filter(post => favorito[post.id]);

    return (
        <div className="fav-container">
            <Banner banner={bannerFav} />
            <h1>Meus Favoritos</h1>
            <div className="posts-container">
                {postsFavoritos.map((post) => (<PostCard key={post.id} post={post} />))}
            </div>
        </div>
    )
}