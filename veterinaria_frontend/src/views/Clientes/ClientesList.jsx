import React, { useState } from 'react';
import { Search, Plus, Filter, Edit, Eye, Trash2 } from 'lucide-react';
import ClienteModalForm from '../../components/clientes/ClienteModalForm';

const ClientesList = () => {
  // --- MOCK DATA ---
  const clientesMock = [
    { id: 1, nombre: 'Carlos Ruiz', dni: '74839201', correo: 'carlos.ruiz@gmail.com', telefono: '987654321', mascotas: 'Max (Perro)' },
    { id: 2, nombre: 'Ana Gómez', dni: '45291038', correo: 'ana.gomez@hotmail.com', telefono: '951234567', mascotas: 'Luna (Gato)' },
    { id: 3, nombre: 'Luis Fernando', dni: '10293847', correo: 'luis.f@outlook.com', telefono: '963852741', mascotas: 'Rocky (Perro)' },
    { id: 4, nombre: 'María López', dni: '09876543', correo: 'maria.l@gmail.com', telefono: '912345678', mascotas: 'Coco (Loro)' },
  ];

  // --- ESTADOS ---
  const [busqueda, setBusqueda] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

  // Filtrado de la tabla en tiempo real
  const clientesFiltrados = clientesMock.filter(cliente => 
    cliente.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    cliente.dni.includes(busqueda)
  );

  // Manejadores para abrir la modal de forma dual
  const handleNuevoCliente = () => {
    setClienteSeleccionado(null); // Va vacío -> Modo "Crear"
    setModalOpen(true);
  };

  const handleEditarCliente = (cliente) => {
    setClienteSeleccionado(cliente); // Lleva datos -> Modo "Editar"
    setModalOpen(true);
  };

  return (
    <div className="space-y-6">
      
      {/* Cabecera de la Página */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-800">Gestión de Clientes</h2>
          <p className="text-slate-500">Listado, registro y control de propietarios de mascotas.</p>
        </div>
        <button 
          onClick={handleNuevoCliente}
          className="flex items-center justify-center gap-2 px-5 py-3 bg-teal-500 text-slate-950 font-semibold rounded-xl hover:bg-teal-600 transition-colors shadow-xs"
        >
          <Plus size={18} />
          Nuevo Cliente
        </button>
      </div>

      {/* Barra de Herramientas (Buscador y Filtros) */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar por nombre o DNI..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-teal-500 focus:bg-white transition-all"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium">
          <Filter size={16} />
          Filtros
        </button>
      </div>

      {/* Tabla Maestra */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-200">
                <th className="p-4 font-medium">Nombre</th>
                <th className="p-4 font-medium">DNI</th>
                <th className="p-4 font-medium">Contacto</th>
                <th className="p-4 font-medium">Mascotas Asociadas</th>
                <th className="p-4 font-medium text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {clientesFiltrados.map((cliente) => (
                <tr key={cliente.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-semibold text-slate-800">{cliente.nombre}</td>
                  <td className="p-4 text-slate-600 font-mono">{cliente.dni}</td>
                  <td className="p-4 space-y-0.5">
                    <p className="text-slate-700">{cliente.telefono}</p>
                    <p className="text-xs text-slate-400">{cliente.correo}</p>
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 text-xs font-medium bg-teal-50 text-teal-700 rounded-md border border-teal-100">
                      {cliente.mascotas}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-1.5">
                      <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors" title="Ver Detalle 360°">
                        <Eye size={16} />
                      </button>
                      <button 
                        onClick={() => handleEditarCliente(cliente)}
                        className="p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors" 
                        title="Editar"
                      >
                        <Edit size={16} />
                      </button>
                      <button className="p-2 text-rose-500 hover:bg-rose-50 rounded-xl transition-colors" title="Eliminar">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {clientesFiltrados.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-slate-400">
                    No se encontraron clientes que coincidan con la búsqueda.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Inyección de la Modal */}
      <ClienteModalForm 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        cliente={clienteSeleccionado}
      />

    </div>
  );
};

export default ClientesList;