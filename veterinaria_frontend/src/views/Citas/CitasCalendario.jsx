import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, Clock, User, PawPrint } from 'lucide-react';
import CitaModalForm from '../../components/citas/CitaModalForm';

const CitasCalendario = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // --- MOCK DATA ---
  const diasSemana = [
    { nombre: 'Lun', numero: 29, mes: 'Jun' },
    { nombre: 'Mar', numero: 30, mes: 'Jun' },
    { nombre: 'Mié', numero: 1, mes: 'Jul' },
    { nombre: 'Jue', numero: 2, mes: 'Jul' },
    { nombre: 'Vie', numero: 3, mes: 'Jul', hoy: true }, // Hoy
    { nombre: 'Sáb', numero: 4, mes: 'Jul' },
  ];

  const citasMock = [
    { id: 1, hora: '09:00 AM', paciente: 'Max', especie: 'Perro', dueño: 'Carlos Ruiz', motivo: 'Vacunación', urgente: false },
    { id: 2, hora: '10:30 AM', paciente: 'Luna', especie: 'Gato', dueño: 'Ana Gómez', motivo: 'Esterilización', urgente: true },
    { id: 3, hora: '12:00 PM', paciente: 'Rocky', especie: 'Perro', dueño: 'Luis Fernando', motivo: 'Control Post-Op', urgente: false },
    { id: 4, font: '03:30 PM', hora: '03:30 PM', paciente: 'Coco', especie: 'Loro', dueño: 'María López', motivo: 'Recorte Pico', urgente: false },
  ];

  return (
    <div className="space-y-6">
      
      {/* Cabecera */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-800">Agenda de Citas</h2>
          <p className="text-slate-500">Monitorea y programa los horarios de atención médica.</p>
        </div>
        <button onClick={() => setModalOpen(true)}
        className="flex items-center justify-center gap-2 px-5 py-3 bg-teal-500 text-slate-950 font-semibold rounded-xl hover:bg-teal-600 transition-colors shadow-xs">
          <Plus size={18} />
          Agendar Nueva Citas
        </button>
      </div>

      {/* Navegador de Fechas (Mockup de controles) */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <CalendarIcon className="text-teal-500" size={20} />
          <span className="font-bold text-slate-800 text-lg">Julio 2026</span>
        </div>
        
        {/* Selector de días de la semana */}
        <div className="flex gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          {diasSemana.map((dia, idx) => (
            <button 
              key={idx} 
              className={`flex flex-col items-center p-2.5 min-w-[55px] rounded-xl border transition-all ${
                dia.hoy 
                  ? 'bg-teal-500 text-slate-950 border-teal-500 font-bold shadow-xs' 
                  : 'bg-slate-50 text-slate-600 border-slate-100 hover:bg-slate-100'
              }`}
            >
              <span className="text-xs uppercase opacity-80">{dia.nombre}</span>
              <span className="text-lg font-bold">{dia.numero}</span>
            </button>
          ))}
        </div>

        <div className="flex gap-1.5">
          <button className="p-2 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-colors">
            <ChevronLeft size={16} />
          </button>
          <button className="p-2 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Línea de Tiempos / Bloques de Citas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Columna Izquierda/Centro: Lista Cronológica (Ocupa 2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider pl-1">Bloques Horarios</h3>
          
          {citasMock.map((cita) => (
            <div 
              key={cita.id} 
              className={`bg-white p-5 rounded-2xl border transition-all shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 ${
                cita.urgente ? 'border-l-rose-500 hover:border-slate-300' : 'border-l-teal-500 hover:border-slate-300'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                {/* Hora */}
                <div className="flex items-center gap-1.5 text-slate-600 font-medium font-mono text-sm bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 w-fit">
                  <Clock size={14} className="text-slate-400" />
                  {cita.hora}
                </div>

                {/* Info Paciente y Dueño */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-800 text-base flex items-center gap-1.5">
                      <PawPrint size={16} className="text-slate-400" />
                      {cita.paciente}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 bg-slate-100 text-slate-500 rounded-sm">
                      {cita.especie}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                    <User size={12} />
                    Propietario: <span className="text-slate-600 ml-0.5">{cita.dueño}</span>
                  </div>
                </div>
              </div>

              {/* Motivo y Acciones */}
              <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                <div className="text-right sm:space-y-0.5">
                  <p className="text-xs text-slate-400 font-medium">Motivo</p>
                  <p className="text-sm font-semibold text-slate-700">{cita.motivo}</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 text-xs font-semibold border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                    Reagendar
                  </button>
                  <button className="px-3 py-1.5 text-xs font-semibold bg-slate-50 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                    Detalle
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Columna Derecha: Resumen de Disponibilidad u Horarios Especiales */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider pl-1">Disponibilidad Médica</h3>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="space-y-1">
              <p className="text-xs text-slate-400 font-medium">Médico de Guardia</p>
              <p className="text-sm font-bold text-slate-800">Dr. Alejandro Fuentes</p>
            </div>
            <div className="h-px bg-slate-100"></div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl">
                <p className="text-xs text-emerald-600 font-semibold">Atendidas</p>
                <p className="text-2xl font-bold text-emerald-800 mt-1">4</p>
              </div>
              <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl">
                <p className="text-xs text-slate-500 font-semibold">Restantes</p>
                <p className="text-2xl font-bold text-slate-700 mt-1">8</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <CitaModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default CitasCalendario;