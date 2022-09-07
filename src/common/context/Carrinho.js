import { createContext, useContext, useEffect, useState } from 'react';

const CarrinhoContext = createContext();

CarrinhoContext.displayName = 'Carrinho';

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidadeProdutos,setQuantidadeProdutos] = useState(0);
  return (
    <CarrinhoContext.Provider value={{
      carrinho, 
      setCarrinho,
      quantidadeProdutos,
      setQuantidadeProdutos
    }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinhoContext = () => {
  const {carrinho,
         setCarrinho,
         quantidadeProdutos,
         setQuantidadeProdutos
        } = useContext(CarrinhoContext);

  function mudarQuantidade(id, quantidade){
    return carrinho.map(itemDocarrinho => {
      if(itemDocarrinho.id === id) itemDocarrinho.quantidade += quantidade;
      return itemDocarrinho;
    })
  }

  function adicionarProduto(novoProduto){
    const temOProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === novoProduto.id);
    if(!temOProduto){
      novoProduto.quantidade = 1 ;
      return setCarrinho(carrinhoAnterior => [...carrinhoAnterior,novoProduto]);
    }
    setCarrinho(mudarQuantidade(novoProduto.id, 1));
  }

  function removerProduto(id){
    const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);
    const ehOUltimo = produto.quantidade === 1;
    
    if(ehOUltimo){
      return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemDoCarrinho => itemDoCarrinho.id !== id));
    }
    setCarrinho(mudarQuantidade(id,-1))
  }

  useEffect(() => {
    const novaQuantidade = carrinho.reduce((contador,produto) => contador + produto.quantidade ,0);
    setQuantidadeProdutos(novaQuantidade);
  },[carrinho,setQuantidadeProdutos]);

  return {
    carrinho,
    setCarrinho,
    adicionarProduto,
    removerProduto,
    quantidadeProdutos,
    setQuantidadeProdutos
  }
}