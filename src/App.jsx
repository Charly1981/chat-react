import React from "react";
import Navbar from "./components/Navbar";
import { ChatContext } from "./context/ChatProvider";

const App = () => {
  const { usuario } = React.useContext(ChatContext);
  return usuario != null ? (
    <div>
      <Navbar />
    </div>
  ) : (
    <div>cargando...</div>
  );
};

export default App;
