import React from 'react';
import { X, PawPrint, Award, Activity, Calendar } from 'lucide-react';

const MascotaModalForm = ({ isOpen, onClose, mascota }) => {
  if (!isOpen) return null;

  const esEdicion = !!mascota;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Cabecera de la Modal */}
        <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <div>
            <h3 className="font-bold text-slate-800 text-lg">
              {esEdicion ? `Editar Perfil de ${mascota.nombre}` : 'Añadir Nueva Mascota'}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {esEdicion ? 'Modifica los datos clínicos básicos.' : 'Registra un nuevo paciente bajo este propietario.'}
            </p>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:bg-slate-200 rounded-xl transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Cuerpo del Formulario */}
        <form className="p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          
          {/* Fila 1: Nombre y Especie */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <PawPrint size={12} /> Nombre de la Mascota
              </label>
              <input 
                type="text" 
                defaultValue={mascota?.nombre || ''} 
                placeholder="Ej. Toby, Misha" 
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-teal-500 focus:bg-white transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Especie</label>
              <select 
                defaultValue={mascota?.especie || ''}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-teal-500 focus:bg-white transition-all"
              >
                <option value="">Seleccionar...</option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Ave">Ave</option>
                <option value="Exótico">Especie Exótica</option>
              </select>
            </div>
          </div>

          {/* Fila 2: Raza y Edad */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <Award size={12} /> Raza
              </label>
              <input 
                type="text" 
                defaultValue={mascota?.raza || ''} 
                placeholder="Ej. Persian, Schnauzer" 
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-teal-500 focus:bg-white transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <Calendar size={12} /> Edad / Tiempo
              </label>
              <input 
                type="text" 
                defaultValue={mascota?.edad || ''} 
                placeholder="Ej. 2 años, 5 meses" 
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-teal-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Fila 3: Peso Actual */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <Activity size={12} /> Peso Actual (kg)
              </label>
              <input 
                type="text" 
                defaultValue={mascota?.peso || ''} 
                placeholder="Ej. 12.5" 
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-teal-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Acciones de la Modal */}
          <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            >
              Cancelar
            </button>
            <button 
              type="button" 
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-semibold bg-teal-500 text-slate-950 hover:bg-teal-600 rounded-xl transition-colors shadow-xs"
            >
              {esEdicion ? 'Guardar Cambios' : 'Registrar Paciente'}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default MascotaModalForm;