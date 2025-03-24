import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";

import { AuthRoutes } from './auth.routes';
import { AdminRoutes } from './admin.routes';
import { SalesRoutes } from './sales.routes';
import { CustomerRoutes } from './customer.routes';
import { ROLES } from '../utils/roles';

export function Routes() {
  const { user } = useAuth();

  function acessRoutes() {
    switch (user.role) {
      case ROLES.ADMIN:
        return <AdminRoutes />;
      case ROLES.SALES:
        return <SalesRoutes />;
      default:
        return <CustomerRoutes />;
    }
  }

  return (
    <BrowserRouter>
      {user ? acessRoutes() : <AuthRoutes />}
    </BrowserRouter>
  );
}