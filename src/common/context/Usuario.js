import { createContext } from 'react';
import { useState } from 'react';


// CRIANDO O CONTEXTO DE USUÁRIO
export const UsuarioContext = createContext();

UsuarioContext.displayName = "Usuario";

// PROVIDER QUE DISPONIBILIZARÁ OS ESTADOS : NOME E SALDO
export const UsuarioProvider = ({children}) => {
  const [nome,setNome] = useState("");
  const [saldo,setSaldo] = useState(0);

  
  return (
    <UsuarioContext.Provider value={{nome, setNome, saldo, setSaldo}}>
      {children}
    </UsuarioContext.Provider>
  );
}

