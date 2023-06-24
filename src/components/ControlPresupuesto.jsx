import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { formatoMoneda } from "../helpers";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({
  presupuesto,
  listaGastos,
  setPresupuesto,
  setListaGastos,
  setEsPresupuestoValido,
}) => {
  const [disponible, setDisponible] = useState(presupuesto);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = listaGastos.reduce(
      (acc, cur) => cur.cantidad + acc,
      0
    );
    const totalDispobible = presupuesto - totalGastado;

    // Calcular porcentaje a dos decimales
    const nuevoPorcentaje = ((totalGastado * 100) / presupuesto).toFixed(2);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 500);

    setGastado(totalGastado);
    setDisponible(totalDispobible);
  }, [listaGastos]);

  const handleResetApp = () => {
    const resultado = confirm(
      "Eliminarás todo el contenido agregado. Estas Seguro?"
    );
    if (resultado) {
      console.log("App fue reseteada");
      setListaGastos([]);
      setPresupuesto(0);
      setEsPresupuestoValido(false);
      return;
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={porcentaje}
          styles={buildStyles({
            pathColor: porcentaje > 100 ? "#dc2626" : "#3b82f6",
            trailColor: "#f5f5f5",
            textColor: porcentaje > 100 ? "#dc2626" : "#3b82f6",
          })}
          text={`${porcentaje}% Gastado`}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear App
        </button>
        <p>
          <span>Presupuesto:</span> {formatoMoneda(presupuesto)}
        </p>

        <p className={`${disponible < 0 ? "negativo" : ""}`}>
          <span>Disponible:</span> {formatoMoneda(disponible)}
        </p>

        <p>
          <span>Gastado:</span> {formatoMoneda(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
