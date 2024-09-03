import { Link } from "react-router-dom";
import './PostCard.css';
import FavoritoBotao from "./FavoritoBotao";

const PostCard = ({ post }) => {
    return (
        <figure className="post-card">
            <img src={post.capa} alt={post.title} />
            <figcaption className="card-caption">
                <Link to={`/posts/${post.id}`}>
                    <h2>{post.titulo}</h2>
                </Link>
                <FavoritoBotao id={post.id}/>
            </figcaption>
        </figure>
    );
}

export default PostCard;