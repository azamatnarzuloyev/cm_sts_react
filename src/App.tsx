import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import OrdersPage from './pages/OrdersPage';
import ProductsPage from './pages/ProductsPage';
import InventoryPage from './pages/InventoryPage';
import PurchaseOrdersPage from './pages/PurchaseOrdersPage';
import DocumentsPage from './pages/DocumentsPage';
import PosPage from './pages/PosPage';
import MarketplacePage from './pages/MarketplacePage';
import CrmPage from './pages/CrmPage';
import WarehousePage from './pages/WarehousePage';
import ManufacturingPage from './pages/ManufacturingPage';
import FinancePage from './pages/FinancePage';
import ReportsPage from './pages/ReportsPage';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Header />
          <main className="mt-16 p-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/inventory" element={<InventoryPage />} />
              <Route path="/purchase-orders" element={<PurchaseOrdersPage />} />
              <Route path="/documents" element={<DocumentsPage />} />
              <Route path="/pos" element={<PosPage />} />
              <Route path="/marketplace" element={<MarketplacePage />} />
              <Route path="/crm" element={<CrmPage />} />
              <Route path="/warehouse" element={<WarehousePage />} />
              <Route path="/manufacturing" element={<ManufacturingPage />} />
              <Route path="/finance" element={<FinancePage />} />
              <Route path="/reports" element={<ReportsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;