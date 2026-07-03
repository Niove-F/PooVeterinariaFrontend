import React from 'react';
import { PawPrint, Plus } from 'lucide-react';

const MascotasTabs = ({ mascotas, onVerHistorial, onEditarMascota, onAñadirMascota }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {mascotas.map((mascota) => (
        <div 
          key={mascota.id} 
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all"
        >
          {/* Cabecera de la Tarjeta */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-teal-50 p-2.5 rounded-xl text-teal-600 border border-teal-100">
                <PawPrint size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">{mascota.nombre}</h4>
                <p className="text-xs text-slate-400">{mascota.especie} • {mascota.raza}</p>
              </div>
            </div>
          </div>
          
          {/* Datos Rápidos */}
          <div className="grid grid-cols-2 gap-4 bg-slate-50 p-3 rounded-xl text-xs text-slate-600 border border-slate-100/50">
            <p>Edad: <span className="font-semibold text-slate-800">{mascota.edad}</span></p>
            <p>Peso: <span className="font-semibold text-slate-800">{mascota.peso}</span></p>
          </div>

          {/* Acciones de la Mascota */}
          <div className="flex gap-2 pt-2">
            <button 
              onClick={() => onVerHistorial(mascota.nombre)}
              className="flex-1 py-2 text-xs font-semibold border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
            >
              Ver Historial Clínico
            </button>
            <button 
                onClick={() => onEditarMascota(mascota.nombre)}
                className="px-3 py-2 text-xs font-semibold bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors"
            >
              Editar
                </button>
              </div>
            </div>
          ))}
          
      {/* Botón para registrar una nueva mascota desde el perfil del dueño */}
      <button 
        onClick={onAñadirMascota}
        className="border-2 border-dashed border-slate-200 hover:border-teal-400 hover:bg-teal-50/10 rounded-2xl flex flex-col items-center justify-center p-6 text-slate-400 hover:text-teal-600 transition-all space-y-2 cursor-pointer min-h-[180px]"
      >
        <Plus size={24} />
        <span className="text-sm font-semibold">Añadir Nueva Mascota</span>
      </button>
    </div>
  );
};

export default MascotasTabs;