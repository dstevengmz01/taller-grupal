import { UserContext } from "./Usuarios";
import { useContext } from "react";

function UserDetail() {
  const { selectedUser } = useContext(UserContext);
  return (
    <div>
      <h1>Detalles</h1>
      <p>
        <strong>ID: </strong>
        {selectedUser.id}
      </p>
      <p>
        <strong>Nombre: </strong>
        {selectedUser.nombre}
      </p>
    </div>
  );
}
export default UserDetail;
