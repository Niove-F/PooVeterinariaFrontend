import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Menú Lateral Fijo */}
      <Sidebar />

      {/* Contenido Principal */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Barra Superior */}
        <Navbar />

        {/* Zona de Páginas Dinámicas */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;