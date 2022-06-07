import { createContext, useReducer } from "react";
import activeLinkReducer from "./activeLinkReducer";

const INITIAL_STATE = {
  activeLink: 1,
};

export const activeLinkContext = createContext(INITIAL_STATE);

export const ActiveLinkContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(activeLinkReducer, INITIAL_STATE);

  return (
    <activeLinkContext.Provider
      value={{
        activeLink: state.activeLink,
        dispatchLink: dispatch,
      }}
    >
      {children}
    </activeLinkContext.Provider>
  );
};
