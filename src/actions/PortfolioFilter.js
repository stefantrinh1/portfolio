import * as contentful from "contentful";

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

  export const fetchStackOptions = () => dispatch => {
    const client = contentful.createClient({
      space: "6uk9nhmjdkre",
      accessToken: "vRPrbrCwApcb4AXyT2yS3mXp2JNvSMdzTZ1k2jhmEAA"
    });
 
    const FetchByContentType = query => client.getEntries(query);

    FetchByContentType({
      content_type: "about"
    }).then(data => {
      const stacks = data.items[0].fields.techStack.map((stack)=> {
        return stack.fields.name
      })
      dispatch({
        type: "FETCH_STACK_OPTIONS",
        stackOptions:stacks,
        loading:false,
      });
    }).catch((error)=> {
      dispatch({
        type: "FETCH_STACK_OPTIONS",
        stackOptions:[],
        loading:false,
        error:error
      })
    });
  }