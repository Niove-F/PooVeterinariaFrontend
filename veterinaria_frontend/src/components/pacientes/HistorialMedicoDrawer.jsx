import React from 'react';
import { X, ShieldAlert, Activity, FileText } from 'lucide-react';

const HistorialMedicoDrawer = ({ isOpen, onClose, mascotaName }) => {
  if (!isOpen) return null;

  // Mock data del historial médico de la mascota seleccionada
  const historialMock = [
    { fecha: '15/05/2026', tipo: 'Vacuna', detalle: 'Quíntuple + Rabia (Refuerzo anual)', vet: 'Dr. Alejandro Fuentes' },
    { fecha: '02/04/2026', tipo: 'Diagnóstico', detalle: 'Gastroenteritis leve. Tratamiento con metronidazolo por 5 días.', vet: 'Dra. Amelia Mori' },
    { fecha: '10/01/2026', tipo: 'Control', detalle: 'Profilaxis dental y control de peso ideal.', vet: 'Dr. Alejandro Fuentes' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-xs">
      {/* Fondo clickeable para cerrar */}
      <div className="flex-1" onClick={onClose}></div>
      
      {/* Contenedor del Drawer */}
      <div className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-200">
        
        {/* Cabecera */}
        <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Historial Clínico</span>
            <h3 className="font-bold text-slate-800 text-xl mt-0.5">Historial de {mascotaName}</h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:bg-slate-200 rounded-xl transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Contenido / Línea de tiempo */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="relative border-l-2 border-slate-200 pl-5 ml-2.5 space-y-6">
            {historialMock.map((evento, index) => (
              <div key={index} className="relative">
                {/* Icono indicador en la línea de tiempo */}
                <div className="absolute -left-[31px] top-0 bg-white p-1 border-2 border-teal-500 rounded-full text-teal-600">
                  {evento.tipo === 'Vacuna' ? <ShieldAlert size={14} /> : evento.tipo === 'Diagnóstico' ? <Activity size={14} /> : <FileText size={14} />}
                </div>
                
                {/* Tarjeta del evento */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold px-2 py-0.5 bg-slate-200/60 text-slate-600 rounded-sm">{evento.tipo}</span>
                    <span className="text-xs text-slate-400 font-medium">{evento.fecha}</span>
                  </div>
                  <p className="text-sm text-slate-700 font-medium pt-1">{evento.detalle}</p>
                  <p className="text-xs text-slate-400 pt-1">Atendido por: {evento.vet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HistorialMedicoDrawer;