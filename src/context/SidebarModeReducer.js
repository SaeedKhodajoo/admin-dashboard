const sidebarModeReducer = (state, action) => {
  switch (action.type) {
    case "RED":
      return {
        sidebarColor: "#cf0c0c",
        activeTheme: 2,
      };
    case "GREEN":
      return {
        sidebarColor: "#007200",
        activeTheme: 4,
      };
    case "BLUE":
      return {
        sidebarColor: "#2196f3",
        activeTheme: 1,
      };
    case "ORANGE":
      return {
        sidebarColor: "#f79605",
        activeTheme: 3,
      };
    default:
      return state;
  }
};

export default sidebarModeReducer;
