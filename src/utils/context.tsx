import React, { createContext, useState } from 'react';

interface ContextProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  responseMessage: string;
  setResponseMessage: React.Dispatch<React.SetStateAction<string>>;
}
// Создаем контекст вне компонента
export const Context = createContext<ContextProps | null>(null);

const MyProvider = ({ children } : React.PropsWithChildren) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  return (
    <Context.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        message,
        setMessage,
        responseMessage,
        setResponseMessage,
      }}>
      {children}
    </Context.Provider>
  );
};


export default MyProvider;