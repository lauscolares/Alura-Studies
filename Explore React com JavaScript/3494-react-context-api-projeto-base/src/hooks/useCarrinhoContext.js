import { useContext, useEffect } from 'react';
import { CarrinhoContext } from '@/context/CarrinhoContext';

export const useCarrinhoContext = () => {
    const { carrinho, setCarrinho, quantidade, setQuantidade, valorTotal, setValorTotal } = useContext(CarrinhoContext);

    function mudarQuantidade(id, quantidade) {
        return carrinho.map((itemCarrinho) => {
            if (itemCarrinho.id === id) itemCarrinho.quantidade += quantidade;
            return itemCarrinho;
        })
    }

    function adicionarProduto(novoProduto) {
        const produtoExistente = carrinho.some((itemCarrinho) => itemCarrinho.id === novoProduto.id);

        if (!produtoExistente) {
            novoProduto.quantidade = 1;
            return setCarrinho((carrinhoAntigo) => [...carrinhoAntigo, novoProduto]);
        }

        const carrinhoAtualizado = mudarQuantidade(novoProduto.id, 1);
        setCarrinho([...carrinhoAtualizado]);
    }

    function removerProduto(id) {
        const produto = carrinho.find((itemCarrinho) => itemCarrinho.id === id);
        const isUltimo = produto.quantidade === 1;

        if (isUltimo) {
            return setCarrinho((carrinhoAntigo) =>
                carrinhoAntigo.filter((itemCarrinho) => itemCarrinho.id !== id));
        }

        const carrinhoAtualizado = mudarQuantidade(produto.id, -1);
        setCarrinho([...carrinhoAtualizado]);
    }

    function removerProdutoCarrinho(id) {
        const produto = carrinho.filter((itemCarrinho) => itemCarrinho.id !== id);
        setCarrinho(produto);
    }

    useEffect(() => {
        const { totalTemp, quantidadeTemp } = carrinho.reduce((acumulador, produto) => ({
            quantidadeTemp: acumulador.quantidadeTemp + produto.quantidade,
            totalTemp: acumulador.totalTemp + (produto.preco * produto.quantidade),
        }), { quantidadeTemp: 0, totalTemp: 0 });
        setQuantidade(quantidadeTemp);
        setValorTotal(totalTemp);
    }, [carrinho]);


    return {
        carrinho,
        setCarrinho,
        adicionarProduto,
        removerProduto,
        removerProdutoCarrinho,
        valorTotal,
        quantidade,
    }
}