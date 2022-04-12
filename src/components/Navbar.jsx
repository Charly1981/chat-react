import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand">Chat</span>

      <div>
        <button className="btn btn-outline-success mt-2">Acceder</button>
        <button className="btn btn-outline-danger mt-2">Cerrar Sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;
