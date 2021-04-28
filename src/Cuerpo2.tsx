import React, { ChangeEvent, useEffect, useState } from "react";

function Cuerpo2() {
  const initialState = {
    semilla: 0,
    constante: 0,
    cantidad: 0,
    ramdon: 0,
  };
  const [aleatorio, setAleatorio] = useState<any>(initialState);
  const [arrayAleatorio, setArrayAleatorio] = useState<any>([]);
  let arreglo:any  = []
  const Calcular = async (i:any) => {
    if (i == 0) {
      const x = aleatorio.semilla * aleatorio.constante;
      const base = `${aleatorio.semilla}`;
      if (base.length % 2 == 0) {
        if (x.toString().length % 2 == 0) {
          let help = (x.toString().length - base.length) / 2;
          let nuevo = x.toString().substr(help, base.length);
          setAleatorio({ ...aleatorio, ramdon: nuevo });
          const array = {
            semilla: aleatorio.semilla,
            constante: aleatorio.constante,
            ramdon: nuevo,
          };
          setAleatorio({ ...aleatorio, semilla: nuevo });
          setArrayAleatorio([...arrayAleatorio, array]);
        } else {
        }
      } else {
        console.log("semilla no tiene cadena par");
      }
    } else {
      const x = aleatorio.semilla * aleatorio.constante;
      const base = `${aleatorio.semilla}`;
      if (base.length % 2 == 0) {
        if (x.toString().length % 2 == 0) {
          let help = (x.toString().length - base.length) / 2;
          let nuevo = x.toString().substr(help, base.length);
          setAleatorio({ ...aleatorio, ramdon: nuevo });
          const array = {
            semilla: aleatorio.semilla,
            constante: aleatorio.constante,
            ramdon: nuevo,
          };
          setAleatorio({ ...aleatorio, semilla: nuevo });
          arreglo[i] = array;
          for (let j = 0; j < i; j++) {
            console.log(arreglo[j])
            
          }
          setArrayAleatorio([...arrayAleatorio, array]);
        } else {
        }
      } else {
        console.log("semilla no tiene cadena par");
      }
    }
  };
  const Iterar = async () => {
    if (aleatorio.semilla && aleatorio.constante && aleatorio.cantidad) {
      for (let i = 0; i < aleatorio.cantidad ; i++) {
       await Calcular(i)
      }      
    } else {
      console.log("Digite todos los datos");
    }
  };



  const handlerInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setAleatorio({ ...aleatorio, [e.target.name]: e.target.value });
  };
 

  return (
    <div className="card-body">
      <div className="form-group row">
        <div className="form-group row col-lg-5">
          <label className="col-form-label" htmlFor="inputDefault">
            Semilla (X<sub>0</sub>)
          </label>
          <input
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
            name="cantidad"
            type="number"
            className="form-control"
            placeholder="#"
            id="inputDefault"
            onChange={handlerInputChange}
          />
        </div>
        <button type="button" className="btn btn-success" onClick={Iterar}>
          Calcular
        </button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">constante</th>
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
                <td>{element.constante * element.semilla}</td>
                <td>{element.ramdon}</td>
                <td>0.{element.ramdon}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Cuerpo2;