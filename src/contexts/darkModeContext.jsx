import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

export function darkModeContextProvider({ children }) {
  return (
    <DarkModeContext.Provider value={{ state }}>
      {children}
    </DarkModeContext.Provider>
  );
}
