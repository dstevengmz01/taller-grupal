import { useEffect, useState } from "react";
import axios from "axios";

function Reserva() {
  const [user, setUser] = useState([]);
  const listUser = async () => {
    try {
      const respuesta = await axios.get("http://localhost:6502/apir/");
      console.log(respuesta);
      setUser(respuesta.data);
    } catch (e) {
      console.log("ERROR AL OBTENER LOS DATOS", e);
    }
  };

  useEffect(() => {
    listUser();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>fechaReserva </th>
            <th>lugar </th>
            <th>nombreReserva </th>
            <th>usuario_id</th>
          </tr>
        </thead>
        <tbody>
          {user.map((index) => {
            return (
              <tr key={index.id}>
                <td>{index.fechaReserva}</td>
                <td>{index.lugar}</td>
                <td>{index.nombreReserva}</td>
                <td>{index.usuario_id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Reserva;
