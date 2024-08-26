import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({corPrimaria, corSecundaria, name, colaboradores, aoDeletar, aoFavoritar}) => {

    const handleDelete = (colaboradorId, index) => {
        aoDeletar(colaboradorId, index);
    };

    return(
        (colaboradores.length > 0) ? <section className="time" style={{
            '--time-cor-primaria': corPrimaria,
            '--title-cor-secundaria': corSecundaria}}
            >
            <h3>{name}</h3>
            <div className="colaboradores">
            {colaboradores.map((colaborador, index) => { 
                return (
                        <Colaborador
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            key={colaborador.nome}
                            corDeFundo={corPrimaria}
                            aoDeletar={() => handleDelete(colaborador.id, index)}
                            colaborador={colaborador}
                            aoFavoritar={aoFavoritar}
                        />
                    )}
                )}
            </div>
        </section>
        : ''
    )
}

export default Time