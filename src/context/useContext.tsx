import React, { createContext, useState } from "react";
import { MyContextProps, MyContextProviderProps } from "../types/contextTypes";

export const useMyContext = createContext<MyContextProps>({} as MyContextProps);

const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [isGaming, setIsGaming] = useState(false);

  return (
    <useMyContext.Provider value={{ isGaming, setIsGaming }}>
      {children}
    </useMyContext.Provider>
  );
};

export default MyContextProvider;
