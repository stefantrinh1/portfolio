  const portfolioFilterReducerDefaultState = {
    text:"",
    projectType:"", // Utility, E-commerce, Portfolio, Blog, In Progress, Commercial, Clubs,
    stackList:[],
  }

  
  export default (state = portfolioFilterReducerDefaultState, action) => {
    switch (action.type) {
      case "SET_TEXT_FILTER":
        return {...state, text:action.text}
        case "SET_PROJECT_TYPE":
          return {...state, projectType:action.projectType}
          case "SET_STACKS":
            return {...state, stackList:action.stackList}
      default:
        return state
    }
  }