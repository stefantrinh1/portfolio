import * as contentful from "contentful";

export const startSetProjects = () => dispatch => {
  console.log("function hit");
  const client = contentful.createClient({
    space: "6uk9nhmjdkre",
    accessToken: "vRPrbrCwApcb4AXyT2yS3mXp2JNvSMdzTZ1k2jhmEAA"
  });
  // ====  Queries  ====
  const PortfolioQuery = {
    content_type: "portfolio"
  };
  const FetchByContentType = query => client.getEntries(query);
  FetchByContentType(PortfolioQuery).then(data => {
    console.log(data);
    dispatch({
      type: "SET_PROJECTS",
      projects: data.items,
      loading:false,
    });
  }).catch((error)=> {
    console.log(error)
    dispatch({
      type: "SET_PROJECTS",
      projects: [],
      loading:false,
      error:error
    })
  });
};
