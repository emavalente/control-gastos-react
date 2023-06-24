import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  esPresupuestoValido,
  setEsPresupuestoValido,
  listaGastos,
  setListaGastos,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {esPresupuestoValido ? (
        <ControlPresupuesto
          presupuesto={presupuesto}
          setEsPresupuestoValido={setEsPresupuestoValido}
          setPresupuesto={setPresupuesto}
          listaGastos={listaGastos}
          setListaGastos={setListaGastos}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setEsPresupuestoValido={setEsPresupuestoValido}
        />
      )}
    </header>
  );
};

export default Header;
