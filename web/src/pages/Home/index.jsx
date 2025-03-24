import { FiShoppingCart, FiTag, FiTruck } from 'react-icons/fi';

import { Feature } from '../../components/Feature';
import { Header } from '../../components/Header';
import { Container } from "./styles";

import { useAuth } from '../../hooks/auth';
import { ROLES } from '../../utils/roles';

export function Home() {
  const { user } = useAuth();
  return (
    <Container>
      <Header />

      <main>
        {user.role === ROLES.ADMIN && (
          <>
            <Feature title="Produto" icon={FiTag} to="/product" />
            <Feature title="Fornecedores" icon={FiTruck} to="/suppliers" />
            <Feature title="Relatório de vendas" icon={FiShoppingCart} to="/sales-report" />
          </>
        )}

        {user.role === ROLES.SALES && (
          <>
            <Feature title="Produto" icon={FiTag} to="/product" />
            <Feature title="Vendas" icon={FiShoppingCart} to="/sales" />
          </>
        )}

        {user.role === ROLES.CUSTOMER && (
          <>
            <Feature title="Produtos" icon={FiTag} to="/products" />
            <Feature title="Meus Pedidos" icon={FiShoppingCart} to="/my-orders" />
          </>
        )}
      </main>
    </Container>
  )
}