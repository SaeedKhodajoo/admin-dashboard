const activeLinkReducer = (state, action) => {
  switch (action.type) {
    case "1":
      return {
        activeLink: 1,
      };
    case "2":
      return {
        activeLink: 2,
      };
    case "3":
      return {
        activeLink: 3,
      };

    default:
      return state;
  }
};

export default activeLinkReducer;
