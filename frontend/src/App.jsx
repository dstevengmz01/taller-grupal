import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Usuarios, { UserContext } from "./Usuarios";
import UserDetail from "./Detalles";
import { useState } from "react";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Usuarios />} />
          <Route path="/detalles" element={<UserDetail />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
