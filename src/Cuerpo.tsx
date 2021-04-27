import React, { ChangeEvent, useEffect, useState } from "react";

function Cuerpo() {
  const initialState = {
    semilla: 0,
    constante: 0,
    cantidad: 0,
    ramdon: 0,
    resultado: 0,
  };
  const [aleatorio, setAleatorio] = useState<any>(initialState);
  const [arrayAleatorio, setArrayAleatorio] = useState<any>([]);
  const [validate, setValidate] = useState(true);
  const [btn, setBtn] = useState(false);
  let semilla1: any = aleatorio.semilla;
  let cantidad1: any = aleatorio.cantidad;
  let constante1: any = aleatorio.constante;
  let resultado1: any = aleatorio.resultado;
  let ramdon1: any = aleatorio.ramdon;
  let arreglo: any = [];
  const Calcular = async (i: any) => {
    if (aleatorio.semilla && aleatorio.constante && aleatorio.cantidad) {
      for (let i = 0; i < cantidad1; i++) {
        console.log(i, semilla1);
        resultado1 = semilla1 * constante1;
        const base = `${constante1}`;
        if (resultado1.toString().length % 2 == 1 && base.length % 2 == 0)
          resultado1 = resultado1 * 10;
        if (base.length % 2 == 0) {
          Procedimiento(base, i);
        } else {
          if (resultado1.toString().length % 2 == 0)
            resultado1 = resultado1 * 10;
          Procedimiento(base, i);
        }
      }
    } else {
      console.log("Digite todos los datos");
    }
    setArrayAleatorio(arreglo);
    setAleatorio({semilla: "", constante: "", cantidad:"" })
    
  };

  const Procedimiento = async (base: any, i: number) => {
    let help = (resultado1.toString().length - base.length) / 2;
    let nuevo = resultado1.toString().substr(help, base.length);
    ramdon1 = nuevo;
    const array = {
      semilla: semilla1,
      constante: constante1,
      ramdon: ramdon1,
      resultado: resultado1,
    };
    semilla1 = ramdon1;
    arreglo[i] = array;
  };

  const handlerInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setAleatorio({ ...aleatorio, [e.target.name]: e.target.value });
  };
  const stringLength = async () => {
    if (aleatorio.semilla > 1000) {
      if (`${aleatorio.semilla}`.length === `${aleatorio.constante}`.length) {
        setValidate(true);
        setBtn(true);
      } else {
        setBtn(false);
        setValidate(false);
      }
    }
  };
  useEffect(() => {
    stringLength();
  }, [aleatorio.constante, aleatorio.semilla]);
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
            Cantidad aleatorios
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
