import React from 'react';
import { X, Calendar, Clock, User, PawPrint, AlertCircle } from 'lucide-react';

const CitaModalForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Cabecera de la Modal */}
        <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <div>
            <h3 className="font-bold text-slate-800 text-lg">Programar Nueva Cita</h3>
            <p className="text-xs text-slate-400 mt-0.5">Asigna un bloque horario para atención médica.</p>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:bg-slate-200 rounded-xl transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Cuerpo del Formulario */}
        <form className="p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          
          {/* Fila 1: Paciente y Propietario (Mockup selectores) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <User size={12} /> Propietario / Dueño
              </label>
              <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-teal-500 focus:bg-white transition-all appearance-none">
                <option value="">Seleccionar dueño...</option>
                <option value="1">Carlos Ruiz (74839201)</option>
                <option value="2">Ana Gómez (45291038)</option>
                <option value="3">Luis Fernando (10293847)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <PawPrint size={12} /> Paciente / Mascota
              </label>
              <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-teal-500 focus:bg-white transition-all">
                <option value="">Seleccionar mascota...</option>
                <option value="101">Max (Perro)</option>
                <option value="102">Pelusa (Gato)</option>
              </select>
            </div>
          </div>

          {/* Fila 2: Fecha y Hora */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <Calendar size={12} /> Fecha
              </label>
              <input 
                type="date" 
                defaultValue="2026-07-03"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-teal-500 focus:bg-white transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <Clock size={12} /> Bloque Horario
              </label>
              <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-teal-500 focus:bg-white transition-all">
                <option value="09:00">09:00 AM</option>
                <option value="10:30">10:30 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="15:30">03:30 PM</option>
              </select>
            </div>
          </div>

          {/* Fila 3: Motivo de la Cita */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Motivo de Consulta / Notas</label>
            <textarea 
              rows="3"
              placeholder="Ej. Control de puntos, cojera en pata delantera, corte de garras..." 
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-teal-500 focus:bg-white transition-all resize-none"
            />
          </div>

          {/* Fila 4: Tipo de Atención / Clasificación de Urgencia */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle size={18} className="text-amber-500" />
              <div>
                <p className="text-sm font-semibold text-slate-700">¿Es una Emergencia Médica?</p>
                <p className="text-xs text-slate-400">Prioriza el bloque en el panel de control.</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-500"></div>
            </label>
          </div>

          {/* Acciones de la Modal */}
          <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            >
              Cerrar
            </button>
            <button 
              type="button" 
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-semibold bg-teal-500 text-slate-950 hover:bg-teal-600 rounded-xl transition-colors shadow-xs"
            >
              Agendar Cita
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default CitaModalForm;