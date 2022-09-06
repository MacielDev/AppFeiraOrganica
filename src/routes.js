import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { useState } from 'react';
import { BrowserRouter, Switch , Route} from 'react-router-dom';

export default function Router(){
  const [nome,setNome] = useState("");
  const [saldo,setSaldo] = useState(0);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login 
            nome={nome} 
            setNome={setNome} 
            saldo={saldo} 
            setSaldo={setSaldo}/>
        </Route>
        <Route path="/feira">
          <Feira/>
        </Route>
        <Route parh="/carrinho">
          <Carrinho/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}