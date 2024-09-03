import Banner from "../../componentes/Banner";
import bannerHome from "../../assets/imagens/banner-home.png";
import PostCard from "../../componentes/PostCard";
import "./Home.css";
import { useCardContext } from "../../hooks/useCardContext";

export default function Home() {
    const { posts } = useCardContext();

    return (
        <div className="home-container">
            <Banner banner={bannerHome} />
            <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            <div className="posts-container">
                {posts.map((post) => (<PostCard key={post.id} post={post} />))}
            </div>
        </div>
    )
}