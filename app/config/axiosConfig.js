import axios from 'axios';

// Crear una instancia de axios con configuración predeterminada
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,

  // Puedes añadir más configuraciones predeterminadas aquí
  headers: {
    'Content-Type': 'application/json',
  },

  // Considera añadir un timeout a tus solicitudes para evitar esperas indefinidas
  timeout: 10000,
});

// Exporta la instancia configurada para usarla en toda tu aplicación
export default api;
