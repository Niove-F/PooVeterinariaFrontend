import React from 'react';
import { Bell, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
      {/* Contexto actual (Breadcrumb simplificado por ahora) */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-slate-400">Sistema</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-800 font-medium">Dashboard</span>
      </div>

      {/* Notificaciones y Perfil */}
      <div className="flex items-center gap-4">
        {/* Botón de Notificaciones */}
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>

        <div className="h-8 w-px bg-slate-200"></div>

        {/* Perfil de Usuario */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium text-slate-700">Dr. Alejandro Fuentes</p>
            <p className="text-xs text-slate-400">Administrador</p>
          </div>
          <div className="w-10 h-10 bg-slate-100 border border-slate-200 text-slate-600 rounded-full flex items-center justify-center font-bold">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;