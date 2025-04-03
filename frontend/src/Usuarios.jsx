import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Reserva from "./reserva";

const UserContext = createContext();
function Usuarios() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setselectedUser] = useState(null);
  const navigate = useNavigate();
  const listUser = async () => {
    try {
      const respuesta = await axios.get("http://localhost:6502/apiu");
      console.log(respuesta);
      setUsers(respuesta.data);
    } catch (e) {
      console.log("ERROR AL OBTENER LOS DATOS", e);
    }
  };

  const selectUser = (usuario) => {
    setselectedUser(usuario);
    localStorage.setItem("selectedUser", JSON.stringify(usuario));
    navigate("/Detalles");
  };

  useEffect(() => {
    const guardado = localStorage.getItem("selectedUser");
    if (guardado) setselectedUser(JSON.parse(guardado));
    listUser();
  }, []);

  return (
    <UserContext.Provider value={{ selectedUser, setselectedUser }}>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>
                  <button>Editar</button>
                  <button>Eliminar</button>
                  <button onClick={() => selectUser(usuario)}>
                    Ver detalles
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </UserContext.Provider>
  );
}

export default Usuarios;
export { UserContext };
