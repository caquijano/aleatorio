import Cuerpo from "./Cuerpo";
function App() {
  return (
    <div style={{ textAlign: "center", alignItems: "center" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div
          className="collapse navbar-collapse"
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          id="navbarColor01"
        >
          <h1 style={{ color: "#18bc9c" }}>
            Algoritmo de multiplicador constante{" "}
          </h1>
        </div>
      </nav>
      <div>
        <div
          className="card border-success"
          style={{ maxWidth: "60%", marginInline: "20%", marginTop: 50 }}
        >
          <div className="card-header">
            Este algoritmo no congruencial es similar al algoritmo de productos
            medios. Los siguientes son los pasos necesarios para generar números
            pseudoaleatorios con el algoritmo de multiplicador constante.
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              1. Seleccionar una semilla (X<sub>0</sub>) con D dígitos (D {">"}{" "}
              3).
            </li>
            <li className="list-group-item">
              2. Seleccionar una constante (a) con D dígitos (D {">"} 3).
            </li>
            <li className="list-group-item">
              3. Sea Y<sub>0</sub>= a*X¿ sea X<sub>1</sub> = los D dígitos del
              centro, y sea r = O.D dígitos del centro.
            </li>
            <li className="list-group-item">
              4. Sea Y<sub>i</sub>,= a*X¡; sea X<sub>i+1</sub>, = los D dígitos
              del centro, y sea r<sub>i+1</sub> = O.D dígitos del centro para
              toda i = 1, 2, 3 ,... n
            </li>
            <li className="list-group-item">
              5. Repetir el paso 4 hasta obtener los n números r<sub>i</sub>{" "}
              deseados.
            </li>
          </ul>
          <Cuerpo/>
        </div>
      </div>
    </div>
  );
}

export default App;

