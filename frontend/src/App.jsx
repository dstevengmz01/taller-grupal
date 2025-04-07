import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Usuarios from "./Usuarios";
import UserDetail from "./Detalles";
import { useState } from "react";
import { UserContext } from "./Usuarios";

import Login from "./Login";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Usuarios />} />
          <Route path="/Detalles" element={<UserDetail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
