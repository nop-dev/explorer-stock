import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/auth';
import { ROLES } from '../../utils/roles';

import { Button } from '../../components/Button';
import { Container, Header, Item } from "./styles";

export function Product() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const products = Array(20)
    .fill({ name: 'Produto' })
    .map((item, index) => (`${item.name} ${index + 1}`));

  return (
    <Container>
      <Header>
        <h1>Produtos</h1>

        <nav>
          {user.role === ROLES.ADMIN && (
            <Button title="Cadastrar" />
          )}
          <Button title="Voltar" onClick={() => navigate('/')} />
        </nav>
      </Header>

      {
        products.map((product) => (
          <Item key={product}>
            <span>{product}</span>
          </Item>
        ))
      }
    </Container>

  )
}