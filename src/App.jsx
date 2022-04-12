import React from "react";
import Navbar from "./components/Navbar";
import { ChatContext } from "./context/ChatProvider";

const App = () => {
  const { saludo } = React.useContext(ChatContext);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
