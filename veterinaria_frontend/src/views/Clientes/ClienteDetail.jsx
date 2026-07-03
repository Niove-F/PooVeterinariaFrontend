import React, { useState } from 'react';
import { Mail, Phone, CreditCard, PawPrint, ArrowLeft, Plus } from 'lucide-react';
import HistorialMedicoDrawer from '../../components/pacientes/HistorialMedicoDrawer';
import MascotasTabs from '../../components/clientes/MascotasTabs';
import MascotaModalForm from '../../components/pacientes/MascotaModalForm';

const ClienteDetail = () => {
  // Mock Data del cliente específico obtenido de la URL
  const cliente = {
    nombre: 'Carlos Ruiz',
    dni: '74839201',
    correo: 'carlos.ruiz@gmail.com',
    telefono: '987654321',
    direccion: 'Av. Larco 456, Miraflores',
    mascotas: [
      { id: 101, nombre: 'Max', especie: 'Perro', raza: 'Golden Retriever', edad: '3 años', peso: '32 kg' },
      { id: 102, nombre: 'Pelusa', especie: 'Gato', raza: 'Persa', edad: '1 año', peso: '4.2 kg' },
    ]
  };

  // Estados para manejo de UI
  const [activeTab, setActiveTab] = useState('mascotas');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState('');

  const handleVerHistorial = (nombreMascota) => {
    setMascotaSeleccionada(nombreMascota);
    setDrawerOpen(true);
  };


  const [mascotaModalOpen, setMascotaModalOpen] = useState(false);
  const [mascotaAEditar, setMascotaAEditar] = useState(null);

  const handleAñadirMascota = () => {
    setMascotaAEditar(null); // Modo "Crear"
    setMascotaModalOpen(true);
  };

  const handleEditarMascota = (mascota) => {
    setMascotaAEditar(mascota);
    setMascotaModalOpen(true);
  };


  return (
    <div className="space-y-6">
      {/* Botón Volver */}
      <button className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
        <ArrowLeft size={16} /> Volver al listado
      </button>

      {/* Perfil / Datos Principales del Dueño */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-800">{cliente.nombre}</h2>
            <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 border border-slate-200 rounded-md text-xs font-mono font-medium">DNI {cliente.dni}</span>
          </div>
          <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5"><Phone size={16} className="text-slate-400" /> {cliente.telefono}</span>
            <span className="flex items-center gap-1.5"><Mail size={16} className="text-slate-400" /> {cliente.correo}</span>
          </div>
          <p className="text-xs text-slate-400">Dirección: {cliente.direccion}</p>
        </div>
      </div>

      {/* Selector de Pestañas (Tabs) */}
      <div className="border-b border-slate-200 flex gap-6 text-sm font-medium">
        <button 
          onClick={() => setActiveTab('mascotas')}
          className={`pb-3 transition-colors relative ${activeTab === 'mascotas' ? 'text-teal-600 font-semibold' : 'text-slate-400 hover:text-slate-600'}`}
        >
          Mascotas Registradas ({cliente.mascotas.length})
          {activeTab === 'mascotas' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500 rounded-full"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('pagos')}
          className={`pb-3 transition-colors relative ${activeTab === 'pagos' ? 'text-teal-600 font-semibold' : 'text-slate-400 hover:text-slate-600'}`}
        >
          Historial de Cuentas
          {activeTab === 'pagos' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500 rounded-full"></div>}
        </button>
      </div>

      {/* Contenido según Pestaña Activa */}
      {activeTab === 'mascotas' ? (
        <MascotasTabs 
          mascotas={cliente.mascotas} 
          onVerHistorial={handleVerHistorial}
          onAñadirMascota={handleAñadirMascota}
          onEditarMascota={handleEditarMascota}
        />
      ) : (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center text-slate-400 text-sm">
          <CreditCard className="mx-auto mb-2 text-slate-300" size={32} />
          No se registran deudas pendientes ni comprobantes emitidos en este periodo.
        </div>
      )}

      {/* Inyección del Panel Lateral Desplegable */}
      <HistorialMedicoDrawer 
        isOpen={drawerOpen} 
        onClose={() => setDrawerOpen(false)} 
        mascotaName={mascotaSeleccionada}
      />

      <MascotaModalForm 
        isOpen={mascotaModalOpen}
        onClose={() => setMascotaModalOpen(false)}
        mascota={mascotaAEditar}
      />
    </div>
  );
};

export default ClienteDetail;