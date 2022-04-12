import React from "react";

export const ChatContext = React.createContext();

const ChatProvider = (props) => {
  const saludo = "Hola desde Chat";

  return (
    <ChatContext.Provider value={{ saludo }}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
