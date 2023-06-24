export const generarId = () => {
  // Genera un id random mientras se convierte en un string
  // de codigo binario en "n" posiciones y se extrae desde
  // la posición 2 de la cadena. Se adhiere el valor de la fecha
  // actual también pasada a string de código binario.
  const random = Math.random().toString(36).substr(2);
  const fecha = Date.now().toString(36);
  return random + fecha;
};

export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

export const formatoMoneda = (cantidad) => {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
