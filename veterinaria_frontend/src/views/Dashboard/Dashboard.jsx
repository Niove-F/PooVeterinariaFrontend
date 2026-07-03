import React from 'react';
import { Clock, AlertTriangle, CheckCircle2, PawPrint } from 'lucide-react';

const Dashboard = () => {
  // --- MOCK DATA (Datos falsos simulando la respuesta del Backend) ---
  const stats = [
    { titulo: 'Clientes Totales', valor: '1,248', color: 'text-slate-800' },
    { titulo: 'Pacientes Activos', valor: '842', color: 'text-slate-800' },
    { titulo: 'Citas para Hoy', valor: '12', color: 'text-teal-600' },
    { titulo: 'Cirugías Pendientes', valor: '3', color: 'text-amber-600' },
  ];

  const citasHoy = [
    { id: 1, hora: '09:00 AM', paciente: 'Max', especie: 'Perro', dueño: 'Carlos Ruiz', motivo: 'Vacunación Anual', estado: 'Completada' },
    { id: 2, hora: '10:30 AM', paciente: 'Luna', especie: 'Gato', dueño: 'Ana Gómez', motivo: 'Consulta General', estado: 'En espera' },
    { id: 3, hora: '11:15 AM', paciente: 'Rocky', especie: 'Perro', dueño: 'Luis Fernando', motivo: 'Revisión Post-Cirugía', estado: 'Programada' },
    { id: 4, hora: '02:00 PM', paciente: 'Coco', especie: 'Loro', dueño: 'María López', motivo: 'Corte de alas', estado: 'Programada' },
  ];

  const alertas = [
    { id: 1, paciente: 'Boby', mensaje: 'Observación por alergia a penicilina.', urgencia: 'alta' },
    { id: 2, paciente: 'Misha', mensaje: 'Falta segunda dosis de desparasitante.', urgencia: 'media' },
  ];

  // Función auxiliar para pintar los estados de las citas
  const getEstadoBadge = (estado) => {
    switch (estado) {
      case 'Completada':
        return <span className="px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">Completada</span>;
      case 'En espera':
        return <span className="px-3 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">En espera</span>;
      default:
        return <span className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">Programada</span>;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Cabecera */}
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-800">Panel de Control</h2>
        <p className="text-slate-500">Resumen general de la clínica para hoy.</p>
      </div>

      {/* Grid de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <p className="text-sm font-medium text-slate-500">{stat.titulo}</p>
            <p className={`text-3xl font-bold mt-2 ${stat.color}`}>{stat.valor}</p>
          </div>
        ))}
      </div>

      {/* Contenido Principal a dos columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Columna Izquierda: Tabla de Citas (Ocupa 2 espacios) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex justify-between items-center">
            <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
              <Clock className="text-teal-500" size={20} />
              Agenda de Hoy
            </h3>
            <button className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors">
              Ver calendario completo
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-200">
                  <th className="p-4 font-medium">Hora</th>
                  <th className="p-4 font-medium">Paciente</th>
                  <th className="p-4 font-medium">Dueño</th>
                  <th className="p-4 font-medium">Motivo</th>
                  <th className="p-4 font-medium">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {citasHoy.map((cita) => (
                  <tr key={cita.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 text-slate-600 font-medium whitespace-nowrap">{cita.hora}</td>
                    <td className="p-4 font-bold text-slate-800 flex items-center gap-2">
                      <PawPrint size={14} className="text-slate-400" />
                      {cita.paciente} <span className="text-xs font-normal text-slate-400">({cita.especie})</span>
                    </td>
                    <td className="p-4 text-slate-600">{cita.dueño}</td>
                    <td className="p-4 text-slate-600">{cita.motivo}</td>
                    <td className="p-4">{getEstadoBadge(cita.estado)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Columna Derecha: Alertas Médicas (Ocupa 1 espacio) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="p-6 border-b border-slate-200">
            <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
              <AlertTriangle className="text-rose-500" size={20} />
              Alertas Activas
            </h3>
          </div>
          
          <div className="p-6 space-y-4">
            {alertas.map((alerta) => (
              <div 
                key={alerta.id} 
                className={`p-4 rounded-xl border ${alerta.urgencia === 'alta' ? 'bg-rose-50 border-rose-100' : 'bg-amber-50 border-amber-100'}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 ${alerta.urgencia === 'alta' ? 'text-rose-500' : 'text-amber-500'}`}>
                    {alerta.urgencia === 'alta' ? <AlertTriangle size={18} /> : <CheckCircle2 size={18} />}
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${alerta.urgencia === 'alta' ? 'text-rose-900' : 'text-amber-900'}`}>
                      Paciente: {alerta.paciente}
                    </p>
                    <p className={`text-sm mt-1 ${alerta.urgencia === 'alta' ? 'text-rose-700' : 'text-amber-700'}`}>
                      {alerta.mensaje}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {alertas.length === 0 && (
              <div className="text-center text-slate-400 py-6">
                No hay alertas activas en este momento.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;