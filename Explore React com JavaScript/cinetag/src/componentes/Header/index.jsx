import { Link } from "react-router-dom";
import './Header.css';
import logo from '../../assets/imagens/logo.png';

const Header = ({ showLoginButtons }) => {
    return (
        <header className="header">
            <nav className="nav-bar">
                <img src={logo} alt="Logo Cinetag" />
                {showLoginButtons
                    ? (<ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/cadastro">Cadastrar</Link>
                        </li>
                    </ul>)
                    : (<ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/favoritos">Favoritos</Link>
                        </li>
                        <li>
                            <Link to="/perfil">Perfil</Link>
                        </li>
                    </ul>)
                }
            </nav>
        </header>
    );
};

export default Header;