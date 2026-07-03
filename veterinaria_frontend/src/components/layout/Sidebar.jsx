import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, PawPrint, Calendar, BarChart3, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Users size={20} />, label: 'Clientes', path: '/clientes' },
    { icon: <Calendar size={20} />, label: 'Citas', path: '/citas' },
    { icon: <BarChart3 size={20} />, label: 'Reportes', path: '/reportes' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-200 flex flex-col h-full border-r border-slate-800">
      {/* Logo o Nombre del Sistema */}
      <div className="p-6 border-b border-slate-800 flex items-center gap-3">
        <div className="bg-teal-500 p-2 rounded-lg text-slate-900">
          <PawPrint size={22} fill="currentColor" />
        </div>
        <div>
          <h1 className="font-bold text-lg text-white tracking-wide">VetControl</h1>
          <span className="text-xs text-slate-400">Software Clínico</span>
        </div>
      </div>

      {/* Enlaces del Menú */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-teal-500 text-slate-950 font-semibold shadow-sm' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Footer del Sidebar / Configuración y Logout */}
      <div className="p-4 border-t border-slate-800 space-y-1">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition-colors">
          <Settings size={20} />
          Configuración
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-rose-400 hover:bg-rose-950/30 hover:text-rose-300 transition-colors">
          <LogOut size={20} />
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;