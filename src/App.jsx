import React from "react";
import { ChatContext } from "./context/ChatProvider";

const App = () => {
  const { saludo } = React.useContext(ChatContext);

  return <div>CHAT {saludo}</div>;
};

export default App;
