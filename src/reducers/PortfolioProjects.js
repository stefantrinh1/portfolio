const portfolioProjectsReducerDefaultState = {
  projects: []
};

export default (state = portfolioProjectsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_PROJECTS":
      return { ...state, projects: action.projects };
    default:
      return state;
  }
};
