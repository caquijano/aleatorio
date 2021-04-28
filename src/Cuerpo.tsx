import React, { ChangeEvent, useEffect, useState } from "react";

function Cuerpo() {
  const initialState = { //Estado inicial de los campos se encuentran vacias
    semilla: "",
    constante: "",
    cantidad: "",
    resultado: 0, // variable a * X0
    ramdon: 0, // variable  Xn
    
  };
  const [aleatorio, setAleatorio] = useState<any>(initialState); //variable que almacena los datos que vienen de la vista
  const [arrayAleatorio, setArrayAleatorio] = useState<any>([]); // Arreglo de datos donde se almacena cada fila de datos
  const [btn, setBtn] = useState(false); // estado para activar el boton "Calcular"
  //Re-asignacion de variables
  let semilla1: any = aleatorio.semilla;
  let cantidad1: any = aleatorio.cantidad;
  let constante1: any = aleatorio.constante;
  let resultado1: any = aleatorio.resultado;
  let ramdon1: any = aleatorio.ramdon;
  let arreglo: any = [];

  //Funcion donde se calculan los numeros pseudoaleatorios
  const Calcular = async (i: any) => {
    if (aleatorio.semilla && aleatorio.constante && aleatorio.cantidad) { //Comprobar que se hallan llenado todos los datos
      for (let i = 0; i < cantidad1; i++) { // Ciclo para ejecutar la funcion la cantidad de pseudoaleatorios deseados
        resultado1 = semilla1 * constante1; // hallar (a * X0)
        const base = `${constante1}`; // Asignar variable Constante como una cadena de texto
        if (resultado1.toString().length % 2 == 1 && base.length % 2 == 0) // comprueba si el numero de digitos de (a * X0) es impar y la constante es par
          resultado1 = resultado1 * 10; // si la condicion es verdadera se le agrega un cero a (a * X0)
        if (base.length % 2 == 0) { //verifica si la cadena de "Constante" es par
          Procedimiento(base, i); // llamado de la funcion donde se llenara un arreglo con todos los datos
        } else {//la cadena de "Constante" es impar 
          if (resultado1.toString().length % 2 == 0) //verifica si la cadena de "(a * X0)" es par
            resultado1 = resultado1 * 10;// Si la cadena es Par
          Procedimiento(base, i);// llamado de la funcion donde se llenara un arreglo con todos los datos
        }
      }
    }

    setArrayAleatorio(arreglo); // al terminar de recorrer el ciclo se crea un objeto con todos los datos
    setAleatorio({semilla: "", constante: "", cantidad:"" }) // limpia todos los campos de la vista
  };
/*
*
*!!! Funcion donde se llena cada fila de la tabla
*/
  const Procedimiento = async (base: any, i: number) => {
    let help = (resultado1.toString().length - base.length) / 2; // metodo para hallar cuantos digitos se vana quitar de (a * X0)
    let nuevo = resultado1.toString().substr(help, base.length); // metodo que extrae los numeros de la mitad ylos almacena en nuevo
    ramdon1 = nuevo; //asignamos nuevo a la variable que tiene Xn
    const array = {  //Arreglo donde se almacena cada fila de datos
      semilla: semilla1,
      constante: constante1,
      ramdon: ramdon1,
      resultado: resultado1,
    };
    semilla1 = ramdon1; //Asignamos el valor de Xn a la semilla para volver a realizar el procedimiento con la nueva semilla
    arreglo[i] = array;
  };
  //Funcion que extrae los valores de la vista
  const handlerInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setAleatorio({ ...aleatorio, [e.target.name]: e.target.value });
  };
  //Funcion que verifica que el numero tenga al menos 4 digitos y activa el boton
  const stringLength = async () => {
    if (aleatorio.semilla > 1000) {
      if (`${aleatorio.semilla}`.length === `${aleatorio.constante}`.length) {
        setBtn(true);
      } else {
        setBtn(false);
      }
    }
  };
  useEffect(() => {
    stringLength();
  }, [aleatorio.constante, aleatorio.semilla]);

  //Renderizado del formulario
  return (
    <div className="card-body">
      <div className="form-group row">
        <div className="form-group row col-lg-5">
          <label className="col-form-label" htmlFor="inputDefault">
            Semilla (X<sub>0</sub>)
          </label>
          <input
          value={aleatorio.semilla}
            name="semilla"
            type="number"
            className="form-control"
            placeholder="Digite un numero de almenos 4 digitos"
            id="inputDefault"
            onChange={handlerInputChange}
          />
        </div>
        <div className="form-group row col-lg-1"></div>
        <div className="form-group row col-lg-4">
          <label className="col-form-label" htmlFor="inputDefault">
            Constante (a)
          </label>
          <input
          value={aleatorio.constante}
            name="constante"
            type="number"
            className="form-control"
            placeholder="Digite un numero de almenos 4 digitos"
            id="inputDefault"
            onChange={handlerInputChange}
          />
        </div>
        <div className="form-group row col-lg-1"></div>
        <div className="form-group row col-lg-3">
          <label className="col-form-label" htmlFor="inputDefault">
            Cantidad pseudoaleatorios
          </label>
          <input
          value={aleatorio.cantidad}
            name="cantidad"
            type="number"
            className="form-control"
            placeholder="#"
            id="inputDefault"
            onChange={handlerInputChange}
          />
        </div>
        {btn && aleatorio.cantidad ? (
          <div style={{textAlign:"center", width:"100%"}}>
          <p style={{color: "green"}}>Campos llenados satisfactoriamente, presione "calcular"</p>
          
            <button
              type="button"
              className="btn btn-success"
              onClick={Calcular}
            >
              Calcular
            </button>
          </div>
        ) : (
          <div style={{textAlign:"center", width:"100%"}}>
          <p style={{color: "red"}}>*llene todos lo campos correctamente</p>
            <button type="button" className="btn btn-secondary">
              Calcular
            </button>
          </div>
        )}
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Constante</th>
            <th scope="col">semilla</th>
            <th scope="col">
              a * X<sub>0</sub>
            </th>
            <th scope="col">
              X<sub>n</sub>
            </th>
            <th scope="col">
              r<sub>i</sub>
            </th>
          </tr>
        </thead>
        {arrayAleatorio.map((element: any, index: any) => {
          return (
            <tbody key={index}>
              <tr>
                <th scope="row">
                  Y<sub>{index}</sub>
                </th>
                <td>{element.constante}</td>
                <td>{element.semilla}</td>
                <td>{element.resultado}</td>
                <td>{element.ramdon}</td>
                <td>0.{element.ramdon}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <h1></h1>
    </div>
  );
}

export default Cuerpo;
