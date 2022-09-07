import { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

CarrinhoContext.displayName = 'Carrinho';

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  return (
    <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinhoContext = () => {
  const {carrinho, setCarrinho} = useContext(CarrinhoContext);

  function adicionarProduto(novoProduto){
    const temOProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === novoProduto.id);
    if(!temOProduto){
      novoProduto.quantidade = 1 ;
      return setCarrinho(carrinhoAnterior => [...carrinhoAnterior,novoProduto]);
    }
    setCarrinho(carrinhoAnterior => carrinhoAnterior.map(itemDocarrinho => {
      if(itemDocarrinho.id === novoProduto.id) itemDocarrinho.quantidade += 1;
      return itemDocarrinho;
    }))
  }

  return {
    carrinho,
    setCarrinho,
    adicionarProduto
  }
}