  const navigationMobileSize = 767;

  const navigationReducerDefaultState = {
    navigationOpen :  window.innerWidth < navigationMobileSize ? false : true,
    windowSize: window.innerWidth,
    isMobileSize: window.innerWidth < navigationMobileSize ? true : false,
    mobileSizeLimit: 767
  }

  
  export default (state = navigationReducerDefaultState, action) => {
    switch (action.type) {
      case "TOGGLE_NAV":
        return {...state, navigationOpen:action.command}
        case "SET_WINDOW_SIZE":
          return {...state, windowSize:action.windowSize}
      default:
        return state
    }
  }