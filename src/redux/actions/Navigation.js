// Navigation Actions
 export const toggleNav = (OpenOrClose) => ({
    type: 'TOGGLE_NAV',
    command: OpenOrClose // takes a true or false
  })

  export const setWindowSize = (windowSize) => ({
    type: 'SET_WINDOW_SIZE',
    windowSize: windowSize // takes a true or false
  })
