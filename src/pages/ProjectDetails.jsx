import { Location, useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation()

  console.log(location.state);
  return (
    <>
      <h1>{location.state.title}</h1>
      <p>{location.state.description}</p>
      <img src={location.state.image} alt={location.state.title} />
      <a href={location.state.repositoryLink}>Github Repo</a>
      <a href={location.state.deploymentLink}>Deployment Link</a>
    </>
  )
}

export default ProjectDetails;