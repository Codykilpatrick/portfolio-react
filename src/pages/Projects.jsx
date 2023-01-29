import projects from "../data/projects"


function Projects() {
  return (
    <>
    <h1>Projects</h1>
    <ul>
      {projects.map(project => 
        <li>
          {project.title}
        </li>
      )}
    </ul>
    </>
  )
}

export default Projects