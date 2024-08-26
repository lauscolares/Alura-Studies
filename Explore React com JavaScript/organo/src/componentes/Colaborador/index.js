import './Colaborador.css'
import { IoIosCloseCircle } from "react-icons/io";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const Colaborador = ({aoDeletar, colaborador, aoFavoritar}) => {
    function favoritar() {
        aoFavoritar(colaborador.id)
    }

const propsFavorito = {
    size: 25,
    onClick: favoritar
}

    return (
        <div className='colaborador'>
            <IoIosCloseCircle 
                size={25} 
                className="deletar" 
                onClick={() => aoDeletar(colaborador.id)}
            />
            <div className='cabecalho'>
                <img src={colaborador.imagem} alt={colaborador.nome}></img>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito 
                        ? <MdFavorite {...propsFavorito} color='#ff0000'/> 
                        : <MdFavoriteBorder {...propsFavorito}/>
                    }
                </div>
            </div>
        </div>
    )

}

export default Colaborador