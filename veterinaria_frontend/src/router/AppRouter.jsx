import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Dashboard from '../views/Dashboard/Dashboard';
import ClientesList from '../views/Clientes/ClientesList';
import ClienteDetail from '../views/Clientes/ClienteDetail';
import CitasCalendario from '../views/Citas/CitasCalendario';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/*" 
          element={
            <MainLayout>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="clientes" element={<ClientesList />} />
                <Route path="clientes/:id" element={<ClienteDetail />} />
                <Route path="citas" element={<CitasCalendario />} />

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