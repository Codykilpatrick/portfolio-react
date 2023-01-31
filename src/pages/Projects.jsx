import projects from "../data/projects"
import ProjectsPreview from "../components/ProjectsPreview"

function Projects() {
  return (
    <>
    <h1>Projects</h1>
      {projects.map(project => 
        <div key={project.title}>
          <ProjectsPreview project={project} />
        </div>
      )}
    </>
  )
}

export default Projects