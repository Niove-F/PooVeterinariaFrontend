import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Dashboard from '../views/Dashboard/Dashboard';
import ClientesList from '../views/Clientes/ClientesList';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Capturamos todas las rutas internas en el cascarón de la app */}
        <Route 
          path="/*" 
          element={
            <MainLayout>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="clientes" element={<ClientesList />} />
                
                {/* Redirección automática por si entran a una ruta que no existe */}
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </MainLayout>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;