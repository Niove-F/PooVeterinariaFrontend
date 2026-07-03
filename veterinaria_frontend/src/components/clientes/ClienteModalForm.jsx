import React from 'react';
import { X } from 'lucide-react';

const ClienteModalForm = ({ isOpen, onClose, cliente }) => {
  if (!isOpen) return null;

  // Si nos pasan un cliente, estamos editando; si no, estamos creando uno nuevo
  const esEdicion = !!cliente;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Cabecera de la Modal */}
        <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <h3 className="font-bold text-slate-800 text-lg">
            {esEdicion ? 'Editar Datos del Cliente' : 'Registrar Nuevo Cliente'}
          </h3>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:bg-slate-200 rounded-xl transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Cuerpo del Formulario (Mockup) */}
        <form className="p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Nombre Completo</label>
              <input 
                type="text" 
                defaultValue={cliente?.nombre || ''} 
                placeholder="Ej. Juan Pérez" 
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-teal-500 focus:bg-white transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">DNI / Documento</label>
              <input 
                type="text" 
                defaultValue={cliente?.dni || ''} 
                placeholder="12345678" 
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-teal-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Correo Electrónico</label>
            <input 
              type="email" 
              defaultValue={cliente?.correo || ''} 
              placeholder="juan@correo.com" 
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-teal-500 focus:bg-white transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Teléfono de Contacto</label>
            <input 
              type="text" 
              defaultValue={cliente?.telefono || ''} 
              placeholder="+51 987 654 321" 
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-teal-500 focus:bg-white transition-all"
            />
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
              {esEdicion ? 'Guardar Cambios' : 'Registrar Cliente'}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default ClienteModalForm;