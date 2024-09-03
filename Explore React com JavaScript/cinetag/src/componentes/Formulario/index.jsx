import Button from '../Button';
import './Formulario.css'

const Formulario = ({ children, buttonLabel, formTitle }) => {
    return (
        <div className="form-container" >
            <div className="form-div" >
                <h1>{formTitle}</h1>
                {children}
                <Button onClick={() => { console.log("Enviado") }}>{buttonLabel}</Button>
            </div>
        </div>
    )
}

export default Formulario;