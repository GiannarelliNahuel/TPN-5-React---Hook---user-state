# TPN°5 React - Hook - user state

## Enunciado

Tener en cuenta:
https://www.tutorialesprogramacionya.com/reactya/detalleconcepto.php?punto=5&codigo=5&inicio=0

- Cree un componente de contador que tenga un botón para aumentar el valor del contador
  y otro para disminuirlo.
- Usar el Hook useState para mantener el valor actual del contador.

## Solución

- `src/Contador.js`: componente `Contador` con el Hook `useState`:
  ```js
  const [contador, setContador] = useState(0);
  ```
  - El valor inicial es `0`.
  - El botón **Aumentar** llama a `setContador(contador + 1)`.
  - El botón **Disminuir** llama a `setContador(contador - 1)`.
  - Al cambiar el estado, React vuelve a dibujar solo el valor que se muestra en pantalla.
- `src/App.js`: usa el componente `<Contador />`.

## Cómo ejecutarlo

```bash
npm install
npm start
```

Se abre en http://localhost:3000
