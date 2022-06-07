import { createContext, useReducer } from "react";
import sidebarModeReducer from "./SidebarModeReducer";

const INITIAL_STATE = {
  sidebarColor: "#2196f3",
  activeTheme: 1,
};

export const sidebarModeContext = createContext(INITIAL_STATE);

export const SidebarModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sidebarModeReducer, INITIAL_STATE);

  return (
    <sidebarModeContext.Provider
      value={{
        sidebarColor: state.sidebarColor,
        activeTheme: state.activeTheme,
        dispatchColor: dispatch,
      }}
    >
      {children}
    </sidebarModeContext.Provider>
  );
};
