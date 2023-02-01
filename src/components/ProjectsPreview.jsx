import { Link } from "react-router-dom";

const ProjectsPreview = (props) => {
  return (
    <div id="preview-container">
      <img 
          src={props.project.image} 
          alt={props.project.title}
      />
      <section>
        <h3>
            {props.project.title}
        </h3>
				<p>{props.project.description}</p>
      </section>
      <Link
        to={`/${props.project.title}`}
      >
        See More
      </Link>
    </div>
  );
}

export default ProjectsPreview;