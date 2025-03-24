import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Product } from '../pages/Product';
import { NotFound } from '../pages/NotFound';
import { Suppliers } from '../pages/Suppliers';
import { SalesReport } from '../pages/SalesReport';

export function SalesRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/sales-report" element={<SalesReport />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}