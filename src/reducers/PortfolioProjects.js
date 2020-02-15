const portfolioProjectsReducerDefaultState = {
  
};

export default (state = portfolioProjectsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_PROJECTS":
      console.log("setprojects hit")
      return { ...state, projects: action.projects };
    default:
      return state;
  }
};
