const portfolioProjectsReducerDefaultState = {
  projects: [],
  loading: true,
  error: null
};

export default (state = portfolioProjectsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_PROJECTS":
      console.log("setprojects hit")
      return { 
        ...state, 
        projects: action.projects,
        loading:action.loading,
        error:action.error
       };
    default:
      return state;
  }
};
