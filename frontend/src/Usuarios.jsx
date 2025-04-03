import { useEffect, useState, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Reserva from "./reserva";

const UserContext = createContext();
function Usuarios() {
  const [user, setUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();
  const listUser = async () => {
    try {
      const respuesta = await axios.get(
        "http://localhost:6502/apiusuario/usuario"
      );
      console.log(respuesta);
      setUser(respuesta.data);
    } catch (e) {
      console.log("ERROR AL OBTENER LOS DATOS", e);
    }
  };

  const selectUser = (usuario) => {
    console.log("Usuario seleccionado:", usuario);
    setSelectedUser(usuario);
    navigate("/detalles");
  };

  useEffect(() => {
    listUser();
  }, []);

  return (
    <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
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
            {user.map((usuario) => (
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
