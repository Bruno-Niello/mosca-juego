import React from "react";

export type MyContextProps = {
  isGaming: boolean;
  setIsGaming: React.Dispatch<React.SetStateAction<boolean>>;
};

export type MyContextProviderProps = {
  children: React.ReactNode;
};
