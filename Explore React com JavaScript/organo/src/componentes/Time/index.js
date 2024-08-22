import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return(
        (props.colaboradores.length > 0) ? <section className="time" style={{
            '--time-cor-primaria': props.corPrimaria,
            '--title-cor-secundaria': props.corSecundaria}}>
            <h3>{props.name}</h3>
            <div className="colaboradores">
            {(props.colaboradores || []).map(colaborador => <Colaborador nome={colaborador.nome}
                                                                        cargo={colaborador.cargo}
                                                                        imagem={colaborador.imagem} />)}
            </div>
        </section>
        : ''
    )
}

export default Time