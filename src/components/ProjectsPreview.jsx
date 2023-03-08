const ProjectsPreview = (props) => {
  return (
    <section className="project">
      <h2>
          {props.project.title}
      </h2>
      <div id="preview-container">
        <img 
            src={props.project.image} 
            alt={props.project.title}
        />
        <p>{props.project.description}</p>
        <h3>Technologies</h3>
        <p>{props.project.technologies}</p>
      </div>
    </section>
  );
}

export default ProjectsPreview;