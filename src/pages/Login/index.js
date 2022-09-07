import { Button } from '@material-ui/core';
import { Container,Titulo,InputContainer } from './styles';
import { Input,InputLabel,InputAdornment } from '@material-ui/core';
import { UsuarioContext} from 'common/context/Usuario';
import { useContext} from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  const { nome, setNome, saldo, setSaldo } = useContext(UsuarioContext);
  return (
    <Container>
      <Titulo>
        Insira o seu nome
      </Titulo>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
          type="number"
          value={saldo}
          onChange={(event) =>  setSaldo(event.target.value)}
          startAdornment={
            <InputAdornment position="start">
              R$
            </InputAdornment>
          }
        />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        disabled={nome.length < 4}
        onClick = {() => history.push('/feira')}
      >
        Avançar
      </Button>
    </Container>
  )
};

export default Login;