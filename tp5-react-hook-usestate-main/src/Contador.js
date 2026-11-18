import { useState } from 'react';

// Componente contador: el Hook useState mantiene el valor actual del contador.
function Contador() {
  // contador = valor actual, setContador = función para actualizarlo
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function disminuir() {
    setContador(contador - 1);
  }

  return (
    <div className="contador">
      <p className="valor">{contador}</p>
      <div className="botones">
        <button onClick={disminuir}>Disminuir</button>
        <button onClick={aumentar}>Aumentar</button>
      </div>
    </div>
  );
}

export default Contador;
