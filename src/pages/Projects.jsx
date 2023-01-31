import projects from "../data/projects"
import ProjectsList from "../components/ProjectsList"

function Projects() {
  return (
    <>
    <h1>Projects</h1>
    <ul>
      {projects.map(project => 
        <li key={project.title}>
          <ProjectsList project={project} />
        </li>
      )}
    </ul>
    </>
  )
}

export default Projects