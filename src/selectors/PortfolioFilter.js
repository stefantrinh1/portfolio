export default (projects, filters) => {
  const { text, projectType, stackList } = filters;
  console.log(projects);
  return projects.projects.filter(project => {
    const textMatch =
      project.fields.projectName.toLowerCase().includes(text.toLowerCase()) ||
      project.fields.projectDescription
        .toLowerCase()
        .includes(text.toLowerCase());

    let projectTypeMatch = project.fields.projectType
      .toLowerCase()
      .includes(projectType.toLowerCase());
    if (projectType === "All") {
      projectTypeMatch = true;
    }

    // returns the stack objects that match the stack
    let stackMatch = project.fields.techStack.filter(techStack => {
      const { name } = techStack.fields;
      return stackList.includes(name);
    });

    // if there are no matches project should not be returned
    // if the number of chosen filtered stacks match the number of return then it meet
    // the criteria of having all the stacks selected
    if(stackMatch.length === 0 || stackMatch.length !== stackList.length) {
        stackMatch = false
    }

    // if the orignal stack filtering is empty all projects should be on display
    if (stackList.length === 0) {
      stackMatch = true;
    }

// all three have to match in order to be displayed
    return textMatch && projectTypeMatch && stackMatch;
  });
};
