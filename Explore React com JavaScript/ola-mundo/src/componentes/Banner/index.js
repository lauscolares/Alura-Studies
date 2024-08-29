import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpeg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>
                    Olá Mundo
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Laura Colares, estudante de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt="Circulo colorido" />
                <img className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do autor" />
            </div>
        </div>
    )
}