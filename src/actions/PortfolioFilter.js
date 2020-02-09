// Navigation Actions
 export const setTextFilter = (text) => ({
    type: "SET_TEXT_FILTER",
    text: text
  })

  export const setProjectType = (projectType) => ({
    type: "SET_PROJECT_TYPE",
    projectType: projectType
  })

  export const setStacks = (stackList) => ({
    type: "SET_STACKS",
    stackList: stackList // takes a true or false
  })