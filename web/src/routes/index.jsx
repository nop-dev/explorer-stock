import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';

import { useAuth } from "../hooks/auth";
import { ROLES } from '../utils/roles';
import { api } from '../services/api';

import { AuthRoutes } from './auth.routes';
import { AdminRoutes } from './admin.routes';
import { SalesRoutes } from './sales.routes';
import { CustomerRoutes } from './customer.routes';

export function Routes() {
  const { user, signOut } = useAuth();

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

  useEffect(() => {
    api.get("/users/validated").catch((error) => {
      if (error.response.status === 401) {
        console.log(error);
        signOut();
      }
    });
  }, []);

  return (
    <BrowserRouter>
      {user ? acessRoutes() : <AuthRoutes />}
    </BrowserRouter>
  );
}