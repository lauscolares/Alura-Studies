import styled from 'styled-components'
import tags from './tags.json'

const TagContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const ListaTag = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    width: fit-content;
    &:hover {
      border-color: #7B78E5;
    }    
`

const Tags = () => {
    return (
        <TagContainer>
            <TagTitulo>Busque por tags:</TagTitulo>
            {tags.map(tag =>
                <ListaTag>
                    <Tag key={tag.id}>
                        {tag.titulo}
                    </Tag>
                </ListaTag>
            )}
        </TagContainer>
    )
}

export default Tags