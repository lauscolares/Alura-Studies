import { Link } from "react-router-dom";
import './Header.css';
import logo from '../../assets/imagens/logo.png';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav-bar">
                <img src={logo} alt="Logo Cinetag"/>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/favoritos">Favoritos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;