const portfolioFilterReducerDefaultState = {
  text: "",
  projectType: "", // Utility, E-commerce, Portfolio, Blog, In Progress, Commercial, Clubs,
  stackList: [], // the chosen list from user
  stackOptions:[], // all the potential options go here pulled from contentful
  loading:false,
  error:null
};

export default (state = portfolioFilterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SET_PROJECT_TYPE":
      return { ...state, projectType: action.projectType };
    case "SET_STACKS":
      return { ...state, stackList: action.stackList };
      case "FETCH_STACK_OPTIONS":
        return { ...state, stackOptions: action.stackOptions };
    default:
      return state;
  }
};
