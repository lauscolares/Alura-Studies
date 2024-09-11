import './Banner.css'
import React from 'react'

interface BannerProps {
    endereçoImagem: string
    textoAlternativo?: string
}

const Banner = ({ endereçoImagem, textoAlternativo }: BannerProps) => {
    // JSX
    return (
        <header className="banner">
            {/* {<img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>} */}
            <img src={endereçoImagem} alt={textoAlternativo} />
        </header>
    )
}

export default Banner