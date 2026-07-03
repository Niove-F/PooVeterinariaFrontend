# ARQUITECTURA FRONTEND: SISTEMA VETERINARIO

## 1. Stack Tecnológico Base

* **Core:** React 18+ (Basado en Componentes Funcionales y Hooks).
* **Tooling/Empaquetador:** Vite (Configurado para entorno SPA - Single Page Application).
* **Enrutamiento:** React Router DOM (Manejo de rutas declarativas y protección de accesos).
* **Estilo y UI Recomendado:** Tailwind CSS + Librería de componentes listos (Ant Design o Shadcn/ui) para optimizar la construcción de tablas complejas, modales y formularios.

---

## 2. Principios de Diseño Aplicados (Clean Architecture)

Para evitar el acoplamiento severo que existía en Java Swing, el frontend se rige bajo tres reglas estrictas:

1. **Desacoplamiento de Datos (API Layer):** Ningún componente visual realiza peticiones HTTP directamente (`fetch`/`axios`). Toda la comunicación con el backend de Spring Boot está centralizada en módulos aislados.
2. **Consolidación de UX (Single-Page-Flow):** Se eliminan las ventanas independientes y las rutas redundantes (`/new`, `/edit`). El flujo se resuelve mediante **Modales Reutilizables** y **Vistas 360° con Pestañas (Tabs)**, reduciendo las páginas de primer nivel de 22 a solo 6 principales.
3. **Principio de Responsabilidad Única:** Las vistas dibujan la pantalla principal, los componentes resuelven elementos específicos de la UI, y los Hooks/Stores manejan la lógica de estado y del negocio.

---

## 3. Mapa Detallado del Árbol de Directorios (`/src`)

```text
src/
├── api/                  # Capa de Comunicación con el Backend
│   ├── axiosClient.js    # Cliente base (Interceptores para adjuntar Token JWT)
│   ├── clientesApi.js    # Peticiones CRUD de clientes
│   ├── pacientesApi.js   # Peticiones de mascotas e historial médico
│   └── citasApi.js       # Peticiones del calendario y horarios
│
├── store/                # Gestión de Estado Global
│   └── authStore.js      # Estado de sesión (Usuario activo, Rol, Token)
│
├── router/               # Sistema de Rutas y Seguridad
│   └── AppRouter.jsx     # Definición de URLs y Guardias de Seguridad (Protected Routes)
│
├── components/           # Componentes Reutilizables y UI
│   ├── layout/           # Estructura del Cascarón Web
│   │   ├── Sidebar.jsx   # Menú de navegación lateral
│   │   ├── Navbar.jsx    # Barra superior con datos de usuario
│   │   ├── Breadcrumbs.jsx  # Guía de ubicación contextual
│   │   └── MainLayout.jsx  # Contenedor global, menú fijo a la izquierda y el contenido dinámico a la derecha
│   ├── clientes/         # Bloques específicos del módulo de Clientes
│   │   ├── ClienteModalForm.jsx # Formulario dual (Crea si está vacío / Edita si recibe ID)
│   │   └── MascotasTabs.jsx     # Sub-componente para renderizar la lista de mascotas
│   ├── pacientes/        # Bloques del módulo de Mascotas
│   │   ├── MascotaModalForm.jsx # Formulario modal para agregar/editar mascotas
│   │   └── HistorialMedicoDrawer.jsx # Panel lateral desplegable con el historial
│   └── citas/
│       └── CitaModalForm.jsx    # Modal para agendar/reprogramar desde el calendario
│
└── views/                # Páginas Principales (Puntos de entrada de Rutas)
    ├── Auth/
    │   └── Login.jsx     # Pantalla única de autenticación (Reemplaza Login dialog)
    ├── Dashboard/
    │   └── Dashboard.jsx # Panel inicial con métricas, gráficos y alertas rápidas
    ├── Clientes/
    │   ├── ClientesList.jsx   # Tabla maestra de búsqueda y gestión de clientes
    │   └── ClienteDetail.jsx  # Vista 360° del cliente y pestañas de sus mascotas
    ├── Citas/
    │   └── CitasCalendario.jsx# Interfaz visual de agenda (Calendario completo)
    └── Reportes/
        └── Reportes.jsx  # Generador de analíticas y exportaciones

```

---

## 4. Flujo de Control y Datos Relevantes

### A. El Patrón "Modal Dual" (Crear / Editar)

En lugar de duplicar formularios, componentes como `ClienteModalForm` operan mediante propiedades dinámicas (*props*):

* Si el usuario presiona **"Nuevo Cliente"**, la vista abre la modal pasando `currentCliente = null`. El componente se dibuja vacío y apunta al endpoint `POST /api/clientes`.
* Si el usuario presiona **"Editar"** en una fila de la tabla, la vista abre la misma modal pasando `currentCliente = { id: 1, nombre: '...' }`. El componente precarga los datos y apunta al endpoint `PUT /api/clientes/1`.

### B. Flujo de Navegación "Vista 360°" (Detalle de Cliente)

Para evitar que el usuario se pierda navegando por el historial de la mascota fuera del contexto del dueño:

1. Ruta `/clientes/:id` carga la vista `ClienteDetail.jsx`.
2. Muestra la información del propietario y un panel de pestañas (`Tabs`).
3. La pestaña de "Mascotas" renderiza `MascotasTabs.jsx`.
4. Al hacer clic en una mascota, no se cambia de página; se dispara `HistorialMedicoDrawer.jsx` (un panel que emerge desde la derecha de la pantalla) exponiendo vacunas, diagnósticos antiguos y tratamientos, manteniendo al usuario siempre dentro de la ficha del cliente.

---

## 5. Estrategia de Integración con el Backend (Para cuando esté listo)

* **Autenticación:** El frontend capturará el token JWT generado por Spring Boot en el `/login`, lo almacenará de forma segura en el `authStore` y el `axiosClient` se encargará de inyectarlo automáticamente en la cabecera `Authorization: Bearer <token>` de cada petición futura.
* **Estructura REST:** Las llamadas en la carpeta `/src/api/` mapearán limpiamente los recursos expuestos por el backend (ej. `GET /api/clientes?page=1`, `DELETE /api/pacientes/5`).

